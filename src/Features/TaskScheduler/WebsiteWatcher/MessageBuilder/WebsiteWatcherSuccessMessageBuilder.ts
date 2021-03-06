import { TYPES } from "@/App/AppTypes";
import WebsiteWatcherEntity from "@/Features/Command/WebsiteWatcher/WebsiteWatcherEntity";
import { MessageEmbed } from "discord.js";
import { inject, injectable } from "inversify";
import { Page } from "puppeteer";
import ContentResolver from "@/Domain/Browser/ContentResolver";
import ScreenshotResolver from "@/Domain/Browser/ScreenshotResolver";

@injectable()
export default class WebsiteWatcherSuccessMessageBuilder {
  private message = new MessageEmbed();

  constructor(
    @inject(TYPES.CONTENT_RESOLVER)
    private contentResolver: ContentResolver,
    @inject(TYPES.SCREENSHOT_RESOLVER)
    private screenshotResolver: ScreenshotResolver,
  ) {}

  public async build(page: Page, watcher: WebsiteWatcherEntity): Promise<MessageEmbed> {
    this.message = new MessageEmbed();
    const title = watcher.title || "Changement détecté !";
    const color = watcher.color || "#55ACEE";

    this.message.setTitle(title).setColor(color).setURL(watcher.url).setTimestamp();
    await this.putDescription(page, watcher);
    await this.putScreenshot(page, watcher);

    return this.message;
  }

  private async putScreenshot(page: Page, watcher: WebsiteWatcherEntity) {
    try {
      const querySelector = watcher.screenshotQuerySelector ?? watcher.querySelector;
      const screenshot = await this.screenshotResolver.takeScreenshot(page, querySelector);

      if (screenshot === undefined || screenshot === "") return;

      this.message
        .attachFiles([{ name: "image.png", attachment: screenshot }])
        .setImage("attachment://image.png");
    } catch (error) {
      console.error(
        `[SUCCESS-MESSAGE-BUILDER] — Unable to take screenshot on page with URL: ${watcher.url}…`,
        error,
      );
    }
  }

  private async putDescription(
    page: Page,
    { id, descriptionQuerySelector: querySelector }: WebsiteWatcherEntity,
  ) {
    try {
      if (!querySelector) return;

      const fetchedHTML = await this.contentResolver.resolveElementText(page, querySelector);

      this.message.setDescription(fetchedHTML);
    } catch (error) {
      console.error(
        `[SUCCESS-MESSAGE-BUILDER] — Unable to add description to the message with watcher id: ${id}`,
        error,
      );
    }
  }
}

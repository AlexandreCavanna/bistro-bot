const TYPES = {
  PREFIX: Symbol("PREFIX"),
  TOKEN: Symbol("TOKEN"),
  CLIENT: Symbol("CLIENT"),
  BROWSER: Symbol("BROWSER"),
  MESSAGE: Symbol("MESSAGE"),
  MESSAGE_CONTENT_LOWERED: Symbol("MESSAGE_CONTENT_LOWERED"),
  KEYWORD: Symbol("KEYWORD"),
  GUILD: Symbol("GUILD"),
  MEMBER: Symbol("MEMBER"),
  MESSAGE_SCOPE_BUILDER: Symbol("MESSAGE_SCOPE_BUILDER"),
  MEMBER_ADD_SCOPE_BUILDER: Symbol("MEMBER_ADD_SCOPE_BUILDER"),
  TASK_SCHEDULER_SCOPE_BUILDER: Symbol("TASK_SCHEDULER_SCOPE_BUILDER"),
  COMMAND: Symbol("COMMAND"),
  COMMAND_HANDLER: Symbol("COMMAND_HANDLER"),
  COMMAND_FACTORY: Symbol("COMMAND_FACTORY"),
  JAIL_COMMAND: Symbol("JAIL_COMMAND"),
  UNJAIL_COMMAND: Symbol("UNJAIL_COMMAND"),
  CONSTANT: Symbol("CONSTANT"),
  ROLE_MANAGER: Symbol("ROLE_MANAGER"),
  CHANNEL_MANAGER: Symbol("CHANNEL_MANAGER"),
  MESSAGE_MANAGER: Symbol("MESSAGE_MANAGER"),
  TARGETS_NOT_ADMIN_VALIDATOR: Symbol("TARGETS_NOT_ADMIN_VALIDATOR"),
  TARGETS_IN_JAIL_VALIDATOR: Symbol("TARGETS_IN_JAIL_VALIDATOR"),
  SENDER_HAS_EDIT_ROLE_VALIDATOR: Symbol("SENDER_HAS_EDIT_ROLE_VALIDATOR"),
  MEMBER_ADDED_HANDLER: Symbol("MEMBER_ADDED_HANDLER"),
  DEALABS_SCHEDULER: Symbol("DEALABS_SCHEDULER"),
  DEALABS_CHANNEL_MANAGER: Symbol("DEALABS_CHANNEL_MANAGER"),
  WEBSITE_WATCHER_SCHEDULER: Symbol("WEBSITE_WATCHER_SCHEDULER"),
  WEBSITE_WATCHER_UPDATE_CHECKER: Symbol("WEBSITE_WATCHER_UPDATE_CHECKER"),
  WEBSITE_WATCHER_UPDATE_HANDLER: Symbol("WEBSITE_WATCHER_UPDATE_HANDLER"),
  WEBSITE_WATCHER_CONTENT_RESOLVER: Symbol("WEBSITE_WATCHER_CONTENT_RESOLVER"),
  WEBSITE_WATCHER_SCREENSHOT_RESOLVER: Symbol("WEBSITE_WATCHER_SCREENSHOT_RESOLVER"),
  WEBSITE_WATCHER_MESSAGE_BUILDER: Symbol("WEBSITE_WATCHER_MESSAGE_BUILDER"),
  AVATAR_ERROR_HANDLER: Symbol("AVATAR_ERROR_HANDLER"),
  ADD_WATCHER_ARGS_VALIDATOR: Symbol("ADD_WATCHER_ARGS_VALIDATOR"),
  ADD_WATCHER_INTEGRITY_CHECK: Symbol("ADD_WATCHER_INTEGRITY_CHECK"),
  DELETE_WATCHER_ARGS_VALIDATOR: Symbol("DELETE_WATCHER_ARGS_VALIDATOR"),
  CONNECTION: Symbol("CONNECTION"),
  WEBSITE_WATCHER_REPOSITORY: Symbol("WEBSITE_WATCHER_REPOSITORY"),
  DEALABS_CHANNEL_REPOSITORY: Symbol("DEALABS_CHANNEL_REPOSITORY"),
  JAIL_CHANNEL_REPOSITORY: Symbol("JAIL_CHANNEL_REPOSITORY"),
  PURGE_ARGS_VALIDATOR: Symbol("PURGE_ARGS_VALIDATOR"),
  STATE: Symbol("STATE"),
};

export { TYPES };

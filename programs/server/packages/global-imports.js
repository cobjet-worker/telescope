/* Imports for global scope */

Accounts = Package['accounts-base'].Accounts;
Spiderable = Package.spiderable.Spiderable;
Email = Package.email.Email;
ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
ReactiveVar = Package['reactive-var'].ReactiveVar;
HTTP = Package.http.HTTP;
Router = Package['iron:router'].Router;
RouteController = Package['iron:router'].RouteController;
FastRender = Package['meteorhacks:fast-render'].FastRender;
SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
MongoObject = Package['aldeed:simple-schema'].MongoObject;
Handlebars = Package.ui.Handlebars;
OriginalHandlebars = Package['cmather:handlebars-server'].OriginalHandlebars;
juice = Package['sacha:juice'].juice;
SyncedCron = Package['percolatestudio:synced-cron'].SyncedCron;
CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
sanitizeHtml = Package['djedi:sanitize-html'].sanitizeHtml;
Avatar = Package['bengott:avatar'].Avatar;
Gravatar = Package['jparker:gravatar'].Gravatar;
TAPi18next = Package['tap:i18n'].TAPi18next;
TAPi18n = Package['tap:i18n'].TAPi18n;
moment = Package['momentjs:moment'].moment;
postStatuses = Package['telescope-base'].postStatuses;
STATUS_PENDING = Package['telescope-base'].STATUS_PENDING;
STATUS_APPROVED = Package['telescope-base'].STATUS_APPROVED;
STATUS_REJECTED = Package['telescope-base'].STATUS_REJECTED;
adminMenu = Package['telescope-tags'].adminMenu;
viewsMenu = Package['telescope-base'].viewsMenu;
addToPostSchema = Package['telescope-tags'].addToPostSchema;
addToCommentsSchema = Package['telescope-base'].addToCommentsSchema;
addToSettingsSchema = Package['telescope-base'].addToSettingsSchema;
addToUserSchema = Package['telescope-base'].addToUserSchema;
preloadSubscriptions = Package['telescope-tags'].preloadSubscriptions;
primaryNav = Package['telescope-tags'].primaryNav;
secondaryNav = Package['telescope-base'].secondaryNav;
viewParameters = Package['telescope-search'].viewParameters;
footerModules = Package['telescope-base'].footerModules;
heroModules = Package['telescope-base'].heroModules;
threadModules = Package['telescope-base'].threadModules;
postModules = Package['telescope-tags'].postModules;
postThumbnail = Package['telescope-base'].postThumbnail;
postHeading = Package['telescope-base'].postHeading;
postMeta = Package['telescope-base'].postMeta;
modulePositions = Package['telescope-base'].modulePositions;
postClassCallbacks = Package['telescope-base'].postClassCallbacks;
postSubmitRenderedCallbacks = Package['telescope-base'].postSubmitRenderedCallbacks;
postSubmitClientCallbacks = Package['telescope-base'].postSubmitClientCallbacks;
postSubmitMethodCallbacks = Package['telescope-base'].postSubmitMethodCallbacks;
postAfterSubmitMethodCallbacks = Package['telescope-base'].postAfterSubmitMethodCallbacks;
postApproveCallbacks = Package['telescope-base'].postApproveCallbacks;
postEditRenderedCallbacks = Package['telescope-base'].postEditRenderedCallbacks;
postEditClientCallbacks = Package['telescope-base'].postEditClientCallbacks;
postEditMethodCallbacks = Package['telescope-base'].postEditMethodCallbacks;
postAfterEditMethodCallbacks = Package['telescope-base'].postAfterEditMethodCallbacks;
commentClassCallbacks = Package['telescope-base'].commentClassCallbacks;
commentSubmitRenderedCallbacks = Package['telescope-base'].commentSubmitRenderedCallbacks;
commentSubmitClientCallbacks = Package['telescope-base'].commentSubmitClientCallbacks;
commentSubmitMethodCallbacks = Package['telescope-base'].commentSubmitMethodCallbacks;
commentAfterSubmitMethodCallbacks = Package['telescope-base'].commentAfterSubmitMethodCallbacks;
commentEditRenderedCallbacks = Package['telescope-base'].commentEditRenderedCallbacks;
commentEditClientCallbacks = Package['telescope-base'].commentEditClientCallbacks;
commentEditMethodCallbacks = Package['telescope-base'].commentEditMethodCallbacks;
commentAfterEditMethodCallbacks = Package['telescope-base'].commentAfterEditMethodCallbacks;
upvoteCallbacks = Package['telescope-base'].upvoteCallbacks;
downvoteCallbacks = Package['telescope-base'].downvoteCallbacks;
userEditRenderedCallbacks = Package['telescope-base'].userEditRenderedCallbacks;
userEditClientCallbacks = Package['telescope-base'].userEditClientCallbacks;
userProfileCompleteChecks = Package['telescope-base'].userProfileCompleteChecks;
userProfileDisplay = Package['telescope-base'].userProfileDisplay;
userProfileEdit = Package['telescope-base'].userProfileEdit;
userCreatedCallbacks = Package['telescope-base'].userCreatedCallbacks;
getTemplate = Package['telescope-base'].getTemplate;
templates = Package['telescope-base'].templates;
themeSettings = Package['telescope-base'].themeSettings;
deepExtend = Package['telescope-lib'].deepExtend;
camelToDash = Package['telescope-lib'].camelToDash;
dashToCamel = Package['telescope-lib'].dashToCamel;
camelCaseify = Package['telescope-lib'].camelCaseify;
getSetting = Package['telescope-lib'].getSetting;
getThemeSetting = Package['telescope-lib'].getThemeSetting;
getSiteUrl = Package['telescope-lib'].getSiteUrl;
trimWords = Package['telescope-lib'].trimWords;
can = Package['telescope-lib'].can;
_ = Package.underscore._;
capitalise = Package['telescope-lib'].capitalise;
i18n = Package['telescope-i18n'].i18n;
setLanguage = Package['telescope-i18n'].setLanguage;
serveAPI = Package['telescope-api'].serveAPI;
serveRSS = Package['telescope-rss'].serveRSS;
Categories = Package['telescope-tags'].Categories;
getPostCategories = Package['telescope-tags'].getPostCategories;
buildEmailTemplate = Package['telescope-email'].buildEmailTemplate;
sendEmail = Package['telescope-email'].sendEmail;
buildAndSendEmail = Package['telescope-email'].buildAndSendEmail;
getEmailTemplate = Package['telescope-email'].getEmailTemplate;
resetNewsletterSchedule = Package['telescope-newsletter'].resetNewsletterSchedule;
PostsDailyController = Package['telescope-daily'].PostsDailyController;
compareVersions = Package['telescope-update-prompt'].compareVersions;
Herald = Package['telescope-notifications'].Herald;
buildEmailNotification = Package['telescope-notifications'].buildEmailNotification;
getUnsubscribeLink = Package['telescope-notifications'].getUnsubscribeLink;
getDigestURL = Package['telescope-singleday'].getDigestURL;
PostsDigestController = Package['telescope-singleday'].PostsDigestController;
Feeds = Package['telescope-post-by-feed'].Feeds;
Releases = Package['telescope-releases'].Releases;
deleteDummyContent = Package['telescope-getting-started'].deleteDummyContent;
subscribeItem = Package['telescope-subscribe-to-posts'].subscribeItem;
unsubscribeItem = Package['telescope-subscribe-to-posts'].unsubscribeItem;
Iron = Package['iron:core'].Iron;
Async = Package['meteorhacks:async'].Async;
MongoInternals = Package.mongo.MongoInternals;
Mongo = Package.mongo.Mongo;
AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
Meteor = Package.meteor.Meteor;
WebApp = Package.webapp.WebApp;
main = Package.webapp.main;
WebAppInternals = Package.webapp.WebAppInternals;
Log = Package.logging.Log;
Tracker = Package.deps.Tracker;
Deps = Package.deps.Deps;
DDP = Package.livedata.DDP;
DDPServer = Package.livedata.DDPServer;
Blaze = Package.ui.Blaze;
UI = Package.ui.UI;
Spacebars = Package.spacebars.Spacebars;
check = Package.check.check;
Match = Package.check.Match;
Random = Package.random.Random;
EJSON = Package.ejson.EJSON;
T9n = Package['softwarerero:accounts-t9n'].T9n;
HTML = Package.htmljs.HTML;

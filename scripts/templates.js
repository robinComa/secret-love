angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("src/main/main.html","<md-toolbar layout=\"row\">\r\n    <div class=\"md-toolbar-tools\" layout=\"row\" layout-align=\"end start\">\r\n        <md-button ng-click=\"toggleSidenav(\'left\')\" hide-gt-sm aria-label=\"{{\'common.toogle.label\' | translate}}\">\r\n            <md-tooltip>\r\n                {{\'common.toogle.label\' | translate}}\r\n            </md-tooltip>\r\n            <ng-md-icon icon=\"view_headline\" size=\"30\"></ng-md-icon>\r\n        </md-button>\r\n        <h1 flex=\"50\" ui-sref=\"friends\">{{\'common.navbar.title\' | translate}}</h1>\r\n        <p class=\"login\">{{me.login}}</p>\r\n    </div>\r\n</md-toolbar>\r\n<section layout=\"row\" flex>\r\n    <md-sidenav ui-view=\"sidenav\"  md-swipe-left=\"toggleSidenav(\'left\')\" layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia(\'gt-sm\')\"></md-sidenav>\r\n    <div layout=\"column\" id=\"content\" layout-fill flex flex-md=\"72\">\r\n        <md-content ui-view=\"content\" class=\"state-{{state.current.name}}\" layout=\"column\" flex></md-content>\r\n    </div>\r\n</section>");
$templateCache.put("src/components/friend-preview/view.html","<div layout=\"row\">\r\n    <ng-md-icon class=\"friend-preview-social-icon\" icon=\"{{getSocialIcon(friend.type).name}}\" ng-style=\"{fill: getSocialIcon(friend.type).color}\" size=\"20\"></ng-md-icon>\r\n    <img ng-src=\"{{friend.picture}}\" class=\"avatar\" alt=\"{{friend.name}}\"/>\r\n    <div flex layout=\"row\" layout-align=\"center center\">\r\n        <ng-transclude flex></ng-transclude>\r\n        <ng-md-icon ng-if=\"friend.love\" icon=\"favorite\" ng-style=\"{fill: \'pink\'}\" size=\"20\"></ng-md-icon>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("src/main/sidenav/view.html","<md-content>\r\n    <md-list>\r\n        <md-list-item ng-repeat=\"entry in entries\">\r\n            <md-button class=\"md-primary\" ui-sref=\"{{entry.uiSref}}\" ng-click=\"toggleSidenav(\'left\')\" aria-label=\"{{entry.label | translate}}\">\r\n                {{entry.label | translate}}\r\n                <ng-md-icon icon=\"{{entry.icon}}\" size=\"30\"></ng-md-icon>\r\n            </md-button>\r\n        </md-list-item>\r\n    </md-list>\r\n\r\n    <div class=\"socialCarousel\" layout=\"row\" layout-align=\"center end\">\r\n        <ng-md-icon icon=\"{{selectedIcon.name}}\" style=\"fill: {{selectedIcon.color}}\" size=\"50\" options=\"{{option}}\"></ng-md-icon>\r\n    </div>\r\n\r\n</md-content>");
$templateCache.put("src/main/content/connect/view.html","<md-grid-list\r\n    md-cols-sm=\"2\"\r\n    md-cols-md=\"2\"\r\n    md-cols-lg=\"3\"\r\n    md-cols-gt-lg=\"4\"\r\n    md-row-height=\"3:4\"\r\n    md-row-height-gt-lg=\"6:7\"\r\n>\r\n    <md-grid-tile ng-repeat=\"(type, connection) in connections\">\r\n        <md-whiteframe class=\"md-whiteframe-z2\" layout=\"column\" layout-align=\"center center\">\r\n            <ng-md-icon icon=\"{{connection.icon.name}}\" style=\"fill: {{connection.icon.color}}\" size=\"100\"></ng-md-icon>\r\n            <md-button\r\n                    class=\"md-raised\"\r\n                    ng-class=\"{\'md-primary\': !isConnected(type)}\"\r\n                    aria-label=\"{{connection.label | translate}}\"\r\n                    ng-disabled=\"isNotImplemented(type)\"\r\n                    ng-click=\"connectToogle($event, type)\">\r\n                <h3 ng-if=\"!isNotImplemented(type) && isConnected(type)\">{{\'connect.is.connected\' | translate}}</h3>\r\n                <h3 ng-if=\"!isNotImplemented(type) && !isConnected(type)\">{{\'connect.is.not.connected\' | translate}}</h3>\r\n                <h3 ng-if=\"isNotImplemented(type)\">{{\'connect.is.not.implemented\' | translate}}</h3>\r\n            </md-button>\r\n        </md-whiteframe>\r\n    </md-grid-tile>\r\n</md-grid-list>");
$templateCache.put("src/main/content/dialog/view.html","<div layout=\"row\">\r\n    <md-card flex offset-gt-md=\"25\" flex-gt-md=\"50\">\r\n\r\n        <md-content>\r\n\r\n            <md-list ng-if=\"unreadDialogs.length > 0\">\r\n                <md-subheader class=\"md-no-sticky\">{{\'dialog.unread.title\' | translate}} : {{unreadDialogs.length}}</md-subheader>\r\n                <md-list-item class=\"md-3-line dialog-unread\" ng-repeat=\"dialog in unreadDialogs\">\r\n                    <friend-preview friend=\"dialog.friend\" flex>\r\n                        <h3>{{ dialog.friend.name }}</h3>\r\n                        <p>{{ dialog.messages[dialog.messages.length - 1].when | date}}</p>\r\n                    </friend-preview>\r\n                    <md-button class=\"md-fab md-primary\" ui-sref=\"dialog-show({id: dialog.id})\" aria-label=\"{{\'dialog.read.message.btn\' | translate}}\">\r\n                        <ng-md-icon icon=\"forum\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n                    </md-button>\r\n                </md-list-item>\r\n            </md-list>\r\n\r\n            <md-divider></md-divider>\r\n\r\n            <md-list ng-if=\"readDialogs.length > 0\">\r\n                <md-subheader class=\"md-no-sticky\">{{\'dialog.read.title\' | translate}} : {{readDialogs.length}}</md-subheader>\r\n                <md-list-item class=\"md-3-line dialog-read\" ng-repeat=\"dialog in readDialogs\">\r\n                    <friend-preview friend=\"dialog.friend\" flex>\r\n                        <h3>{{ dialog.friend.name }}</h3>\r\n                        <p>{{ dialog.messages[dialog.messages.length - 1].when | date}}</p>\r\n                    </friend-preview>\r\n                    <md-button class=\"md-fab md-raised\" ui-sref=\"dialog-show({id: dialog.id})\" aria-label=\"{{\'dialog.read.message.btn\' | translate}}\">\r\n                        <ng-md-icon icon=\"forum\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n                    </md-button>\r\n                    </div>\r\n                </md-list-item>\r\n            </md-list>\r\n\r\n        </md-content>\r\n\r\n    </md-card>\r\n</div>");
$templateCache.put("src/main/content/friends/view.html","<md-progress-linear ng-if=\"loading\" md-mode=\"indeterminate\"></md-progress-linear>\r\n\r\n<div layout=\"row\" flex>\r\n    <md-card flex offset-gt-md=\"25\" flex-gt-md=\"50\">\r\n\r\n        <md-card-content ng-if=\"friends.length === 0 && !loading\">\r\n            <h1>{{ \'friends.no.friend.title\' | translate }} :\'(</h1>\r\n            <p>{{ \'friends.no.friend.description\' | translate }}</p>\r\n\r\n            <md-button ui-sref=\"connect\" class=\"md-raised md-primary\" aria-label=\"{{\'friends.no.friend.button\' | translate}}\">\r\n                {{\'friends.no.friend.button\' | translate}}\r\n            </md-button>\r\n        </md-card-content>\r\n\r\n        <md-card-content ng-if=\"friends.length > 0\" flex layout=\"column\">\r\n\r\n            <md-input-container flex=\"10\">\r\n                <label>{{\'friends.filter.name.label\' | translate}}</label>\r\n                <input ng-model=\"filter.search\" type=\"text\"/>\r\n            </md-input-container>\r\n\r\n            <p ng-if=\"friends.length > 0 && filteringFriends.length === 0 && !loading\">{{ \'friends.filter.no.friend.description\' | translate }}</p>\r\n\r\n            <md-virtual-repeat-container flex>\r\n                <div\r\n                    class=\"repeated-item\" layout=\"row\"\r\n                    md-virtual-repeat=\"friend in filteringFriends\">\r\n\r\n                    <friend-preview friend=\"friend\" flex>\r\n                        <p>{{ friend.name }}</p>\r\n                    </friend-preview>\r\n\r\n                    <md-menu md-position-mode=\"target-right target\" md-offset=\"0 -7\">\r\n                        <md-button aria-label=\"Open phone interactions menu\" class=\"md-icon-button\" ng-click=\"openMenu($mdOpenMenu, $event)\">\r\n                            <ng-md-icon flex=\"15\" icon=\"more_vert\" style=\"fill: pink\" size=\"30\"></ng-md-icon>\r\n                        </md-button>\r\n                        <md-menu-content width=\"2\">\r\n                            <md-menu-item ng-if=\"friend.visibility\">\r\n                                <md-button aria-label=\"{{\'friends.list.menu.action.toggle.love\' | translate}}\" ng-click=\"toogleLove(friend)\">\r\n                                    <ng-md-icon icon=\"{{getLoveIcon(friend)}}\" style=\"fill: pink\" size=\"40\"></ng-md-icon>\r\n                                </md-button>\r\n                            </md-menu-item>\r\n                            <md-menu-item ng-if=\"!friend.love\">\r\n                                <md-button ng-disabled=\"friend.love\" aria-label=\"{{\'friends.list.menu.action.toggle.visibility\' | translate}}\" ng-click=\"toggleFriendVisibility(friend)\">\r\n                                    <ng-md-icon icon=\"{{friend.visibility ? \'visibility_off\' : \'visibility\'}}\" style=\"fill: pink\" size=\"40\"></ng-md-icon>\r\n                                </md-button>\r\n                            </md-menu-item>\r\n                        </md-menu-content>\r\n                    </md-menu>\r\n\r\n                </div>\r\n            </md-virtual-repeat-container>\r\n\r\n        </md-card-content>\r\n\r\n        <friends-filter ng-show=\"friends.length > 0 && !loading\" filter=\"filter\" result=\"filteringFriends.length\"></friends-filter>\r\n\r\n    </md-card>\r\n</div>");
$templateCache.put("src/main/content/settings/view.html","<form md-content layout-padding class=\"autoScroll\" name=\"settingsForm\" ng-submit=\"submit()\">\r\n\r\n    <md-input-container>\r\n        <label>{{\'settings.login.placeholder\' | translate}}</label>\r\n        <input ng-model=\"meCopy.login\" name=\"login\" type=\"text\" required ng-minlength=\"5\" ng-maxlength=\"15\"/>\r\n        <ng-md-icon icon=\"account_circle\" size=\"50\"></ng-md-icon>\r\n        <div ng-messages=\"settingsForm.login.$error\">\r\n            <div ng-message=\"required\">{{\'settings.login.error.required\' | translate}}</div>\r\n            <div ng-message=\"maxlength\">{{\'settings.login.error.maxlength\' | translate}}</div>\r\n            <div ng-message=\"minlength\">{{\'settings.login.error.minlength\' | translate}}</div>\r\n        </div>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n        <label>{{\'settings.password.placeholder\' | translate}}</label>\r\n        <input ng-model=\"meCopy.password\" name=\"password\" type=\"password\" required ng-minlength=\"5\" ng-maxlength=\"15\"/>\r\n        <ng-md-icon icon=\"vpn_key\" size=\"50\"></ng-md-icon>\r\n        <div ng-messages=\"settingsForm.password.$error\">\r\n            <div ng-message=\"required\">{{\'settings.password.error.required\' | translate}}</div>\r\n            <div ng-message=\"maxlength\">{{\'settings.password.error.maxlength\' | translate}}</div>\r\n            <div ng-message=\"minlength\">{{\'settings.password.error.minlength\' | translate}}</div>\r\n        </div>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n        <label>{{\'settings.email.placeholder\' | translate}}</label>\r\n        <input ng-model=\"meCopy.email\" name=\"email\" type=\"email\" required/>\r\n        <ng-md-icon icon=\"mail\" size=\"50\"></ng-md-icon>\r\n        <div ng-messages=\"settingsForm.email.$error\">\r\n            <div ng-message=\"required\">{{\'settings.email.error.required\' | translate}}</div>\r\n            <div ng-message=\"email\">{{\'settings.email.error.email\' | translate}}</div>\r\n        </div>\r\n    </md-input-container>\r\n\r\n    <div layout=\"row\" layout-align=\"end start\">\r\n        <md-button type=\"submit\" class=\"md-raised md-primary\" ng-disabled=\"!settingsForm.$valid\">{{\'settings.form.submit.label\' | translate}}</md-button>\r\n    </div>\r\n\r\n</form>\r\n\r\n<md-divider ></md-divider>\r\n\r\n<md-button type=\"button\" class=\"md-raised md-warn\" ng-click=\"disconnect()\">{{\'settings.disconnect.btn.label\' | translate}}</md-button>");
$templateCache.put("src/main/content/dialog/show/view.html","<div layout=\"row\">\r\n    <md-card flex offset-gt-md=\"25\" flex-gt-md=\"50\">\r\n\r\n        <md-content>\r\n\r\n            <md-list>\r\n                <md-subheader class=\"md-no-sticky\">\r\n                    <md-button class=\"md-icon-button\" aria-label=\"{{\'dialog.show.back.btn\' | translate}}\" ui-sref=\"dialog\">\r\n                        <ng-md-icon icon=\"arrow_back\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n                    </md-button>\r\n                    <p>{{ dialog.friend.name }}</p>\r\n                </md-subheader>\r\n                <md-list-item class=\"md-3-line\" ng-repeat=\"message in dialog.messages | orderBy:\'when\'\" layout=\"row\">\r\n                    <friend-preview friend=\"dialog.friend\" flex>\r\n                        <p class=\"date\">{{message.when | date}}</p>\r\n                        <p class=\"no-wrap\">{{message.what}}</p>\r\n                    </friend-preview>\r\n                </md-list-item>\r\n\r\n            </md-list>\r\n\r\n            <md-divider></md-divider>\r\n\r\n            <form name=\"sendMessageForm\" ng-submit=\"sendMessage()\" novalidate>\r\n                <md-input-container flex>\r\n                    <label>{{\'dialog.show.send.message.label\' | translate}}</label>\r\n                    <textarea ng-model=\"newMessage.what\" columns=\"1\" md-maxlength=\"150\" required></textarea>\r\n                </md-input-container>\r\n\r\n                <md-button class=\"md-fab md-primary submit-btn\" aria-label=\"{{\'dialog.show.send.message.submit.label\' | translate}}\" ng-disabled=\"!sendMessageForm.$valid\">\r\n                    <ng-md-icon icon=\"send\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n                </md-button>\r\n            </form>\r\n\r\n        </md-content>\r\n    </md-card>\r\n</div>");
$templateCache.put("src/main/content/friends/filter/view.html","<md-fab-speed-dial md-direction=\"up\" md-open=\"isOpen\" class=\"md-fling\">\r\n    <md-fab-trigger>\r\n        <md-button aria-label=\"menu\" class=\"md-fab md-primary filter-btn\">\r\n            <p><strong>{{result}}</strong></p>\r\n            <ng-md-icon icon=\"search\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n        </md-button>\r\n    </md-fab-trigger>\r\n    <md-fab-actions>\r\n        <md-button class=\"md-fab md-raised md-mini\" ng-repeat=\"(key, social) in socials\" ng-value=\"key\" aria-label=\"{{social.label | translate}}\" ng-click=\"socialToggle(key)\">\r\n            <ng-md-icon icon=\"{{social.icon.name}}\" ng-style=\"{fill: socialIsSeleced(key) ? social.icon.color : \'grey\'}\" size=\"20\"></ng-md-icon>\r\n        </md-button>\r\n        <md-button class=\"md-fab md-raised md-mini\" aria-label=\"{{\'friends.filter.not.love.label\' | translate}}\" ng-click=\"loveSelected(false)\">\r\n            <ng-md-icon icon=\"favorite_outline\" ng-style=\"{fill: loveIsSelected(false) ? \'pink\': \'grey\'}\" size=\"20\"></ng-md-icon>\r\n        </md-button>\r\n        <md-button class=\"md-fab md-raised md-mini\" aria-label=\"{{\'friends.filter.love.label\' | translate}}\" ng-click=\"loveSelected(true)\">\r\n            <ng-md-icon icon=\"favorite\" ng-style=\"{fill: loveIsSelected(true) ? \'pink\': \'grey\'}\" size=\"20\"></ng-md-icon>\r\n        </md-button>\r\n        <md-button class=\"md-fab md-raised md-mini\" aria-label=\"{{\'friends.filter.hide.label\' | translate}}\" ng-click=\"visibilityToggle()\">\r\n            <ng-md-icon icon=\"{{filter.visibility? \'visibility\': \'visibility_off\'}}\" ng-style=\"{fill: \'pink\'}\" size=\"20\"></ng-md-icon>\r\n        </md-button>\r\n    </md-fab-actions>\r\n</md-fab-speed-dial>");}]);
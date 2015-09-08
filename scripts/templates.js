angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("src/main/main.html","<md-toolbar layout=\"row\">\r\n    <div class=\"md-toolbar-tools\" layout=\"row\" layout-align=\"end start\">\r\n        <md-button title=\"{{\'common.toogle.label\' | translate}}\"\r\n                   aria-label=\"{{\'common.toogle.label\' | translate}}\"\r\n                   ng-click=\"toggleSidenav(\'left\')\" hide-gt-sm\r\n                   class=\"md-icon-button btn-toggle-sidenav\">\r\n            <ng-md-icon icon=\"view_headline\" style=\"fill: pink\" size=\"30\"></ng-md-icon>\r\n        </md-button>\r\n        <h1 flex=\"100\"><a ui-sref=\"friends\">{{\'common.navbar.title\' | translate}}</a></h1>\r\n        <basket-content basket=\"me.basket\"></basket-content>\r\n    </div>\r\n</md-toolbar>\r\n\r\n<md-toolbar ng-if=\"isAppStub\" class=\"md-primary md-hue-3 demo-block\">\r\n    <div class=\"md-toolbar-tools\">\r\n        <h3>\r\n            <span>{{\'common.navbar.demo.mode\' | translate}}</span>\r\n        </h3>\r\n        <span flex></span>\r\n        <md-button class=\"md-icon-button\" aria-label=\"{{\'common.navbar.demo.close\' | translate}}\" ng-click=\"loadApp()\">\r\n            <ng-md-icon icon=\"close\" style=\"fill: pink\" size=\"30\"></ng-md-icon>\r\n        </md-button>\r\n    </div>\r\n</md-toolbar>\r\n\r\n<section layout=\"row\" flex>\r\n    <md-sidenav ui-view=\"sidenav\"  md-swipe-left=\"toggleSidenav(\'left\')\" layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia(\'gt-sm\')\"></md-sidenav>\r\n    <div layout=\"column\" id=\"content\" layout-fill flex flex-md=\"72\">\r\n        <md-content ui-view=\"content\" class=\"state-{{state.current.name}}\" layout=\"column\" flex></md-content>\r\n    </div>\r\n</section>");
$templateCache.put("src/unknown/view.html","<div layout=\"row\">\r\n    <md-card flex offset-gt-md=\"35\" flex-gt-md=\"30\">\r\n\r\n        <md-content ui-view class=\"state-{{state.current.name}}\"></md-content>\r\n    </md-card>\r\n</div>");
$templateCache.put("src/components/basket-content/view.html","<p class=\"label-love-length\">{{basket.loves}}</p>\r\n<a ui-sref=\"secret-box\"><ng-md-icon icon=\"favorite\" style=\"fill: pink\" size=\"25\" class=\"icon-love\"></ng-md-icon></a>\r\n<ng-md-icon ng-if=\"moveMinusOne\" icon=\"exposure_minus_1\" style=\"fill: pink\" size=\"20\" class=\"icon-plus-minus-one\"></ng-md-icon>\r\n\r\n<md-button title=\"{{\'basket.shopping.link.label\' | translate}}\"\r\n           aria-label=\"{{\'basket.shopping.link.label\' | translate}}\"\r\n           ui-sref=\"shop\"\r\n           class=\"md-icon-button btn-shopping\">\r\n    <ng-md-icon icon=\"add_shopping_cart\" style=\"fill: pink\" size=\"30\"></ng-md-icon>\r\n</md-button>");
$templateCache.put("src/components/body-message-action/view.html","<div layout=\"column\" layout-align=\"center center\">\r\n    <h1>{{ titleLabel | translate }} :\'(</h1>\r\n    <p>{{ messageLabel | translate }}</p>\r\n\r\n    <md-button ui-sref=\"{{action}}\" class=\"md-raised md-primary\" aria-label=\"{{actionLabel | translate}}\">\r\n        {{actionLabel | translate}}\r\n    </md-button>\r\n</div>");
$templateCache.put("src/components/friend-preview/view.html","<div layout=\"row\">\r\n    <ng-md-icon class=\"friend-preview-social-icon\" icon=\"{{getSocialIcon(friend.type).name}}\" ng-style=\"{fill: getSocialIcon(friend.type).color}\" size=\"20\"></ng-md-icon>\r\n    <img ng-src=\"{{friend.picture}}\" class=\"avatar\" alt=\"{{friend.name}}\"/>\r\n    <div flex layout=\"row\" layout-align=\"center center\">\r\n        <ng-transclude flex></ng-transclude>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("src/main/sidenav/view.html","<md-content>\r\n    <md-list>\r\n        <md-list-item>\r\n            <md-button class=\"md-primary\" ui-sref=\"friends-list\" ng-click=\"toggleSidenav(\'left\')\" aria-label=\"{{\'sidenav.entry.label.friends\' | translate}}\">\r\n                {{\'sidenav.entry.label.friends\' | translate}}\r\n                <ng-md-icon icon=\"group\" size=\"30\"></ng-md-icon>\r\n            </md-button>\r\n        </md-list-item>\r\n        <md-list-item>\r\n            <md-button class=\"md-primary\" ui-sref=\"secret-box\" ng-click=\"toggleSidenav(\'left\')\" aria-label=\"{{\'sidenav.entry.label.secretbox\' | translate}}\">\r\n                {{\'sidenav.entry.label.secretbox\' | translate}}\r\n                <span ng-if=\"nbSecretBoxNews > 0\" class=\"nb-secret-box-news\">{{nbSecretBoxNews}}</span>\r\n                <ng-md-icon icon=\"favorite_outline\" size=\"14\" class=\"icon-love\"></ng-md-icon>\r\n                <ng-md-icon icon=\"markunread_mailbox\" size=\"30\"></ng-md-icon>\r\n            </md-button>\r\n        </md-list-item>\r\n        <md-list-item>\r\n            <md-button class=\"md-primary\" ui-sref=\"connect\" ng-click=\"toggleSidenav(\'left\')\" aria-label=\"{{\'sidenav.entry.label.connect\' | translate}}\">\r\n                {{\'sidenav.entry.label.connect\' | translate}}\r\n                <ng-md-icon icon=\"group_add\" size=\"30\"></ng-md-icon>\r\n            </md-button>\r\n        </md-list-item>\r\n        <md-list-item>\r\n            <md-button class=\"md-primary\" ui-sref=\"settings\" ng-click=\"toggleSidenav(\'left\')\" aria-label=\"{{\'sidenav.entry.label.settings\' | translate}}\">\r\n                {{\'sidenav.entry.label.settings\' | translate}}\r\n                <ng-md-icon icon=\"settings_applications\" size=\"30\"></ng-md-icon>\r\n            </md-button>\r\n        </md-list-item>\r\n    </md-list>\r\n\r\n    <div class=\"socialCarousel\" layout=\"row\" layout-align=\"center end\">\r\n        <ng-md-icon icon=\"{{selectedIcon.name}}\" style=\"fill: {{selectedIcon.color}}\" size=\"50\" options=\"{{option}}\"></ng-md-icon>\r\n    </div>\r\n\r\n</md-content>");
$templateCache.put("src/unknown/account/view.html","<h1>{{\'account.form.title\' | translate}}</h1>\r\n\r\n<p>{{\'account.form.description\' | translate}}</p>\r\n\r\n<form name=\"accountForm\" ng-submit=\"submit($event)\" layout=\"column\" novalidate>\r\n\r\n    <md-input-container>\r\n        <label>{{\'account.login.placeholder\' | translate}}</label>\r\n        <input ng-model=\"me.login\" name=\"login\" type=\"text\" required ng-minlength=\"5\" ng-maxlength=\"15\"/>\r\n        <ng-md-icon icon=\"account_circle\" size=\"50\"></ng-md-icon>\r\n        <div ng-messages=\"accountForm.$dirty && accountForm.login.$error\">\r\n            <div ng-message=\"required\">{{\'account.login.error.required\' | translate}}</div>\r\n            <div ng-message=\"maxlength\">{{\'account.login.error.maxlength\' | translate}}</div>\r\n            <div ng-message=\"minlength\">{{\'account.login.error.minlength\' | translate}}</div>\r\n        </div>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n        <label>{{\'account.email.placeholder\' | translate}}</label>\r\n        <input ng-model=\"me.email\" email-check name=\"email\" type=\"email\" required/>\r\n        <ng-md-icon icon=\"email\" size=\"50\"></ng-md-icon>\r\n        <div ng-messages=\"accountForm.$dirty && accountForm.email.$error\">\r\n            <div ng-message=\"required\">{{\'account.email.error.required\' | translate}}</div>\r\n            <div ng-message=\"email\">{{\'account.email.error.email\' | translate}}</div>\r\n            <div ng-message=\"blacklist\">{{\'account.email.error.blacklist\' | translate}}</div>\r\n            <div ng-message=\"unique\">{{\'account.email.error.unique\' | translate}}</div>\r\n        </div>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n        <label>{{\'account.password.placeholder\' | translate}}</label>\r\n        <input ng-model=\"me.password\" name=\"password\" type=\"password\" required ng-minlength=\"5\" ng-maxlength=\"15\"/>\r\n        <ng-md-icon icon=\"vpn_key\" size=\"50\"></ng-md-icon>\r\n        <div ng-messages=\"accountForm.$dirty && accountForm.password.$error\">\r\n            <div ng-message=\"required\">{{\'account.password.error.required\' | translate}}</div>\r\n            <div ng-message=\"maxlength\">{{\'account.password.error.maxlength\' | translate}}</div>\r\n            <div ng-message=\"minlength\">{{\'account.password.error.minlength\' | translate}}</div>\r\n        </div>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n        <label>{{\'account.password.2.placeholder\' | translate}}</label>\r\n        <input ng-model=\"password2\" verify-model=\"me.password\" name=\"password2\" type=\"password\" required ng-minlength=\"5\" ng-maxlength=\"15\"/>\r\n        <div ng-messages=\"accountForm.$dirty && accountForm.password2.$error\">\r\n            <div ng-message=\"verify\">{{\'account.password.error.verify\' | translate}}</div>\r\n        </div>\r\n    </md-input-container>\r\n\r\n    <md-button type=\"submit\" class=\"md-raised md-primary\" ng-disabled=\"!accountForm.$valid\">\r\n        {{\'account.create.account.btn.label\' | translate}}\r\n    </md-button>\r\n\r\n    <md-button type=\"button\" class=\"md-raised md-raised\" ui-sref=\"auth\">\r\n        {{\'account.cancel.btn.label\' | translate}}\r\n    </md-button>\r\n\r\n</form>");
$templateCache.put("src/unknown/auth/view.html","<div layout=\"column\" layout-align=\"center center\">\r\n    <ng-md-icon icon=\"favorite\" style=\"fill: pink\" size=\"200\"></ng-md-icon>\r\n    <h1>{{\'common.title\' | translate}}</h1>\r\n</div>\r\n\r\n<form name=\"loginForm\" ng-submit=\"submit()\" layout=\"column\" novalidate>\r\n\r\n    <md-input-container>\r\n        <label>{{\'auth.email.placeholder\' | translate}}</label>\r\n        <input ng-model=\"me.email\" name=\"email\" type=\"email\" required/>\r\n        <ng-md-icon icon=\"email\" size=\"50\"></ng-md-icon>\r\n        <div ng-messages=\"loginForm.$dirty && loginForm.email.$error\">\r\n            <div ng-message=\"required\">{{\'auth.email.error.required\' | translate}}</div>\r\n            <div ng-message=\"email\">{{\'auth.email.error.email\' | translate}}</div>\r\n            <div ng-message=\"blacklist\">{{\'auth.email.error.blacklist\' | translate}}</div>\r\n        </div>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n        <label>{{\'auth.password.placeholder\' | translate}}</label>\r\n        <input ng-model=\"me.password\" name=\"password\" type=\"password\" required ng-minlength=\"5\" ng-maxlength=\"15\"/>\r\n        <ng-md-icon icon=\"vpn_key\" size=\"50\"></ng-md-icon>\r\n        <div ng-messages=\"loginForm.$dirty && loginForm.password.$error\">\r\n            <div ng-message=\"required\">{{\'auth.password.error.required\' | translate}}</div>\r\n            <div ng-message=\"maxlength\">{{\'auth.password.error.maxlength\' | translate}}</div>\r\n            <div ng-message=\"minlength\">{{\'auth.password.error.minlength\' | translate}}</div>\r\n        </div>\r\n    </md-input-container>\r\n\r\n    <md-button type=\"submit\" class=\"md-raised md-primary\">\r\n        {{\'auth.connect.btn.label\' | translate}}\r\n    </md-button>\r\n\r\n</form>\r\n\r\n<div layout=\"column\">\r\n    <md-divider ></md-divider>\r\n\r\n    <md-button type=\"button\" class=\"md-raised\" ui-sref=\"account\">\r\n        {{\'auth.create.account.btn.label\' | translate}}\r\n    </md-button>\r\n\r\n    <md-button type=\"button\" class=\"md-raised\" ng-click=\"loadDemo()\">\r\n        {{\'auth.demo.btn.label\' | translate}}\r\n    </md-button>\r\n</div>\r\n");
$templateCache.put("src/main/content/friends/view.html","<md-progress-linear ng-if=\"loading\" md-mode=\"indeterminate\"></md-progress-linear>\r\n\r\n<div layout=\"row\" flex ui-view></div>\r\n\r\n<md-button ng-if=\"friends.length > 0 && !loading\" ng-click=\"toggleListFace()\" class=\"btn-toggle-list-face md-raised md-fab md-raised\" aria-label=\"TODO!!!!!!!!!!!!!!!!\">\r\n    <ng-md-icon icon=\"{{listOrFaceIcon()}}\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n</md-button>");
$templateCache.put("src/main/content/secretbox/view.html","<div layout=\"row\">\r\n    <md-card flex offset-gt-md=\"25\" flex-gt-md=\"50\">\r\n\r\n        <md-card-content ng-if=\"secretBox.length === 0\" flex>\r\n            <body-message-action\r\n                    title-label=\"secretbox.no.friend.title\"\r\n                    message-label=\"secretbox.no.friend.description\"\r\n                    action-label=\"secretbox.no.friend.button\"\r\n                    action=\"friends-list\">\r\n            </body-message-action>\r\n        </md-card-content>\r\n\r\n        <md-card-content ng-if=\"secretBox.length > 0\" flex layout=\"column\">\r\n\r\n            <md-list>\r\n                <md-list-item ng-repeat=\"secret in secretBox | orderByFresh track by secret.lastUpdate\" ng-class=\"{unread: secret.hasNews}\">\r\n                    <friend-preview friend=\"secret.friend\" flex>\r\n                        <ng-md-icon ng-if=\"secret.friend.verified\" icon=\"phone_iphone\" ng-style=\"{fill: \'pink\'}\" size=\"20\"></ng-md-icon>\r\n                        <ng-md-icon ng-if=\"secret.friend.inLove\" icon=\"favorite\" ng-style=\"{fill: \'pink\'}\" size=\"20\"></ng-md-icon>\r\n                        <ng-md-icon ng-if=\"!secret.friend.inLove\" icon=\"favorite_outline\" ng-style=\"{fill: \'pink\'}\" size=\"20\"></ng-md-icon>\r\n                        <p>{{ secret.friend.name }}</p>\r\n                        <time>{{secret.lastUpdate | date:\'short\'}}</time>\r\n                    </friend-preview>\r\n                    <md-button ng-if=\"secret.friend.inLove\" class=\"md-fab md-raised\" ui-sref=\"secret-box-dialog({id: secret.friend.id, type: secret.friend.type})\" aria-label=\"{{\'dialog.read.message.btn\' | translate}}\">\r\n                        <ng-md-icon icon=\"forum\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n                    </md-button>\r\n                </md-list-item>\r\n            </md-list>\r\n\r\n        </md-card-content>\r\n\r\n    </md-card>\r\n</div>");
$templateCache.put("src/main/content/settings/view.html","<div layout=\"row\">\r\n    <md-card flex offset-gt-md=\"25\" flex-gt-md=\"50\">\r\n\r\n        <md-content>\r\n            <form md-content layout-padding class=\"autoScroll\" name=\"settingsForm\" ng-submit=\"submit()\">\r\n\r\n                <md-input-container>\r\n                    <label>{{\'settings.login.placeholder\' | translate}}</label>\r\n                    <input ng-model=\"meCopy.login\" name=\"login\" type=\"text\" required ng-minlength=\"5\" ng-maxlength=\"15\"/>\r\n                    <ng-md-icon icon=\"account_circle\" size=\"50\"></ng-md-icon>\r\n                    <div ng-messages=\"settingsForm.login.$error\">\r\n                        <div ng-message=\"required\">{{\'settings.login.error.required\' | translate}}</div>\r\n                        <div ng-message=\"maxlength\">{{\'settings.login.error.maxlength\' | translate}}</div>\r\n                        <div ng-message=\"minlength\">{{\'settings.login.error.minlength\' | translate}}</div>\r\n                    </div>\r\n                </md-input-container>\r\n\r\n                <div layout=\"row\" layout-align=\"end start\">\r\n                    <md-button type=\"submit\" class=\"md-raised md-primary\" ng-disabled=\"!settingsForm.$valid\">{{\'settings.form.submit.label\' | translate}}</md-button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <md-divider ></md-divider>\r\n\r\n            <md-button type=\"button\" class=\"md-raised md-warn\" ng-click=\"disconnect()\">{{\'settings.disconnect.btn.label\' | translate}}</md-button>\r\n        </md-content>\r\n    </md-card>\r\n</div>");
$templateCache.put("src/main/content/shop/view.html","<div layout=\"row\">\r\n\r\n    <md-card flex offset-gt-md=\"25\" flex-gt-md=\"50\">\r\n        <md-card-content>\r\n\r\n            <md-list>\r\n\r\n                <md-list-item ng-repeat=\"item in items\" layout=\"row\">\r\n\r\n                    <ng-md-icon icon=\"{{item.icon}}\" style=\"fill:pink\" size=\"50\"></ng-md-icon>\r\n\r\n                    <p class=\"nb\">x{{item.nb}}</p>\r\n                    <p class=\"price\">{{item.price}}</p>\r\n\r\n                    <md-button type=\"button\" class=\"md-fab md-primary\" ng-click=\"purchase(item)\" aria-label=\"{{\'shop.purchase.btn.label\' | translate}}\">\r\n                        <ng-md-icon icon=\"add_shopping_cart\" style=\"fill:pink\" size=\"30\"></ng-md-icon>\r\n                    </md-button>\r\n\r\n                    <md-divider ng-if=\"!$last\"></md-divider>\r\n\r\n                </md-list-item>\r\n\r\n            </md-list>\r\n\r\n        </md-card-content>\r\n    </md-card>\r\n</div>");
$templateCache.put("src/main/content/connect/view.html","<div layout=\"row\">\r\n\r\n    <md-card flex offset-gt-md=\"25\" flex-gt-md=\"50\">\r\n        <md-card-content>\r\n\r\n            <md-list>\r\n\r\n                <md-list-item ng-repeat=\"(type, connection) in connections\">\r\n\r\n                    <md-switch\r\n                            aria-label=\"{{connection.label | translate}}\"\r\n                            class=\"md-primary\"\r\n                            ng-model=\"connectionModel[type]\"\r\n                            ng-change=\"toggleConnection(type)\"\r\n                            ng-disabled=\"isNotImplemented(type)\">\r\n\r\n                        <div layout=\"row\" layout-align=\"center center\">\r\n                            <ng-md-icon icon=\"{{connection.icon.name}}\" style=\"fill: {{connection.icon.color}}\" size=\"30\"></ng-md-icon>\r\n                            <div layout=\"column\">\r\n                                <p>{{\'connect.label.\' + type | translate}}</p>\r\n                                <p class=\"status\" ng-if=\"!isNotImplemented(type) && isConnected(type)\">{{\'connect.is.connected\' | translate}}</p>\r\n                                <p class=\"status\" ng-if=\"!isNotImplemented(type) && !isConnected(type)\">{{\'connect.is.not.connected\' | translate}}</p>\r\n                                <p class=\"status\" ng-if=\"isNotImplemented(type)\">{{\'connect.is.not.implemented\' | translate}}</p>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </md-switch>\r\n\r\n                    <md-divider ng-if=\"!$last\"></md-divider>\r\n\r\n                </md-list-item>\r\n\r\n            </md-list>\r\n\r\n        </md-card-content>\r\n    </md-card>\r\n\r\n</div>");
$templateCache.put("src/main/content/friends/face/view.html","<md-card flex offset-gt-md=\"25\" flex-gt-md=\"50\">\r\n\r\n    <md-card-content layout=\"column\"layout-align=\"center center\" ng-if=\"!friend\" flex>\r\n        <p>{{\'friends.face.no.result\' | translate}}</p>\r\n    </md-card-content>\r\n\r\n    <md-card-content layout=\"column\" layout-align=\"center center\" ng-if=\"friend\">\r\n        <h1>{{ friend.name }}</h1>\r\n\r\n        <div layout=\"row\" layout-align=\"center center\">\r\n            <friend-preview friend=\"friend\" flex></friend-preview>\r\n            <md-button aria-label=\"{{\'friends.face.next\' | translate}}\" class=\"next md-icon-button\" ng-click=\"refreshFace(filteringFriends)\">\r\n                <ng-md-icon icon=\"chevron_right\" style=\"fill: pink\" size=\"180\"></ng-md-icon>\r\n            </md-button>\r\n        </div>\r\n\r\n        <div layout=\"row\" layout-align=\"center center\" class=\"btn-toolbar-choice\">\r\n            <md-button class=\"md-fab md-primary\" ng-disabled=\"friend.love\" aria-label=\"{{\'friends.list.menu.action.toggle.visibility\' | translate}}\" ng-click=\"toggleFriendVisibility(friend)\">\r\n                <ng-md-icon icon=\"visibility_off\" style=\"fill: pink\" size=\"40\"></ng-md-icon>\r\n            </md-button>\r\n            <md-button class=\"md-fab md-primary\" aria-label=\"{{\'friends.list.menu.action.toggle.love\' | translate}}\" ng-disabled=\"requestSend\" ng-click=\"toogleLove(friend, $event)\">\r\n                <ng-md-icon icon=\"favorite\" style=\"fill: pink\" size=\"40\"></ng-md-icon>\r\n            </md-button>\r\n        </div>\r\n\r\n        <md-button class=\"btn-length md-fab md-raised md-mini\" aria-label=\"length\">\r\n            {{filteringFriends.length}}\r\n        </md-button>\r\n\r\n    </md-card-content>\r\n\r\n</md-card>");
$templateCache.put("src/main/content/friends/list/view.html","<md-card flex offset-gt-md=\"25\" flex-gt-md=\"50\">\r\n\r\n    <md-card-content ng-if=\"friends.length === 0 && !loading\">\r\n        <body-message-action\r\n                title-label=\"friends.no.friend.title\"\r\n                message-label=\"friends.no.friend.description\"\r\n                action-label=\"friends.no.friend.button\"\r\n                action=\"connect\">\r\n        </body-message-action>\r\n    </md-card-content>\r\n\r\n    <md-card-content ng-if=\"friends.length > 0\" flex layout=\"column\">\r\n\r\n        <md-input-container flex=\"10\">\r\n            <label>{{\'friends.filter.name.label\' | translate}}</label>\r\n            <input ng-model=\"filter.search\" type=\"text\"/>\r\n            <ng-md-icon ng-click=\"filter.search = \'\'\" ng-if=\"filter.search\" icon=\"clear\" size=\"50\"></ng-md-icon>\r\n        </md-input-container>\r\n\r\n        <p ng-if=\"friends.length > 0 && filteringFriends.length === 0 && !loading\">{{ \'friends.filter.no.friend.description\' | translate }}</p>\r\n\r\n        <md-virtual-repeat-container flex>\r\n            <div\r\n                class=\"repeated-item\" layout=\"row\"\r\n                md-virtual-repeat=\"friend in filteringFriends\">\r\n\r\n                <friend-preview friend=\"friend\" flex>\r\n                    <div layout=\"row\" layout-align=\"start center\">\r\n                        <p flex>{{ friend.name }}</p>\r\n                        <md-button flex=\"20\" flex-gt-sm=\"10\" class=\"md-icon-button\" ng-if=\"!friend.love\" ng-disabled=\"friend.love\" aria-label=\"{{\'friends.list.menu.action.toggle.visibility\' | translate}}\" ng-click=\"toggleFriendVisibility(friend)\">\r\n                            <ng-md-icon icon=\"{{friend.visibility ? \'visibility_off\' : \'visibility\'}}\" style=\"fill: pink\" size=\"30\"></ng-md-icon>\r\n                        </md-button>\r\n                        <md-button flex=\"20\" flex-gt-sm=\"10\" class=\"md-icon-button\" ng-if=\"friend.visibility\" aria-label=\"{{\'friends.list.menu.action.toggle.love\' | translate}}\" ng-click=\"toogleLove(friend, $event)\">\r\n                            <ng-md-icon icon=\"{{getLoveIcon(friend)}}\" style=\"fill: pink\" size=\"30\"></ng-md-icon>\r\n                        </md-button>\r\n                    </div>\r\n                </friend-preview>\r\n            </div>\r\n        </md-virtual-repeat-container>\r\n\r\n    </md-card-content>\r\n\r\n    <friends-filter ng-show=\"friends.length > 0\" filter=\"filter\" result=\"filteringFriends.length\"></friends-filter>\r\n\r\n</md-card>");
$templateCache.put("src/main/content/secretbox/dialog/view.html","<div layout=\"row\">\r\n    <md-card flex offset-gt-md=\"25\" flex-gt-md=\"50\">\r\n\r\n        <md-content>\r\n\r\n            <div layout=\"row\">\r\n                <md-button class=\"md-icon-button\" aria-label=\"{{\'dialog.show.back.btn\' | translate}}\" ui-sref=\"secret-box\">\r\n                    <ng-md-icon icon=\"arrow_back\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n                </md-button>\r\n                <h3 flex>{{ friend.name }}</h3>\r\n            </div>\r\n\r\n            <md-divider></md-divider>\r\n\r\n            <md-list>\r\n                <md-list-item class=\"md-3-line\" ng-repeat=\"message in dialogs | orderBy:\'when\'\" layout=\"row\">\r\n                    <div ng-if=\"message.me\" flex>\r\n                        <p class=\"date\">{{message.when | date}}</p>\r\n                        <p class=\"no-wrap\">{{message.what}}</p>\r\n                    </div>\r\n                    <div ng-if=\"!message.me\">\r\n                        <friend-preview friend=\"friend\" flex>\r\n                            <p class=\"date\">{{message.when | date}}</p>\r\n                            <p class=\"no-wrap\">{{message.what}}</p>\r\n                        </friend-preview>\r\n                    </div>\r\n                </md-list-item>\r\n\r\n            </md-list>\r\n\r\n            <md-divider></md-divider>\r\n\r\n            <form name=\"sendMessageForm\" ng-submit=\"sendMessage()\" novalidate>\r\n                <md-input-container flex>\r\n                    <label>{{\'dialog.show.send.message.label\' | translate}}</label>\r\n                    <textarea ng-model=\"newMessage.what\" columns=\"1\" md-maxlength=\"150\" required></textarea>\r\n                </md-input-container>\r\n\r\n                <md-button class=\"md-fab md-primary submit-btn\" aria-label=\"{{\'dialog.show.send.message.submit.label\' | translate}}\" ng-disabled=\"!sendMessageForm.$valid\">\r\n                    <ng-md-icon icon=\"send\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n                </md-button>\r\n            </form>\r\n\r\n        </md-content>\r\n    </md-card>\r\n</div>");
$templateCache.put("src/main/content/secretbox/match/view.html","<md-dialog aria-label=\"{{\'secretbox.match.title\' | translate}}\" class=\"match\">\r\n    <form>\r\n        <md-dialog-content layout=\"column\" layout-align=\"center center\">\r\n            <h1>{{\'secretbox.match.title\' | translate}}!</h1>\r\n\r\n            <div layout=\"row\" layout-align=\"center center\">\r\n                <friend-preview friend=\"matchFriend\" flex></friend-preview>\r\n            </div>\r\n\r\n            <p>{{matchFriend.name}}</p>\r\n\r\n        </md-dialog-content>\r\n        <div class=\"md-actions\" layout=\"row\">\r\n            <md-button ng-click=\"close()\">\r\n                {{\'secretbox.match.close\' | translate}}\r\n            </md-button>\r\n            <md-button ng-click=\"markAsRead()\">\r\n                {{\'secretbox.match.mark.as.read\' | translate}}\r\n            </md-button>\r\n        </div>\r\n    </form>\r\n</md-dialog>");
$templateCache.put("src/main/content/friends/list/filter/view.html","<md-fab-speed-dial md-direction=\"up\" md-open=\"isOpen\" class=\"md-fling\">\r\n    <md-fab-trigger>\r\n        <md-button aria-label=\"menu\" class=\"md-fab md-primary filter-btn\">\r\n            <ng-md-icon icon=\"search\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n        </md-button>\r\n    </md-fab-trigger>\r\n    <md-fab-actions>\r\n        <md-button class=\"md-fab md-raised md-mini\" ng-if=\"isConnected(key)\" ng-repeat=\"(key, social) in socials\" ng-value=\"key\" aria-label=\"{{social.label | translate}}\" ng-click=\"socialToggle(key)\">\r\n            <ng-md-icon icon=\"{{social.icon.name}}\" ng-style=\"{fill: socialIsSelected(key) ? social.icon.color : \'grey\'}\" size=\"20\"></ng-md-icon>\r\n        </md-button>\r\n        <md-button class=\"md-fab md-raised md-mini\" aria-label=\"{{\'friends.filter.not.love.label\' | translate}}\" ng-click=\"loveSelected(false)\">\r\n            <ng-md-icon icon=\"favorite_outline\" ng-style=\"{fill: loveIsSelected(false) ? \'pink\': \'grey\'}\" size=\"20\"></ng-md-icon>\r\n        </md-button>\r\n        <md-button class=\"md-fab md-raised md-mini\" aria-label=\"{{\'friends.filter.love.label\' | translate}}\" ng-click=\"loveSelected(true)\">\r\n            <ng-md-icon icon=\"favorite\" ng-style=\"{fill: loveIsSelected(true) ? \'pink\': \'grey\'}\" size=\"20\"></ng-md-icon>\r\n        </md-button>\r\n        <md-button class=\"md-fab md-raised md-mini\" aria-label=\"{{\'friends.filter.hide.label\' | translate}}\" ng-click=\"visibilityToggle()\">\r\n            <ng-md-icon icon=\"{{filter.visibility? \'visibility\': \'visibility_off\'}}\" ng-style=\"{fill: \'pink\'}\" size=\"20\"></ng-md-icon>\r\n        </md-button>\r\n    </md-fab-actions>\r\n</md-fab-speed-dial>\r\n\r\n<md-button class=\"btn-length md-fab md-raised md-mini\" aria-label=\"length\">\r\n    {{result}}\r\n</md-button>");}]);
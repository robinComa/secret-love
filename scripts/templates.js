angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("src/main/main.html","<md-toolbar layout=\"row\">\r\n    <div class=\"md-toolbar-tools\" layout=\"row\" layout-align=\"end start\">\r\n        <md-button ng-click=\"toggleSidenav(\'left\')\" hide-gt-sm aria-label=\"{{\'common.toogle.label\' | translate}}\">\r\n            <md-tooltip>\r\n                {{\'common.toogle.label\' | translate}}\r\n            </md-tooltip>\r\n            <ng-md-icon icon=\"view_headline\" size=\"30\"></ng-md-icon>\r\n        </md-button>\r\n        <h1 flex=\"50\">{{\'common.navbar.title\' | translate}}</h1>\r\n        <p class=\"login\">{{me.login}}</p>\r\n    </div>\r\n</md-toolbar>\r\n<section layout=\"row\" flex>\r\n    <md-sidenav ui-view=\"sidenav\" layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia(\'gt-sm\')\"></md-sidenav>\r\n    <div layout=\"column\" id=\"content\" layout-fill>\r\n        <md-content ui-view=\"content\" class=\"state-{{state.current.name}}\" layout=\"column\" flex></md-content>\r\n    </div>\r\n</section>");
$templateCache.put("src/main/sidenav/view.html","<md-content>\r\n    <md-list>\r\n        <md-list-item ng-repeat=\"entry in entries\">\r\n            <md-button class=\"md-primary\" ui-sref=\"{{entry.uiSref}}\" aria-label=\"{{entry.label | translate}}\">\r\n                {{entry.label | translate}}\r\n                <ng-md-icon icon=\"{{entry.icon}}\" size=\"30\"></ng-md-icon>\r\n            </md-button>\r\n        </md-list-item>\r\n    </md-list>\r\n\r\n    <div class=\"socialCarousel\" layout=\"row\" layout-align=\"center end\">\r\n        <ng-md-icon icon=\"{{selectedIcon.name}}\" style=\"fill: {{selectedIcon.color}}\" size=\"50\" options=\"{{option}}\"></ng-md-icon>\r\n    </div>\r\n</md-content>");
$templateCache.put("src/main/content/connect/view.html","<md-grid-list\r\n    md-cols-sm=\"1\"\r\n    md-cols-md=\"1\"\r\n    md-cols-lg=\"3\"\r\n    md-cols-gt-lg=\"4\"\r\n    md-row-height-sm=\"1:1\"\r\n    md-row-height-md=\"1:1\"\r\n    md-row-height-lg=\"3:4\"\r\n    md-row-height-gt-lg=\"3:4\"\r\n>\r\n    <md-grid-tile ng-repeat=\"(type, connection) in connections\">\r\n        <md-whiteframe class=\"md-whiteframe-z2\" layout=\"column\" layout-align=\"center center\">\r\n            <ng-md-icon icon=\"{{connection.icon.name}}\" style=\"fill: {{connection.icon.color}}\" size=\"200\"></ng-md-icon>\r\n            <md-button\r\n                    class=\"md-raised\"\r\n                    ng-class=\"{\'md-primary\': !isConnected(type)}\"\r\n                    aria-label=\"{{connection.label | translate}}\"\r\n                    ng-disabled=\"isNotImplemented(type)\"\r\n                    ng-click=\"connectToogle($event, type)\">\r\n                <h3 ng-if=\"!isNotImplemented(type) && isConnected(type)\">{{\'connect.is.connected\' | translate}}</h3>\r\n                <h3 ng-if=\"!isNotImplemented(type) && !isConnected(type)\">{{\'connect.is.not.connected\' | translate}}</h3>\r\n                <h3 ng-if=\"isNotImplemented(type)\">{{\'connect.is.not.implemented\' | translate}}</h3>\r\n            </md-button>\r\n        </md-whiteframe>\r\n    </md-grid-tile>\r\n</md-grid-list>");
$templateCache.put("src/main/content/friends/view.html","<md-progress-linear ng-if=\"loading\" md-mode=\"indeterminate\"></md-progress-linear>\r\n\r\n<md-card>\r\n\r\n    <md-card-content ng-if=\"friends.length === 0 && !loading\">\r\n        <h1>{{ \'friends.no.friend.title\' | translate }} :\'(</h1>\r\n        <p>{{ \'friends.no.friend.description\' | translate }}</p>\r\n\r\n        <md-button ui-sref=\"connect\" class=\"md-raised md-primary\" aria-label=\"{{\'friends.no.friend.button\' | translate}}\">\r\n            {{\'friends.no.friend.button\' | translate}}\r\n        </md-button>\r\n    </md-card-content>\r\n\r\n    <md-card-content ng-if=\"friends.length > 0\">\r\n\r\n        <md-list class=\"friend-list\">\r\n\r\n            <md-list-item ng-repeat=\"friend in friends | filter:{visibility:filter.visibility} | filter:{love:filter.love} | filter:filter.search | filter:{type:filter.social} | orderBy:\'name\' track by $index\" ng-click=\"toogleLove(friend)\" md-swipe-right=\"hideFriend(friend)\">\r\n                <img ng-src=\"{{friend.picture}}\" class=\"md-avatar\" alt=\"{{friend.name}}\"/>\r\n                <ng-md-icon class=\"user-social\" flex=\"10\" icon=\"{{getSocialIcon(friend.type).name}}\" ng-style=\"{fill: getSocialIcon(friend.type).color}\" size=\"20\"></ng-md-icon>\r\n                <p>{{ friend.name }}</p>\r\n                <ng-md-icon flex=\"10\" icon=\"{{getLoveIcon(friend)}}\" style=\"fill: pink\" size=\"40\"></ng-md-icon>\r\n            </md-list-item>\r\n\r\n            <md-list-item></md-list-item>\r\n\r\n        </md-list>\r\n\r\n        <md-button class=\"md-fab filter-btn\" aria-label=\"{{\'friends.filter.button\' | translate}}\" ng-click=\"showFilter($event)\">\r\n            <p><strong>{{(friends | filter:{visibility:filter.visibility} | filter:{love:filter.love} | filter:filter.search | filter:{type:filter.social}).length}}</strong></p>\r\n            <ng-md-icon icon=\"filter_list\" ng-style=\"{fill: \'white\'}\" size=\"30\"></ng-md-icon>\r\n        </md-button>\r\n\r\n    </md-card-content>\r\n\r\n</md-card>");
$templateCache.put("src/main/content/settings/view.html","<form md-content layout-padding class=\"autoScroll\" name=\"settingsForm\" ng-submit=\"submit()\">\r\n    <md-input-container>\r\n        <label>{{\'settings.login.placeholder\' | translate}}</label>\r\n        <input ng-model=\"meCopy.login\" name=\"login\" type=\"text\" required ng-minlength=\"5\" ng-maxlength=\"15\"/>\r\n        <ng-md-icon icon=\"account_circle\" size=\"50\"></ng-md-icon>\r\n        <div ng-messages=\"settingsForm.login.$error\">\r\n            <div ng-message=\"required\">{{\'settings.login.error.required\' | translate}}</div>\r\n            <div ng-message=\"maxlength\">{{\'settings.login.error.maxlength\' | translate}}</div>\r\n            <div ng-message=\"minlength\">{{\'settings.login.error.minlength\' | translate}}</div>\r\n        </div>\r\n    </md-input-container>\r\n    <md-input-container>\r\n        <label>{{\'settings.email.placeholder\' | translate}}</label>\r\n        <input ng-model=\"meCopy.email\" name=\"email\" type=\"email\" required/>\r\n        <ng-md-icon icon=\"mail\" size=\"50\"></ng-md-icon>\r\n        <div ng-messages=\"settingsForm.email.$error\">\r\n            <div ng-message=\"required\">{{\'settings.email.error.required\' | translate}}</div>\r\n            <div ng-message=\"email\">{{\'settings.email.error.email\' | translate}}</div>\r\n        </div>\r\n    </md-input-container>\r\n\r\n    <div layout=\"row\" layout-align=\"end start\">\r\n        <md-button type=\"submit\" class=\"md-raised md-primary\" ng-disabled=\"!settingsForm.$valid\">{{\'settings.form.submit.label\' | translate}}</md-button>\r\n    </div>\r\n\r\n</form>");
$templateCache.put("src/main/content/friends/filter/view.html","<md-dialog aria-label=\"Mango (Fruit)\">\r\n    <form name=\"filterForm\" ng-submit=\"submit(filter)\">\r\n\r\n        <md-toolbar>\r\n            <div class=\"md-toolbar-tools\">\r\n                <h2>{{\'friends.filter.title\' | translate}}</h2>\r\n            </div>\r\n        </md-toolbar>\r\n\r\n        <md-dialog-content>\r\n\r\n            <md-input-container>\r\n                <label>{{\'friends.filter.name.label\' | translate}}</label>\r\n                <input ng-model=\"filter.search\" type=\"text\"/>\r\n            </md-input-container>\r\n\r\n            <md-radio-group ng-model=\"filter.love\" layout=\"row\" layout-align=\"center center\" layout-wrap>\r\n                <md-radio-button ng-value=\"true\" aria-label=\"{{\'friends.filter.love.label\' | translate}}\" flex=\"30\">\r\n                    <ng-md-icon icon=\"favorite\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n                </md-radio-button>\r\n                <md-radio-button ng-value=\"false\" aria-label=\"{{\'friends.filter.not.love.label\' | translate}}\" flex=\"30\">\r\n                    <ng-md-icon icon=\"favorite_outline\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n                </md-radio-button>\r\n            </md-radio-group>\r\n\r\n            <md-divider ></md-divider>\r\n\r\n            <md-radio-group ng-model=\"filter.visibility\" layout=\"row\" layout-align=\"center center\" layout-wrap>\r\n                <md-radio-button ng-value=\"true\" aria-label=\"{{\'friends.filter.hide.label\' | translate}}\" flex=\"30\">\r\n                    <ng-md-icon icon=\"visibility\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n                </md-radio-button>\r\n                <md-radio-button ng-value=\"false\" aria-label=\"{{\'friends.filter.not.hide.label\' | translate}}\" flex=\"30\">\r\n                    <ng-md-icon icon=\"visibility_off\" ng-style=\"{fill: \'pink\'}\" size=\"30\"></ng-md-icon>\r\n                </md-radio-button>\r\n            </md-radio-group>\r\n\r\n            <md-divider ></md-divider>\r\n\r\n            <md-radio-group ng-model=\"filter.social\" layout=\"row\" layout-align=\"center center\" layout-wrap>\r\n                <md-radio-button ng-repeat=\"(key, social) in socials\" ng-value=\"key\" aria-label=\"{{social.label | translate}}\" flex=\"20\">\r\n                    <ng-md-icon icon=\"{{social.icon.name}}\" ng-style=\"{fill: social.icon.color}\" size=\"30\"></ng-md-icon>\r\n                </md-radio-button>\r\n            </md-radio-group>\r\n\r\n        </md-dialog-content>\r\n\r\n        <div class=\"md-actions\" layout=\"row\">\r\n            <span flex></span>\r\n            <md-button type=\"button\" class=\"md-raised\" ng-click=\"cancel()\">\r\n                {{\'friends.list.filter.dialog.cancel\' | translate}}\r\n            </md-button>\r\n            <md-button class=\"md-raised md-primary\">\r\n                {{\'friends.list.filter.dialog.submit\' | translate}}\r\n            </md-button>\r\n        </div>\r\n    </form>\r\n</md-dialog>");}]);
"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,i,n,a){var r=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,r=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:i.default}),(0,n.default)(r,a.default.modulePrefix),e.default=r}),define("dummy/components/lottie-animation",["exports","ember-lottie/components/lottie-animation"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({actions:{animationHandler:function(e){this.animation=e},play:function(){this.animation&&this.animation.play()},pause:function(){this.animation&&this.animation.pause()}}})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,i){function n(){return a}e.appVersion=n;var a=i.default.APP.version;e.default=t.default.Helper.helper(n)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,i){var n=i.default.APP,a=n.name,r=n.version;e.default={name:"App Version",initialize:(0,t.default)(a,r)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,i){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,i){function n(){var e=arguments[1]||arguments[0];if(i.default.exportApplicationGlobal!==!1){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var a,r=i.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(i.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,i){var n=t.default.Router.extend({location:i.default.locationType,rootURL:i.default.rootURL});n.map(function(){}),e.default=n}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"HnE4yAta",block:'{"statements":[["append",["helper",["lottie-animation"],null,[["width","height","path","didCreate"],[640,480,"lottie-logo.json",["helper",["action"],[["get",[null]],"animationHandler"],null]]]],false],["text","\\n"],["open-element","button",[]],["modifier",["action"],[["get",[null]],"play"]],["flush-element"],["text","Play"],["close-element"],["text","\\n"],["open-element","button",[]],["modifier",["action"],[["get",[null]],"pause"]],["flush-element"],["text","Pause"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var t=document.querySelector('meta[name="dummy/config/environment"]').getAttribute("content"),i=JSON.parse(unescape(t)),n={default:i};return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(e){throw new Error('Could not read config from meta tag with name "dummy/config/environment".')}}),runningTests||require("dummy/app").default.create({name:"ember-lottie",version:"0.0.0+b88a45a2"});
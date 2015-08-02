/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/aupac-cascading-select', ['exports', 'ember-aupac-cascading-select/components/aupac-cascading-select'], function (exports, aupac_cascading_select) {

	'use strict';



	exports.default = aupac_cascading_select.default;

});
define('dummy/components/x-option', ['exports', 'emberx-select/components/x-option'], function (exports, XOption) {

	'use strict';

	exports['default'] = XOption['default'];

});
define('dummy/components/x-select', ['exports', 'emberx-select/components/x-select'], function (exports, XSelect) {

	'use strict';

	exports['default'] = XSelect['default'];

});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({

    //Bootstrap Styling
    items1: Ember['default'].computed(function () {
      var store = this.store;
      return [{
        content: function content(parent) {
          return store.findAll('manager');
        },
        extras: {
          label: 'Manager',
          width: 'col-xs-2'
        }
      }, {
        content: function content(parent) {
          return store.findAll('sub-manager');
        },
        extras: {
          label: 'Sub Manager',
          width: 'col-xs-2'
        }
      }, {
        content: function content(parent) {
          return store.findAll('employee');
        },
        extras: {
          label: 'Employee',
          width: 'col-xs-2'
        }
      }, {
        content: function content(parent) {
          return store.findAll('task');
        },
        extras: {
          label: 'Task',
          width: 'col-xs-2'
        }
      }, {
        content: function content(parent) {
          return store.findAll('sub-task');
        },
        extras: {
          label: 'Sub Task',
          width: 'col-xs-2'
        }
      }];
    }),

    items1Selection: null,

    //Select X
    items2: Ember['default'].computed(function () {
      var store = this.store;
      return [{
        content: function content(parent) {
          return store.findAll('manager');
        },
        extras: {
          label: 'Manager',
          width: 'col-xs-2'
        },
        selection: store.find('manager', 1)
      }, {
        content: function content(parent) {
          return store.findAll('sub-manager');
        },
        extras: {
          label: 'Sub Manager',
          width: 'col-xs-2'
        }
      }, {
        content: function content(parent) {
          return store.findAll('employee');
        },
        extras: {
          label: 'Employee',
          width: 'col-xs-2'
        }
      }, {
        content: function content(parent) {
          return store.findAll('task');
        },
        extras: {
          label: 'Task',
          width: 'col-xs-2'
        }
      }, {
        content: function content(parent) {
          return store.findAll('sub-task');
        },
        extras: {
          label: 'Sub Task',
          width: 'col-xs-2'
        }
      }];
    }),

    items2Selection: null,

    //Preselected items
    items3: [],

    //Bootstrap Styling
    items3Update: Ember['default'].on('init', function () {
      var _this = this;

      var store = this.store;
      Ember['default'].RSVP.all([store.findRecord('manager', 1), store.findRecord('sub-manager', 2), store.findRecord('employee', 3), store.findRecord('task', 4), store.findRecord('sub-task', 5)]).then(function (results) {
        var items = [{
          content: function content(parent) {
            return store.findAll('manager');
          },
          extras: {
            label: 'Manager',
            width: 'col-xs-2'
          },
          selection: results[0]
        }, {
          content: function content(parent) {
            return store.findAll('sub-manager');
          },
          extras: {
            label: 'Sub Manager',
            width: 'col-xs-2'
          },
          selection: results[1]
        }, {
          content: function content(parent) {
            return store.findAll('employee');
          },
          extras: {
            label: 'Employee',
            width: 'col-xs-2'
          },
          selection: results[2]
        }, {
          content: function content(parent) {
            return store.findAll('task');
          },
          extras: {
            label: 'Task',
            width: 'col-xs-2'
          },
          selection: results[3]
        }, {
          content: function content(parent) {
            return store.findAll('sub-task');
          },
          extras: {
            label: 'Sub Task',
            width: 'col-xs-2'
          },
          selection: results[4]
        }];

        _this.set('items3', items);
      });
    }),

    items3Selection: null

  });

});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/ember-aupac-cascading-select/tests/modules/ember-aupac-cascading-select/components/aupac-cascading-select.jshint', function () {

  'use strict';

  module('JSHint - modules/ember-aupac-cascading-select/components');
  test('modules/ember-aupac-cascading-select/components/aupac-cascading-select.js should pass jshint', function () {
    ok(true, 'modules/ember-aupac-cascading-select/components/aupac-cascading-select.js should pass jshint.');
  });

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('dummy/initializers/ember-cli-mirage', ['exports', 'ember', 'dummy/config/environment', 'dummy/mirage/config', 'ember-cli-mirage/server', 'ember-cli-mirage/utils/read-modules'], function (exports, Ember, ENV, config, Server, readModules) {

  'use strict';

  function hasModulesOfType(modulesMap, type) {
    var modulesOfType = modulesMap[type] || {};

    return Ember['default'].keys(modulesOfType).length > 0;
  }

  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(container, application) {
      var env = ENV['default'].environment;

      if (_shouldUseMirage(env, ENV['default']['ember-cli-mirage'])) {
        var modulesMap = readModules['default'](ENV['default'].modulePrefix);
        var hasFactories = hasModulesOfType(modulesMap, 'factories');
        var hasDefaultScenario = modulesMap['scenarios'].hasOwnProperty('default');
        var server = new Server['default']({
          environment: env
        });

        server.loadConfig(config['default']);

        if (env === 'test' && config.testConfig) {
          server.loadConfig(config.testConfig);
        }

        if (env === 'test' && hasFactories) {
          server.loadFactories(modulesMap['factories']);
        } else if (env !== 'test' && hasDefaultScenario && hasFactories) {
          server.loadFactories(modulesMap['factories']);
          modulesMap['scenarios']['default'](server);
        } else {
          server.db.loadData(modulesMap['fixtures']);
        }
      }
    }
  };

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/mirage/config', ['exports'], function (exports) {

  'use strict';

  exports['default'] = function () {

    this.get('/employees');
    this.get('/employees/:id');

    this.get('/managers');
    this.get('/managers/:id');

    this.get('/subManagers', 'sub-managers');
    this.get('/subManagers/:id', 'sub-managers');

    this.get('/subTasks', 'sub-tasks');
    this.get('/subTasks/:id', 'sub-tasks');

    this.get('/tasks');
    this.get('/tasks/:id');

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Route shorthand cheatsheet
    */
    /*
      GET shorthands
       // Collections
      this.get('/contacts');
      this.get('/contacts', 'users');
      this.get('/contacts', ['contacts', 'addresses']);
       // Single objects
      this.get('/contacts/:id');
      this.get('/contacts/:id', 'user');
      this.get('/contacts/:id', ['contact', 'addresses']);
    */

    /*
      POST shorthands
       this.post('/contacts');
      this.post('/contacts', 'user'); // specify the type of resource to be created
    */

    /*
      PUT shorthands
       this.put('/contacts/:id');
      this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
    */

    /*
      DELETE shorthands
       this.del('/contacts/:id');
      this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted
       // Single object + related resources. Make sure parent resource is first.
      this.del('/contacts/:id', ['contact', 'addresses']);
    */

    /*
      Function fallback. Manipulate data in the db via
         - db.{collection} // returns all the data defined in /app/mirage/fixtures/{collection}.js
        - db.{collection}.find(id)
        - db.{collection}.where(query)
        - db.{collection}.update(target, attrs)
        - db.{collection}.remove(target)
       // Example: return a single object with related models
      this.get('/contacts/:id', function(db, request) {
        var contactId = +request.params.id;
        var contact = db.contacts.find(contactId);
        var addresses = db.addresses
          .filterBy('contact_id', contactId);
         return {
          contact: contact,
          addresses: addresses
        };
      });
     */
  }

  /*
  You can optionally export a config that is only loaded during tests
  export function testConfig() {

  }
  */

});
define('dummy/mirage/factories/employee', ['exports', 'ember-cli-mirage'], function (exports, Mirage) {

	'use strict';

	exports['default'] = Mirage['default'].Factory.extend({
		name: function name(i) {
			return 'Employee ' + i;
		}
	});

});
define('dummy/mirage/factories/manager', ['exports', 'ember-cli-mirage'], function (exports, Mirage) {

	'use strict';

	exports['default'] = Mirage['default'].Factory.extend({
		name: function name(i) {
			return 'Manager ' + i;
		}
	});

});
define('dummy/mirage/factories/sub-manager', ['exports', 'ember-cli-mirage'], function (exports, Mirage) {

	'use strict';

	exports['default'] = Mirage['default'].Factory.extend({
		name: function name(i) {
			return 'Sub-Manager ' + i;
		}
	});

});
define('dummy/mirage/factories/sub-task', ['exports', 'ember-cli-mirage'], function (exports, Mirage) {

	'use strict';

	exports['default'] = Mirage['default'].Factory.extend({
		name: function name(i) {
			return 'Sub-Task ' + i;
		}
	});

});
define('dummy/mirage/factories/task', ['exports', 'ember-cli-mirage'], function (exports, Mirage) {

	'use strict';

	exports['default'] = Mirage['default'].Factory.extend({
		name: function name(i) {
			return 'Task ' + i;
		}
	});

});
define('dummy/mirage/scenarios/default', ['exports'], function (exports) {

  'use strict';

  exports['default'] = function (server) {

    // Seed your development database using your factories. This
    // data will not be loaded in your tests.

    server.createList('manager', 2);
    server.createList('sub-manager', 3);
    server.createList('employee', 4);
    server.createList('task', 5);
    server.createList('sub-task', 6);
  }

});
define('dummy/models/employee', ['exports', 'ember-data', 'ember'], function (exports, DS, Ember) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        name: DS['default'].attr('string'),
        subManager: DS['default'].belongsTo('sub-manager'),
        tasks: DS['default'].hasMany('task', { async: true }),
        displayName: Ember['default'].computed('name', function () {
            return this.get('name');
        })
    });

});
define('dummy/models/manager', ['exports', 'ember-data', 'ember'], function (exports, DS, Ember) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    subManagers: DS['default'].hasMany('sub-manager', { async: true }),
    displayName: Ember['default'].computed('name', function () {
      return this.get('name');
    })
  });

});
define('dummy/models/sub-manager', ['exports', 'ember-data', 'ember'], function (exports, DS, Ember) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    manager: DS['default'].belongsTo('manager'),
    employees: DS['default'].hasMany('employee', { async: true }),
    displayName: Ember['default'].computed('name', function () {
      return this.get('name');
    })
  });

});
define('dummy/models/sub-task', ['exports', 'ember-data', 'ember'], function (exports, DS, Ember) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    task: DS['default'].belongsTo('task'),
    displayName: Ember['default'].computed('name', function () {
      return this.get('name');
    })
  });

});
define('dummy/models/task', ['exports', 'ember-data', 'ember'], function (exports, DS, Ember) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    employee: DS['default'].belongsTo('employee'),
    subTasks: DS['default'].hasMany('sub-task', { async: true }),
    displayName: Ember['default'].computed('name', function () {
      return this.get('name');
    })
  });

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 14
              },
              "end": {
                "line": 13,
                "column": 14
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","fa fa-spinner fa-pulse");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 6
            },
            "end": {
              "line": 25,
              "column": 6
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element2, 'class');
          morphs[1] = dom.createMorphAt(element2,1,1);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
          morphs[3] = dom.createMorphAt(element2,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["form-group ",["get","control.extras.width",["loc",[null,[10,35],[10,55]]]]]]],
          ["block","if",[["get","control.isLoading",["loc",[null,[11,20],[11,37]]]]],[],0,null,["loc",[null,[11,14],[13,21]]]],
          ["content","control.extras.label",["loc",[null,[14,21],[14,45]]]],
          ["inline","view",["select"],["content",["subexpr","@mut",[["get","control.content",["loc",[null,[16,20],[16,35]]]]],[],[]],"selection",["subexpr","@mut",[["get","control.selection",["loc",[null,[17,22],[17,39]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","control.optionValuePath",["loc",[null,[18,28],[18,51]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","control.optionLabelPath",["loc",[null,[19,28],[19,51]]]]],[],[]],"class","form-control","prompt",["subexpr","@mut",[["get","control.prompt",["loc",[null,[21,19],[21,33]]]]],[],[]],"disabled",["subexpr","@mut",[["get","control.disabled",["loc",[null,[22,21],[22,37]]]]],[],[]]],["loc",[null,[15,12],[23,14]]]]
        ],
        locals: ["control"],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 41,
                "column": 12
              },
              "end": {
                "line": 43,
                "column": 12
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","fa fa-spinner fa-pulse");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 39,
              "column": 6
            },
            "end": {
              "line": 56,
              "column": 6
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createMorphAt(element1,1,1);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
          morphs[3] = dom.createMorphAt(element1,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["form-group ",["get","control.extras.width",["loc",[null,[40,35],[40,55]]]]]]],
          ["block","if",[["get","control.isLoading",["loc",[null,[41,18],[41,35]]]]],[],0,null,["loc",[null,[41,12],[43,19]]]],
          ["content","control.extras.label",["loc",[null,[44,21],[44,45]]]],
          ["inline","x-select",[],["action",["subexpr","action",[["subexpr","mut",[["get","control.selection",["loc",[null,[45,43],[45,60]]]]],[],["loc",[null,[45,38],[45,61]]]]],[],["loc",[null,[45,30],[45,62]]]],"multiple",false,"content",["subexpr","@mut",[["get","control.content",["loc",[null,[47,20],[47,35]]]]],[],[]],"selection",["subexpr","@mut",[["get","control.selection",["loc",[null,[48,22],[48,39]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","control.optionValuePath",["loc",[null,[49,28],[49,51]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","control.optionLabelPath",["loc",[null,[50,28],[50,51]]]]],[],[]],"prompt",["subexpr","@mut",[["get","control.prompt",["loc",[null,[51,19],[51,33]]]]],[],[]],"disabled",["subexpr","@mut",[["get","control.disabled",["loc",[null,[52,21],[52,37]]]]],[],[]],"class","form-control"],["loc",[null,[45,12],[54,14]]]]
        ],
        locals: ["control"],
        templates: [child0]
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 73,
                "column": 12
              },
              "end": {
                "line": 75,
                "column": 12
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","fa fa-spinner fa-pulse");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 79,
                  "column": 14
                },
                "end": {
                  "line": 79,
                  "column": 56
                }
              },
              "moduleName": "dummy/templates/application.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["content","control.prompt",["loc",[null,[79,38],[79,56]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "revision": "Ember@1.13.5",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 81,
                    "column": 16
                  },
                  "end": {
                    "line": 83,
                    "column": 16
                  }
                },
                "moduleName": "dummy/templates/application.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                  ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                return morphs;
              },
              statements: [
                ["content","item.name",["loc",[null,[82,18],[82,31]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "revision": "Ember@1.13.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 80,
                  "column": 14
                },
                "end": {
                  "line": 84,
                  "column": 14
                }
              },
              "moduleName": "dummy/templates/application.hbs"
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["block","x-option",[],["value",["subexpr","@mut",[["get","item",["loc",[null,[81,34],[81,38]]]]],[],[]]],0,null,["loc",[null,[81,16],[83,29]]]]
            ],
            locals: ["item"],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 78,
                "column": 12
              },
              "end": {
                "line": 85,
                "column": 12
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","x-option",[],["value",null],0,null,["loc",[null,[79,14],[79,69]]]],
            ["block","each",[["get","control.content",["loc",[null,[80,22],[80,37]]]]],[],1,null,["loc",[null,[80,14],[84,23]]]]
          ],
          locals: [],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 71,
              "column": 6
            },
            "end": {
              "line": 99,
              "column": 6
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0,1,1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
          morphs[3] = dom.createMorphAt(element0,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["form-group ",["get","control.extras.width",["loc",[null,[72,35],[72,55]]]]]]],
          ["block","if",[["get","control.isLoading",["loc",[null,[73,18],[73,35]]]]],[],0,null,["loc",[null,[73,12],[75,19]]]],
          ["content","control.extras.label",["loc",[null,[76,21],[76,45]]]],
          ["block","x-select",[],["value",["subexpr","@mut",[["get","control.selection",["loc",[null,[78,30],[78,47]]]]],[],[]],"disabled",["subexpr","@mut",[["get","control.disabled",["loc",[null,[78,57],[78,73]]]]],[],[]],"action",["subexpr","action",[["subexpr","mut",[["get","control.selection",["loc",[null,[78,94],[78,111]]]]],[],["loc",[null,[78,89],[78,112]]]]],[],["loc",[null,[78,81],[78,113]]]],"class","form-control"],1,null,["loc",[null,[78,12],[85,25]]]]
        ],
        locals: ["control"],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 117,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","well");
        var el2 = dom.createTextNode("\n    Checkout the controller source code ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","https://github.com/aupac/ember-aupac-cascading-select/blob/master/tests/dummy/app/controllers/application.js");
        var el3 = dom.createTextNode("here");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    Checkout the template source code ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","https://github.com/aupac/ember-aupac-cascading-select/blob/master/tests/dummy/app/templates/application.hbs");
        var el3 = dom.createTextNode("here");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","panel panel-default");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-heading");
        var el3 = dom.createTextNode("Example Using Bootstrap Styling");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-body");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        var el6 = dom.createTextNode("You selected : ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","panel panel-default");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-heading");
        var el3 = dom.createTextNode("Using ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","https://github.com/thefrontside/emberx-select");
        var el4 = dom.createTextNode("emberx-select");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" (for ember 2.0 when Ember.Select is removed)");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-body");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        var el6 = dom.createTextNode("You selected : ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","panel panel-default");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-heading");
        var el3 = dom.createTextNode("Pre-selecting items");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-body");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n                * Note: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("small");
        var el6 = dom.createTextNode("For this to work, all \"seletion\" promises need to be resolved before updating the items array");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        var el6 = dom.createTextNode("You selected : ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [2, 3]);
        var element4 = dom.childAt(fragment, [4, 3]);
        var element5 = dom.childAt(fragment, [6, 3]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(element3,1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element3, [3, 1, 1]),1,1);
        morphs[2] = dom.createMorphAt(element4,1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(element4, [3, 1, 1]),1,1);
        morphs[4] = dom.createMorphAt(element5,1,1);
        morphs[5] = dom.createMorphAt(dom.childAt(element5, [3, 3, 1]),1,1);
        return morphs;
      },
      statements: [
        ["block","aupac-cascading-select",[],["items",["subexpr","@mut",[["get","items1",["loc",[null,[9,38],[9,44]]]]],[],[]],"action",["subexpr","action",[["subexpr","mut",[["get","items1Selection",["loc",[null,[9,65],[9,80]]]]],[],["loc",[null,[9,60],[9,81]]]]],[],["loc",[null,[9,52],[9,82]]]]],0,null,["loc",[null,[9,6],[25,33]]]],
        ["content","items1Selection.name",["loc",[null,[29,35],[29,59]]]],
        ["block","aupac-cascading-select",[],["items",["subexpr","@mut",[["get","items2",["loc",[null,[39,38],[39,44]]]]],[],[]],"action",["subexpr","action",[["subexpr","mut",[["get","items2Selection",["loc",[null,[39,65],[39,80]]]]],[],["loc",[null,[39,60],[39,81]]]]],[],["loc",[null,[39,52],[39,82]]]]],1,null,["loc",[null,[39,6],[56,33]]]],
        ["content","items2Selection.name",["loc",[null,[60,35],[60,59]]]],
        ["block","aupac-cascading-select",[],["items",["subexpr","@mut",[["get","items3",["loc",[null,[71,38],[71,44]]]]],[],[]],"action",["subexpr","action",[["subexpr","mut",[["get","items3Selection",["loc",[null,[71,65],[71,80]]]]],[],["loc",[null,[71,60],[71,81]]]]],[],["loc",[null,[71,52],[71,82]]]]],2,null,["loc",[null,[71,6],[99,33]]]],
        ["content","items3Selection.name",["loc",[null,[107,35],[107,59]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('dummy/templates/components/x-select', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/x-select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","yield",["loc",[null,[2,2],[2,11]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/components/x-select.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            return morphs;
          },
          statements: [
            ["content","placeholder",["loc",[null,[5,12],[5,27]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 4
                },
                "end": {
                  "line": 8,
                  "column": 52
                }
              },
              "moduleName": "dummy/templates/components/x-select.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["content","option.label",["loc",[null,[8,36],[8,52]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.5",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/components/x-select.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["block","x-option",[],["value",["subexpr","@mut",[["get","option.value",["loc",[null,[8,22],[8,34]]]]],[],[]]],0,null,["loc",[null,[8,4],[8,65]]]]
          ],
          locals: ["option"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/x-select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","placeholder",["loc",[null,[4,8],[4,19]]]]],[],0,null,["loc",[null,[4,2],[6,9]]]],
          ["block","each",[["get","_optionValues",["loc",[null,[7,10],[7,23]]]]],[],1,null,["loc",[null,[7,2],[9,11]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/x-select.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","template",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[10,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/register-select-helper', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = function () {
    Ember['default'].Test.registerAsyncHelper('select', function (app, selector) {
      for (var _len = arguments.length, texts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        texts[_key - 2] = arguments[_key];
      }

      var $options = app.testHelpers.findWithAssert(selector + ' option');

      $options.each(function () {
        var _this = this;

        var $option = Ember['default'].$(this);

        Ember['default'].run(function () {
          _this.selected = texts.some(function (text) {
            return $option.is(':contains(\'' + text + '\')');
          });
          $option.trigger('change');
        });
      });

      return app.testHelpers.wait();
    });
  }

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/mirage/config.jshint', function () {

  'use strict';

  module('JSHint - mirage');
  test('mirage/config.js should pass jshint', function() { 
    ok(true, 'mirage/config.js should pass jshint.'); 
  });

});
define('dummy/tests/mirage/factories/employee.jshint', function () {

  'use strict';

  module('JSHint - mirage/factories');
  test('mirage/factories/employee.js should pass jshint', function() { 
    ok(true, 'mirage/factories/employee.js should pass jshint.'); 
  });

});
define('dummy/tests/mirage/factories/manager.jshint', function () {

  'use strict';

  module('JSHint - mirage/factories');
  test('mirage/factories/manager.js should pass jshint', function() { 
    ok(true, 'mirage/factories/manager.js should pass jshint.'); 
  });

});
define('dummy/tests/mirage/factories/sub-manager.jshint', function () {

  'use strict';

  module('JSHint - mirage/factories');
  test('mirage/factories/sub-manager.js should pass jshint', function() { 
    ok(true, 'mirage/factories/sub-manager.js should pass jshint.'); 
  });

});
define('dummy/tests/mirage/factories/sub-task.jshint', function () {

  'use strict';

  module('JSHint - mirage/factories');
  test('mirage/factories/sub-task.js should pass jshint', function() { 
    ok(true, 'mirage/factories/sub-task.js should pass jshint.'); 
  });

});
define('dummy/tests/mirage/factories/task.jshint', function () {

  'use strict';

  module('JSHint - mirage/factories');
  test('mirage/factories/task.js should pass jshint', function() { 
    ok(true, 'mirage/factories/task.js should pass jshint.'); 
  });

});
define('dummy/tests/mirage/scenarios/default.jshint', function () {

  'use strict';

  module('JSHint - mirage/scenarios');
  test('mirage/scenarios/default.js should pass jshint', function() { 
    ok(true, 'mirage/scenarios/default.js should pass jshint.'); 
  });

});
define('dummy/tests/models/employee.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/employee.js should pass jshint', function() { 
    ok(true, 'models/employee.js should pass jshint.'); 
  });

});
define('dummy/tests/models/manager.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/manager.js should pass jshint', function() { 
    ok(true, 'models/manager.js should pass jshint.'); 
  });

});
define('dummy/tests/models/sub-manager.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/sub-manager.js should pass jshint', function() { 
    ok(true, 'models/sub-manager.js should pass jshint.'); 
  });

});
define('dummy/tests/models/sub-task.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/sub-task.js should pass jshint', function() { 
    ok(true, 'models/sub-task.js should pass jshint.'); 
  });

});
define('dummy/tests/models/task.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/task.js should pass jshint', function() { 
    ok(true, 'models/task.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/aupac-cascading-select-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('aupac-cascading-select', 'Unit | Component | aupac cascading select', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

});
define('dummy/tests/unit/components/aupac-cascading-select-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/aupac-cascading-select-test.js should pass jshint', function() { 
    ok(true, 'unit/components/aupac-cascading-select-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-aupac-cascading-select","version":"1.2.0.6dfc0522"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
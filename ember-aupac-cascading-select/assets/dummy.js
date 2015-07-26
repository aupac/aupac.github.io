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
    items: [{
      content: function content(parent, store) {
        return store.findAll('manager');
      },
      extras: {
        label: 'Manager',
        width: 'col-xs-2'
      }
    }, {
      content: function content(parent, store) {
        return store.findAll('sub-manager');
      },
      extras: {
        label: 'Sub Manager',
        width: 'col-xs-2'
      }
    }, {
      content: function content(parent, store) {
        return store.findAll('employee');
      },
      extras: {
        label: 'Employee',
        width: 'col-xs-2'
      }
    }, {
      content: function content(parent, store) {
        return store.findAll('task');
      },
      extras: {
        label: 'Task',
        width: 'col-xs-2'
      }
    }, {
      content: function content(parent, store) {
        return store.findAll('sub-task');
      },
      extras: {
        label: 'Sub Task',
        width: 'col-xs-2'
      }
    }],

    finalSelection: null

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
    ok(false, 'modules/ember-aupac-cascading-select/components/aupac-cascading-select.js should pass jshint.\nmodules/ember-aupac-cascading-select/components/aupac-cascading-select.js: line 4, col 28, \'isNone\' is defined but never used.\n\n1 error');
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
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 6
            },
            "end": {
              "line": 17,
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
          var el2 = dom.createTextNode("\n              ");
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
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          morphs[2] = dom.createMorphAt(element0,3,3);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["form-group ",["get","control.extras.width",["loc",[null,[5,35],[5,55]]]]]]],
          ["content","control.extras.label",["loc",[null,[6,21],[6,45]]]],
          ["inline","view",["select"],["content",["subexpr","@mut",[["get","control.content",["loc",[null,[8,20],[8,35]]]]],[],[]],"selection",["subexpr","@mut",[["get","control.selection",["loc",[null,[9,22],[9,39]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","control.optionValuePath",["loc",[null,[10,28],[10,51]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","control.optionLabelPath",["loc",[null,[11,28],[11,51]]]]],[],[]],"class","form-control","prompt",["subexpr","@mut",[["get","control.prompt",["loc",[null,[13,19],[13,33]]]]],[],[]],"disabled",["subexpr","@mut",[["get","control.disabled",["loc",[null,[14,21],[14,37]]]]],[],[]]],["loc",[null,[7,12],[15,14]]]]
        ],
        locals: ["control"],
        templates: []
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
            "line": 59,
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
        var el1 = dom.createTextNode("\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0, 3]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element1,1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3, 1, 1]),1,1);
        return morphs;
      },
      statements: [
        ["block","aupac-cascading-select",[],["items",["subexpr","@mut",[["get","items",["loc",[null,[4,38],[4,43]]]]],[],[]],"store",["subexpr","@mut",[["get","store",["loc",[null,[4,50],[4,55]]]]],[],[]],"action",["subexpr","action",[["subexpr","mut",[["get","finalSelection",["loc",[null,[4,76],[4,90]]]]],[],["loc",[null,[4,71],[4,91]]]]],[],["loc",[null,[4,63],[4,92]]]]],0,null,["loc",[null,[4,6],[17,33]]]],
        ["content","finalSelection.name",["loc",[null,[21,35],[21,58]]]]
      ],
      locals: [],
      templates: [child0]
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
  require("dummy/app")["default"].create({"name":"ember-aupac-cascading-select","version":"1.1.0.910b5775"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
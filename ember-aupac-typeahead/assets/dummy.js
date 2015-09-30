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
define('dummy/blueprints/ember-aupac-typeahead', ['exports', 'ember-aupac-typeahead/blueprints/ember-aupac-typeahead'], function (exports, ember_aupac_typeahead) {

	'use strict';



	exports.default = ember_aupac_typeahead.default;

});
define('dummy/components/aupac-control', ['exports', 'ember-aupac-control/components/aupac-control'], function (exports, aupac_control) {

	'use strict';



	exports.default = aupac_control.default;

});
define('dummy/components/aupac-ember-data-typeahead', ['exports', 'ember-aupac-typeahead/components/aupac-ember-data-typeahead'], function (exports, aupac_ember_data_typeahead) {

	'use strict';



	exports.default = aupac_ember_data_typeahead.default;

});
define('dummy/components/aupac-typeahead', ['exports', 'ember-aupac-typeahead/components/aupac-typeahead'], function (exports, aupac_typeahead) {

	'use strict';



	exports.default = aupac_typeahead.default;

});
define('dummy/controllers/application', ['exports', 'ember', 'ember-validations', 'dummy/templates/customised/suggestion', 'dummy/templates/customised/header', 'dummy/templates/customised/footer', 'dummy/templates/customised/not-found', 'dummy/templates/customised/pending'], function (exports, Ember, EmberValidations, suggestionTemplate, headerTemplate, footerTemplate, notFoundTemplate, pendingTemplate) {

  'use strict';

  var computed = Ember['default'].computed;

  var countries = Ember['default'].A(["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"]);

  exports['default'] = Ember['default'].Controller.extend(EmberValidations['default'], {

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      this.store.findRecord('task', 3).then(function (task) {
        _this.set('task', task);
      });
    },

    //Country Search
    country: null,
    countrySource: function countrySource(query, syncResults /*, asyncResults*/) {
      var regex = new RegExp('.*' + query + '.*', 'i');
      var results = countries.filter(function (item /*, index, enumerable*/) {
        return regex.test(item);
      });
      syncResults(results);
    },

    //Employee Search
    employee: null,

    //Selection 2
    task: null,

    isDisabled: false,
    suggestionTemplate: suggestionTemplate['default'],
    headerTemplate: headerTemplate['default'],
    footerTemplate: footerTemplate['default'],
    notFoundTemplate: notFoundTemplate['default'],
    pendingTemplate: pendingTemplate['default'],

    actions: {
      clearModel: function clearModel() {
        this.set('task', null);
      }
    },

    validations: {
      country: {
        presence: true
      },
      'employee': {
        presence: true
      },
      'task': {
        presence: true
      }
    }

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
define('dummy/ember-aupac-typeahead/tests/modules/ember-aupac-typeahead/components/aupac-ember-data-typeahead.jshint', function () {

  'use strict';

  module('JSHint - modules/ember-aupac-typeahead/components');
  test('modules/ember-aupac-typeahead/components/aupac-ember-data-typeahead.js should pass jshint', function () {
    ok(true, 'modules/ember-aupac-typeahead/components/aupac-ember-data-typeahead.js should pass jshint.');
  });

});
define('dummy/ember-aupac-typeahead/tests/modules/ember-aupac-typeahead/components/aupac-typeahead.jshint', function () {

  'use strict';

  module('JSHint - modules/ember-aupac-typeahead/components');
  test('modules/ember-aupac-typeahead/components/aupac-typeahead.js should pass jshint', function () {
    ok(true, 'modules/ember-aupac-typeahead/components/aupac-typeahead.js should pass jshint.');
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

    //this.get('/employees');
    this.get('/employees', function (db, request) {
      var search = request.queryParams.q;
      var regex = new RegExp('.*' + search + '.*', 'i');
      var employees = db.employees.filter(function (item) {
        return regex.test(item.name);
      });

      return {
        employees: employees
      };
    });
    this.get('/employees/:id');

    this.get('/managers');
    this.get('/managers/:id');

    this.get('/subManagers', 'sub-managers');
    this.get('/subManagers/:id', 'sub-managers');

    this.get('/subTasks', 'sub-tasks');
    this.get('/subTasks/:id', 'sub-tasks');

    this.get('/tasks', function (db, request) {
      var search = request.queryParams.q;
      var regex = new RegExp('.*' + search + '.*', 'i');
      var tasks = db.tasks.filter(function (item) {
        return regex.test(item.name);
      });

      return {
        tasks: tasks
      };
    });
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
    server.createList('employee', 50);
    server.createList('task', 50);
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
define('dummy/services/validations', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var set = Ember['default'].set;

  exports['default'] = Ember['default'].Service.extend({
    init: function init() {
      set(this, 'cache', {});
    }
  });

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
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 18,
              "column": 8
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
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
          ["inline","aupac-typeahead",[],["action",["subexpr","action",[["subexpr","mut",[["get","country",["loc",[null,[13,48],[13,55]]]]],[],["loc",[null,[13,43],[13,56]]]]],[],["loc",[null,[13,35],[13,57]]]],"class","form-control","source",["subexpr","@mut",[["get","countrySource",["loc",[null,[15,17],[15,30]]]]],[],[]],"placeholder","Search for a country"],["loc",[null,[13,10],[17,12]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
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
          var el1 = dom.createTextNode("              ");
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
          ["inline","aupac-typeahead",[],["action",["subexpr","action",[["subexpr","mut",[["get","country",["loc",[null,[33,52],[33,59]]]]],[],["loc",[null,[33,47],[33,60]]]]],[],["loc",[null,[33,39],[33,61]]]],"class","form-control","source",["subexpr","@mut",[["get","countrySource",["loc",[null,[35,21],[35,34]]]]],[],[]],"placeholder","Search for a country","suggestionTemplate",["subexpr","@mut",[["get","suggestionTemplate",["loc",[null,[37,33],[37,51]]]]],[],[]],"headerTemplate",["subexpr","@mut",[["get","headerTemplate",["loc",[null,[38,29],[38,43]]]]],[],[]],"footerTemplate",["subexpr","@mut",[["get","footerTemplate",["loc",[null,[39,29],[39,43]]]]],[],[]],"notFoundTemplate",["subexpr","@mut",[["get","notFoundTemplate",["loc",[null,[40,31],[40,47]]]]],[],[]],"pendingTemplate",["subexpr","@mut",[["get","pendingTemplate",["loc",[null,[41,30],[41,45]]]]],[],[]]],["loc",[null,[33,14],[42,16]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 58,
              "column": 12
            },
            "end": {
              "line": 64,
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
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","aupac-ember-data-typeahead",[],["action",["subexpr","action",[["subexpr","mut",[["get","employee",["loc",[null,[59,63],[59,71]]]]],[],["loc",[null,[59,58],[59,72]]]]],[],["loc",[null,[59,50],[59,73]]]],"class","form-control","modelClass","employee","placeholder","Type employee..."],["loc",[null,[59,14],[63,16]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.5",
          "loc": {
            "source": null,
            "start": {
              "line": 83,
              "column": 12
            },
            "end": {
              "line": 91,
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
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","aupac-ember-data-typeahead",[],["action",["subexpr","action",[["subexpr","mut",[["get","task",["loc",[null,[84,63],[84,67]]]]],[],["loc",[null,[84,58],[84,68]]]]],[],["loc",[null,[84,50],[84,69]]]],"selection",["subexpr","@mut",[["get","task.displayName",["loc",[null,[85,24],[85,40]]]]],[],[]],"class","form-control","modelClass","task","placeholder","Type task...","disabled",["subexpr","@mut",[["get","isDisabled",["loc",[null,[89,23],[89,33]]]]],[],[]]],["loc",[null,[84,14],[90,16]]]]
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
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 101,
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
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("aupac-typeahead examples");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel panel-default");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel-heading");
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("Searching a local array");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel-body");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h5");
        var el6 = dom.createTextNode("Selected Country: ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel panel-default");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel-heading");
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("Customise your templates");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel-body");
        var el4 = dom.createTextNode("\n\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h5");
        var el6 = dom.createTextNode("Selected Country: ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("aupac-ember-data-typeahead examples");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel panel-default");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel-heading");
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("ember-data model search");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel-body");
        var el4 = dom.createTextNode("\n\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h5");
        var el6 = dom.createTextNode("Selected Employee: ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel panel-default");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel-heading");
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("ember-data model search with preselected item");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","panel-body");
        var el4 = dom.createTextNode("\n\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h5");
        var el6 = dom.createTextNode("Selected task: ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-xs-12");
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" Disabled?");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","btn btn-default");
        var el6 = dom.createTextNode("Clear Model");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3, 3]);
        var element2 = dom.childAt(element0, [5, 3]);
        var element3 = dom.childAt(element0, [9, 3]);
        var element4 = dom.childAt(element0, [11, 3]);
        var element5 = dom.childAt(element4, [3]);
        var element6 = dom.childAt(element5, [5]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1, 1]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [1, 1]),1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
        morphs[4] = dom.createMorphAt(dom.childAt(element3, [1, 1]),1,1);
        morphs[5] = dom.createMorphAt(dom.childAt(element3, [3]),1,1);
        morphs[6] = dom.createMorphAt(dom.childAt(element4, [1, 1]),1,1);
        morphs[7] = dom.createMorphAt(element5,1,1);
        morphs[8] = dom.createElementMorph(element6);
        morphs[9] = dom.createMorphAt(element5,7,7);
        return morphs;
      },
      statements: [
        ["content","country",["loc",[null,[8,32],[8,43]]]],
        ["block","aupac-control",[],["label","Country","mandatory",true,"errors",["subexpr","@mut",[["get","errors.country",["loc",[null,[12,63],[12,77]]]]],[],[]],"leftIcon","glyphicon glyphicon-search"],0,null,["loc",[null,[12,8],[18,26]]]],
        ["content","country",["loc",[null,[28,36],[28,47]]]],
        ["block","aupac-control",[],["label","Country","mandatory",true,"errors",["subexpr","@mut",[["get","errors.country",["loc",[null,[32,67],[32,81]]]]],[],[]],"leftIcon","glyphicon glyphicon-search"],1,null,["loc",[null,[32,12],[43,30]]]],
        ["content","employee.name",["loc",[null,[54,37],[54,54]]]],
        ["block","aupac-control",[],["label","Employee","mandatory",true,"errors",["subexpr","@mut",[["get","errors.employee",["loc",[null,[58,68],[58,83]]]]],[],[]],"leftIcon","glyphicon glyphicon-search"],2,null,["loc",[null,[58,12],[64,30]]]],
        ["content","task.name",["loc",[null,[76,33],[76,46]]]],
        ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","isDisabled",["loc",[null,[81,44],[81,54]]]]],[],[]]],["loc",[null,[81,12],[81,56]]]],
        ["element","action",["clearModel"],[],["loc",[null,[82,44],[82,67]]]],
        ["block","aupac-control",[],["label","Task","mandatory",true,"errors",["subexpr","@mut",[["get","errors.task",["loc",[null,[83,64],[83,75]]]]],[],[]],"leftIcon","glyphicon glyphicon-search"],3,null,["loc",[null,[83,12],[91,30]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('dummy/templates/customised/footer', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
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
            "line": 1,
            "column": 85
          }
        },
        "moduleName": "dummy/templates/customised/footer.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","typeahead-footer");
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","text-center");
        var el3 = dom.createTextNode("I am a custom footer");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/customised/header', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
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
            "line": 1,
            "column": 85
          }
        },
        "moduleName": "dummy/templates/customised/header.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","typeahead-header");
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","text-center");
        var el3 = dom.createTextNode("I am a custom header");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/customised/not-found', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
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
            "line": 1,
            "column": 90
          }
        },
        "moduleName": "dummy/templates/customised/not-found.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","typeahead-not-found");
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","text-center");
        var el3 = dom.createTextNode("GRRRR nothing found :(");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/customised/pending', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
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
            "line": 1,
            "column": 82
          }
        },
        "moduleName": "dummy/templates/customised/pending.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","typeahead-pending");
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","text-center");
        var el3 = dom.createTextNode("Be patient dude!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/customised/suggestion', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
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
            "line": 1,
            "column": 202
          }
        },
        "moduleName": "dummy/templates/customised/suggestion.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","typeahead-suggestion");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200");
        dom.setAttribute(el2,"style","width: 10%; height: 10%");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" - configure the suggestion as you wish.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        return morphs;
      },
      statements: [
        ["content","model",["loc",[null,[1,147],[1,156]]]]
      ],
      locals: [],
      templates: []
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
define('dummy/tests/helpers/aupac-typeahead', ['exports', 'ember'], function (exports, Ember) {

        'use strict';

        exports['default'] = function () {

                /**
                 * Allows you to easily select an item from an ajax-search component.
                 *
                 * @param selector : jquery selector of the typeahead input element
                 * @param searchString : The search text
                 * @param suggestionIndex : The item to select from the drop down (starting at 1 for the first item)
                 */
                Ember['default'].Test.registerHelper('aupacTypeaheadSearch', function (app, selector, searchString, suggestionIndex) {

                        $(selector).eq(0).val(searchString).trigger("input");

                        Ember['default'].run(function () {
                                click('.tt-suggestion:nth-child(' + suggestionIndex + ')');
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
define('dummy/tests/helpers/validate-properties', ['exports', 'ember', 'ember-qunit'], function (exports, Ember, ember_qunit) {

  'use strict';

  exports.testValidPropertyValues = testValidPropertyValues;
  exports.testInvalidPropertyValues = testInvalidPropertyValues;

  var run = Ember['default'].run;

  function validateValues(object, propertyName, values, isTestForValid) {
    var promise = null;
    var validatedValues = [];

    values.forEach(function (value) {
      function handleValidation(errors) {
        var hasErrors = object.get('errors.' + propertyName + '.firstObject');
        if (hasErrors && !isTestForValid || !hasErrors && isTestForValid) {
          validatedValues.push(value);
        }
      }

      run(object, 'set', propertyName, value);

      var objectPromise = null;
      run(function () {
        objectPromise = object.validate().then(handleValidation, handleValidation);
      });

      // Since we are setting the values in a different run loop as we are validating them,
      // we need to chain the promises so that they run sequentially. The wrong value will
      // be validated if the promises execute concurrently
      promise = promise ? promise.then(objectPromise) : objectPromise;
    });

    return promise.then(function () {
      return validatedValues;
    });
  }

  function testPropertyValues(propertyName, values, isTestForValid, context) {
    var validOrInvalid = isTestForValid ? 'Valid' : 'Invalid';
    var testName = validOrInvalid + ' ' + propertyName;

    ember_qunit.test(testName, function (assert) {
      var object = this.subject();

      if (context && typeof context === 'function') {
        context(object);
      }

      // Use QUnit.dump.parse so null and undefined can be printed as literal 'null' and
      // 'undefined' strings in the assert message.
      var valuesString = QUnit.dump.parse(values).replace(/\n(\s+)?/g, '').replace(/,/g, ', ');
      var assertMessage = 'Expected ' + propertyName + ' to have ' + validOrInvalid.toLowerCase() + ' values: ' + valuesString;

      return validateValues(object, propertyName, values, isTestForValid).then(function (validatedValues) {
        assert.deepEqual(validatedValues, values, assertMessage);
      });
    });
  }
  function testValidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, true, context);
  }

  function testInvalidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, false, context);
  }

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
define('dummy/tests/pages/aupac-typeahead', ['exports', 'dummy/tests/page-object'], function (exports, PageObject) {

  'use strict';



  exports['default'] = aupacTypeahead;
  var value = PageObject['default'].value;
  var customHelper = PageObject['default'].customHelper;
  var collection = PageObject['default'].collection;
  var clickable = PageObject['default'].clickable;

  function aupacTypeahead(selector, options) {
    return {
      search: function search(_search) {
        $(selector).val(_search).trigger('input');
      },
      suggestions: collection({
        scope: '', //Reset to global scope
        itemScope: '.tt-suggestion',
        item: {
          select: clickable()
        }
      }),
      value: value(selector),
      isDisabled: function isDisabled() {
        return $(selector).prop('disabled');
      },
      isEnabled: function isEnabled() {
        return !$(selector).prop('disabled');
      }
    };
  }

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
define('dummy/tests/unit/components/aupac-ember-data-typeahead-test', ['ember-qunit', 'ember', 'ember-data', 'ember-aupac-mocks'], function (ember_qunit, Ember, DS, ember_aupac_mocks) {

  'use strict';

  var mock = ember_aupac_mocks.Mocks.mock;
  var mockFunction = ember_aupac_mocks.Mocks.mockFunction;
  var verify = ember_aupac_mocks.Mocks.verify;
  var when = ember_aupac_mocks.Mocks.when;
  var empty = ember_aupac_mocks.Matchers.empty;
  var emailAddress = ember_aupac_mocks.Matchers.emailAddress;
  var greaterThan = ember_aupac_mocks.Matchers.greaterThan;
  var everyItem = ember_aupac_mocks.Matchers.everyItem;
  var hasSize = ember_aupac_mocks.Matchers.hasSize;
  var even = ember_aupac_mocks.Matchers.even;
  var lessThan = ember_aupac_mocks.Matchers.lessThan;
  var either = ember_aupac_mocks.Matchers.either;

  ember_qunit.moduleForComponent('aupac-ember-data-typeahead', 'Unit | Component | aupac ember data typeahead', {
    // Specify the other units that are required for this test
    //needs: ['model:task'],
    unit: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject({
      modelClass: 'task'
    });
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

  /*
  function getAsyncMock1() {

    //model
    const model = mock(DS.Model);
    when(model).get('id').thenReturn(1);
    when(model).get('id').thenReturn(1);
    when(model).get('displayName').thenReturn('hello world');

    //Fake out an {async : true} model using a promise
    const mockResolver = mockFunction();
    const promise = mock({
      then(){},
      get(){}
    });
    when(promise).then().thenReturn(model);
    when(promise).get('id').thenReturn(1);

    //var promise = new Ember.RSVP.Promise(function(resolve, reject){
    //  // succeed
    //  resolve(model);
    //});

    //ember-data store
    const store = mock(DS.Store);
    when(store).query('task',{}).thenReturn(Ember.A([]));
    when(store).findRecord('task', 1).thenReturn(promise);

    return {
      store,
      model : promise
    };
  }
  test('you can pass an ember-data model as the selection', function(assert) {
    assert.expect(1);

    const mock = getAsyncMock1();

    const component = this.subject({
      modelClass: 'task',
      selection: mock.model,
      store: mock.store
    });
    this.render();
    assert.equal(component.$().val(), 'hello world', 'should set the input value to the displayKey');
  });
  */

  ember_qunit.test('you can pass a string as the selection', function (assert) {
    assert.expect(1);
    var model = 'hello world';
    var mockStore = mock(DS['default'].Store);
    when(mockStore).query().thenReturn({
      then: function then() {
        //Do nothing
      }
    });

    var component = this.subject({
      modelClass: 'task',
      selection: model,
      store: mockStore
    });
    this.render();
    assert.equal(component.$().val(), 'hello world', 'should set the input value to the string');
  });

});
define('dummy/tests/unit/components/aupac-ember-data-typeahead-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/aupac-ember-data-typeahead-test.js should pass jshint', function() { 
    ok(true, 'unit/components/aupac-ember-data-typeahead-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/aupac-typeahead-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('aupac-typeahead', 'Unit | Component | aupac typeahead', {
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
define('dummy/tests/unit/components/aupac-typeahead-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/aupac-typeahead-test.js should pass jshint', function() { 
    ok(true, 'unit/components/aupac-typeahead-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/controllers/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('dummy/tests/unit/controllers/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/application-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/application-test.js should pass jshint.'); 
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
  require("dummy/app")["default"].create({"name":"ember-aupac-typeahead","version":"2.0.1"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
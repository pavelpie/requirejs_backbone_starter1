requirejs.config({
    "baseUrl": "main",
    "paths": {
      "app" : "../app",
      "jquery" : "../lib/jquery-2.0.3.min",
      "underscore" : "../lib/underscore-min",
      "backbone" : "../lib/backbone-min"
      
    },
    "shim": {
        "jquery": {
            exports: '$'
        },
        "backbone": {
            deps: ["jquery","underscore"], 
            exports: "Backbone"  
        } ,
        "underscore": {
            exports: '_'
        }
    }
});

// Load the main app module to start the app
requirejs(["main"]);
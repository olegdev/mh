// Настройки requirejs

require.config({
	baseUrl: 'app',
	paths: {				
		'jquery': '../vendor/jquery/dist/jquery',
		'underscore': '../vendor/underscore/underscore',
		'backbone': '../vendor/backbone/backbone',
		'backbone.babysitter': '../vendor/lib/backbone.babysitter',
		'backbone.wreqr': '../vendor/lib/backbone.wreqr',
		'marionette': '../vendor/marionette/lib/backbone.marionette',
		'text': '../vendor/requirejs-text/text',
	}
});

require(['app',], function(App){  
	App.initialize();
});
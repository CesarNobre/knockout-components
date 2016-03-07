requirejs.config({
    baseUrl: 'assets/js/',
    paths: {
        'do-task': 'components/do-task',
        'text':'../../bower_components/text/text',
        'knockout':'../../bower_components/knockout/dist/knockout.debug',
        'Task':'components/dependencies/Task',
        'storage':'storage',
        'jasmine-fixture':'../../node_modules/jasmine-fixture/dist/jasmine-fixture.min'
    }
});


requirejs(['do-task']);

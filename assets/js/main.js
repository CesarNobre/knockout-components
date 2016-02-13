requirejs.config({
    baseUrl: 'assets/js/',
    paths: {
        'do-task': 'components/do-task',
        'text':'../../bower_components/text/text',
    }
});


requirejs(['do-task']);

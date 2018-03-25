const url='http://193.112.55.79:9090/api';
const Api={
    getindexmenu:url+'/getindexmenu',
    getmoneyctrl:url+'/getmoneyctrl',
}
requirejs.config({
    paths: {
        jquery: 'js/lib/jquery',
        bootstrap:'js/lib/bootstrap',
        tmpl:'js/lib/template-web'
	}
    ,
    shim: {
        jquery: {
            exports: 'jquery'
        },
        bootstrap: {
            deps: ['jquery']
        }

    }
});

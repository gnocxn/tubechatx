if(Meteor.isClient){
    BlazeLayout.setRoot('body');
}

AccountsTemplates.configureRoute('signUp', {
    name: 'signUp',
    path: '/sign-up',
    template: 'signUp',
    layoutTemplate: 'defaultLayout',
    layoutRegions: {
        top: 'defaultNav'
    },
    contentRegion: 'main'
});

AccountsTemplates.configureRoute('signIn', {
    name: 'signIn',
    path: '/sign-in',
    template: 'signIn',
    layoutTemplate: 'defaultLayout',
    layoutRegions: {
        top: 'defaultNav'
    },
    contentRegion: 'main'
});

FlowRouter.route('/',{
    name : 'home',
    action : function (p, q) {
        BlazeLayout.render('defaultLayout', {
            top : 'defaultNav',
            main : 'home'
        })
    }
});
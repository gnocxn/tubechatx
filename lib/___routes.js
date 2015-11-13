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

FlowRouter.route('/',{
    name : 'home',
    action : function (p, q) {
        BlazeLayout.render('defaultLayout', {
            top : 'defaultNav',
            main : 'home'
        })
    }
});
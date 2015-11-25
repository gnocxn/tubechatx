Template.defaultNav.viewmodel({
    Logout : function(e){
        e.preventDefault();
        AccountsTemplates.logout();
    }
});



/*
Template.defaultNav.events({
    'click a.btnLogout' : function(e){
        console.log(e);
        e.preventDefault();
        if(Meteor.userId()){
            Meteor.logout(function(){
                console.log('logout success');
            })
        }
    }
});

Template.defaultNav.rendered = function(){
    $(document).ready(function(){
        $('a.btnLogout').on('click',function(e){
            console.log(e);
        })
    })
}*/

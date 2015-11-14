Template.defaultNav.viewmodel({
    Logout : function(e){
        console.log(e);
        e.preventDefault();
        if(Meteor.userId()){
            Meteor.logout(function(){
                console.log('logout success');
            })
        }
    }
})
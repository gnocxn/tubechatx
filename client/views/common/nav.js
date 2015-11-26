Template.defaultNav.events({
    'click a.btnLogout' : function(e){
        e.preventDefault();
        if(Meteor.userId()){
            AccountsTemplates.logout();
        }
    },
    'click a.btnNewRoom' : function(e){
        e.preventDefault();
        var roomId = 'GU-' + Random.id();
        if(cookies.has('roomId')){
            roomId = cookies.get('roomId');
        }else{
            cookies.set('roomId', roomId);
        }
        var pathOfRoom = FlowRouter.path('roomDetail',{roomId : roomId});
        FlowRouter.go(pathOfRoom);
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

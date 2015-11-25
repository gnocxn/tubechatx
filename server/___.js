if(Meteor.isServer){
    Meteor.startup(function(){
        var defaultAdmin = Meteor.settings.private.default.admin;
        if(Meteor.users.find().count() === 0 && defaultAdmin){
            var adminId = Accounts.createUser({
                username : defaultAdmin.username,
                email : defaultAdmin.email,
                password : defaultAdmin.password
            });

            Roles.addUsersToRoles(adminId, ['admin']);

            console.log('admin Id', adminId);
        }
    });

    Meteor.methods({
        "userExists": function(username){
            return !!Meteor.users.findOne({username: username});
        },
    });
}
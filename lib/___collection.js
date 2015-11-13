Movies = new Meteor.Collection('movies');

Users = Meteor.users;

Users.after.insert(function(userId, doc){
   if(!userId){
       Roles.addUsersToRoles(doc._id, ['user']);
   }
});
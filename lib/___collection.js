Movies = new Meteor.Collection('movies');

Users = Meteor.users;

Users.after.insert(function (userId, doc) {
    var roles = ['user']
    if (!userId) {
        Roles.addUsersToRoles(doc._id, roles);
    }
});
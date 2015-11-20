Movies = new Meteor.Collection('movies');

Rooms = new Meteor.Collection('rooms');

Playlist = new Meteor.Collection('playlist');

ChatMessages = new Meteor.Collection('chat_messages');

Users = Meteor.users;

Users.after.insert(function (userId, doc) {
    var roles = ['user']
    if (!userId) {
        Roles.addUsersToRoles(doc._id, roles);
    }
});


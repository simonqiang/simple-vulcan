import Users from 'meteor/vulcan:users';

const membersActions = [
    'movies.new',
    'movies.edit.own',
    'movies.remoe.own',
];
Users.groups.members.can(membersActions);

const adminActions = [
    'movies.edit.all',
    'movies.remove.all'
];
Users.groups.admins.can(adminActions);
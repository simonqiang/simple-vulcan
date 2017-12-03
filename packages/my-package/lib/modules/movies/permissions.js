import Users from 'meteor/vulcan:users';

const membersActions = [
    'movies.new',
];
Users.groups.members.can(membersActions);
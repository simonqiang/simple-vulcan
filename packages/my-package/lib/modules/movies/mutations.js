import { newMutation, Utils } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const mutations = {
    new: {
        name: 'moviesNew',

        check(user) {
            if (!user) return false;
            return Users.canDo(user, 'movies.new');
        },

        mutation(root, {document}, context) {
            Utils.performCheck(this.check, context.currentUser, document);

            return newMutation({
                collection: context.Movies,
                document: document,
                currentUser: context.currentUser,
                validate: true,
                context,
            });
        },
    }
};

export default mutations;
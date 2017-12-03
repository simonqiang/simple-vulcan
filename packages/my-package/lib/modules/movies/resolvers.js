const resolvers = {
    list: {
        name: 'moviesList',

        resolver(root, {terms = {}}, context, info) {   
            const {selector, options} = context.Movies.getParameters(terms, {}, context.currentUser);

            return context.Movies.find(selector, options).fetch();
        },
    },
    total: {
        name: 'moviesTotal',

        resolver(root, {terms = {}}, context) {
            const {selector, options} = context.Movies.getParameters(terms, {}, context.currentUser);
            return context.Movies.find(selector, options).count();            
        },
    },
};

export default resolvers;
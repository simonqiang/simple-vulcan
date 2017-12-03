import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import resolvers from './resolvers.js';
import './fragments.js';
import mutations from './mutations.js';
import './permissions.js';

const Movies = createCollection({
    collectionName: 'Movies',
    typeName: 'Movie',
    schema,
    resolvers,
    mutations,
});

export default Movies; 
const schema = {
    _id: {
        type: String,
        optional: true,
        viewableBy: ['guests'],
    },
    createdAt: {
        type: Date,
        optional: true,
        viewableBy: ['guests'],
        onInsert: () => {
            return new Date();
        },
    },
    userId: {
        type: String,
        optional: true,
        viewableBy: ['guests'],
        resolveAs: {
            fieldName: 'user',
            type: 'User',
            resolver: (movie, args, context) => {
                return context.Users.findOne({_id: movie.userId}, { fields: context.Users.getViewableFields(context.currentUser, context.Users) });
            },
            addOriginalField: true
        }
    },

    name: {
        label: 'Name',
        type: String,
        optional: true,
        viewableBy: ['guests'],
        insertableBy: ['members'],
        editableBy: ['members'],    
    },
    year: {
        label: 'Year',
        type: String,
        optional: true,
        viewableBy: ['guests'],
        insertableBy: ['members'],
        editableBy: ['members'],    
    },
    review: {
        label: 'Review',
        type: String, 
        optional: true,
        control: 'textarea',
        viewableBy: ['guests'],
        insertableBy: ['members'],
        editableBy: ['members'],    
    },
};

export default schema;
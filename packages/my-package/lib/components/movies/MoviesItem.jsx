import React from 'react';
import { registerComponent, Components } from 'meteor/vulcan:core';

import Movies from '../../modules/movies/collection.js';
import MoviesEditForm from './MoviesEditForm.jsx';

const MoviesItem = ({ movie, currentUser }) =>
    <div style={{ paddingBottom: "15px", marginBottom: "15px", borderBottom: "1px solid #ccc" }}>
        <h4>{movie.name}({movie.year})</h4>
        <p>{movie.review} - {movie.user && movie.user.displayName}</p>

        {/*edit document form*/}
        {Movies.options.mutations.edit.check(currentUser, movie) ?
            <Components.ModalTrigger label="Edit Movie">
                <Components.MoviesEditForm currentUser={currentUser} documentId={movie._id} />
            </Components.ModalTrigger>
            : null
        }
    </div>

registerComponent('MoviesItem', MoviesItem);

export default MoviesItem;
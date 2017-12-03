import React from 'react';
import { registerComponent, ModalTrigger } from 'meteor/vulcan:core';

const MoviesItem = ({movie, currentUser}) => 
    <div style={{paddingBottom: "15px", marginBottom: "15px", borderBottom: "1px solid #ccc"}}>
        <h4>{movie.name}({movie.year})</h4>
        <p>{movie.review} - {movie.user && movie.user.displayName}</p>
    </div>

registerComponent('MoviesItem', MoviesItem);

export default MoviesItem;
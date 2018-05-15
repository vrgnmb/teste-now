import React from 'react';

export default( apiUrl, callback ) => 
  fetch( apiUrl )
    .then( response => response.json())
    .then( callback );


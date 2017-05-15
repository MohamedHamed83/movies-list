// This file is an entry point for angular tests Avoids some weird issues when
// using webpack + angular.

import './src/vendors';

var testContext = require.context('./src', true, /\.spec\.js/);

// requires and returns all modules that match
var modules = requireAll(testContext);


/*
 * get all the files, for each file, call the context function
 * that will require the file and load it up here. Context will
 * loop and require those spec files here
 */
function requireAll( requireContext ) {
  return requireContext.keys().map( ( path ) => {
    try {
      return requireContext( path );
    } catch ( err ) {
      console.error( '[ERROR] WITH SPEC FILE: ', path );
      console.error( err );
    }
  } );
}

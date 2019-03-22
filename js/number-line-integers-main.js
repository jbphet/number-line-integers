// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author John Blanco (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const NumberLineIntegersScreen = require( 'NUMBER_LINE_INTEGERS/number-line-integers/NumberLineIntegersScreen' );

  // strings
  const numberLineIntegersTitleString = require( 'string!NUMBER_LINE_INTEGERS/number-line-integers.title' );

  const simOptions = {
    credits: {
      //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    const sim = new Sim( numberLineIntegersTitleString, [ new NumberLineIntegersScreen() ], simOptions );
    sim.start();
  } );
} );
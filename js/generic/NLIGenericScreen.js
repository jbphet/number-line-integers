// Copyright 2019, University of Colorado Boulder

/**
 * the 'Generic' screen in the Number Line: Integers simulation
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const NLIGenericModel = require( 'NUMBER_LINE_INTEGERS/generic/model/NLIGenericModel' );
  const NLIGenericScreenView = require( 'NUMBER_LINE_INTEGERS/generic/view/NLIGenericScreenView' );
  const numberLineIntegers = require( 'NUMBER_LINE_INTEGERS/numberLineIntegers' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  // TODO: Put this in with the strings!!!!!!!!!!!!!
  const genericString = 'Generic';

  class NLIGenericScreen extends Screen {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {

      const options = {
        name: genericString,
        homeScreenIcon: null,
        tandem: tandem
      };

      super( () => new NLIGenericModel(), model => new NLIGenericScreenView( model ), options );
    }
  }

  return numberLineIntegers.register( 'NLIGenericScreen', NLIGenericScreen );
} );

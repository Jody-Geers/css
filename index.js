/*
*	API Export
*/
var cssManipulation = function ( elId ) {
  // focus
  var _focusEl = elId;
  
/*NOTE: i want to do below, but arguments.callee.name
* is useless on the anon function and i cant 
* rename the anon function, so im a bit stuck there.
* can change API to .set('css property', 'value')
* but then i loose the syntactic sugar... ='[
*/
/*
  for ( var key in document.body.style ) {
    _self[key] = function ( value ) { 
      _elStyle( arguments.callee.name, value );
      return _self;
    };
  };
*/

  // get / set element width
  this.width = function width ( width ) {
    _elStyle( arguments.callee.name, width );
    return this;
  };

  // get / set element height
  this.height = function height ( height ) {
    _elStyle( arguments.callee.name, height );
    return this;
  };

  // get / set element left position
  this.left = function left ( left ) {
    _elStyle( arguments.callee.name, left );
    return this;
  };

  // get / set element top position
  this.top = function top ( top ) {
    _elStyle( arguments.callee.name, top );
    return this;
  };

  // get / set element background color
  this.backgroundColor = function backgroundColor ( color ) {
    _elStyle( arguments.callee.name, color );
    return this;
  };


  // get / set element position
  this.position = function position ( position ) {
    _elStyle( arguments.callee.name, position );
    return this;
  };

  // private helper
  function _elStyle ( attribute, value ) {
    if ( value )
      document.getElementById( _focusEl ).style[attribute] = value;
    else
      return document.getElementById( _focusEl ).style[attribute];
  };

};

/*
*	Make API Export Public
*/
module.exports = function ( elId ) {

  return new cssManipulation( elId );

};
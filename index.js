/*
*	API Export
*/
var cssManipulation = function ( elId ) {
	
	// focus
	var focusEl = elId;
  
	/*NOTE: i want to do below, but arguments.callee.name
	* is useless on the anon function and i cant 
	* rename the anon function, so im a bit stuck there.
	* can change API to .set('css property', 'value')
	* but then i loose the syntactic sugar... ='[
	*/
// 	for ( var key in document.body.style ) {
		
// 		self[key] = function ( value ) {
			
// 			elStyle( arguments.callee.name, value );
			
// 			return self;
			
// 		};
    
// 	};
			
	// get / set element width
	this.width = function width( width ) {
		elStyle( arguments.callee.name, width );
		return this;
	};

	// get / set element height
	this.height = function height( height ) {
		elStyle( arguments.callee.name, height );
		return this;
	};

	// get / set element left position
	this.left = function left( left ) {
		elStyle( arguments.callee.name, left );
		return this;
	};

	// get / set element top position
	this.top = function top( top ) {
		elStyle( arguments.callee.name, top );
		return this;
	};

	// get / set element background color
	this.backgroundColor = function backgroundColor( color ) {
    	elStyle( arguments.callee.name, color );
    	return this;
	};


	// get / set element position
	this.position = function position( position ) {
		elStyle( arguments.callee.name, position );
		return this;
	};

	// private helper
	function elStyle( attribute, value ) {
		if ( value )
			document.getElementById( focusEl ).style[attribute] = value;
		else
			return document.getElementById( focusEl ).style[attribute];
	};

};

/*
*	Make API Export Public
*/
module.exports = function ( elId ) {

  return new cssManipulation( elId );

};

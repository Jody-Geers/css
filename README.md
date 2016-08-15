# css

  Simple dom css manipulation.

## Installation

  Install with [component(1)](http://component.io):

    $ component install Jody-Geers/css

## API	
	<head>
		<script src="./build/build.js"></script>
	</head>

	<body>
	  	
	  	<div id="test-div"></div>
	  	<span id="output"></span>
	  	
	</body>

	<script>
	
		var css = require( 'jody-geers-css' );
	  
		// set - uses el id
		css( 'test-div' )
			.width( '200px' )
			.height( '200px' )
			.position( 'relative' )
			.left( '100px' )
			.top( '100px' )
			.backgroundColor( 'blue' )
		;
		
	  	// get
	  	var testDivWidth = css( 'test-div' ).width();
	  	
	</script>

## License

  The MIT License (MIT)

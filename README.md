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
	  var css = require('jody-geers-css');
	  
	  // set - uses el id
	  css("test-div")
		.width("200px")
		.height("200px")
		.position("relative")
		.left("100px")
		.top("100px")
		.backgroundColor("blue")
	  ;
		
	  // get
	  var testDivWidth = css("test-div").width();
	</script>

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
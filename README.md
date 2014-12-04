node-bruteforce
===============

JavaScript module for brute forcing things.

Example:
```javascript

var sha1 = require("sha1");
var bruteForce = require("node-bruteforce");

var hash = sha1("HELLO");

bruteForce(["A", "B", "C", "D", "E", "F", "G", "L", "O", "H"], function(value){
	
	if( hash == sha1(value) ) {
		console.log("Correct value of the hash was: " + value);
		return true;
	}
	
	return false;
});

```

This example will produce the output:
```
Correct value of the hash was: HELLO
```

## Installation
via npm:
```sh
$ npm install node-bruteforce
```

## API
### bruteForce(characters, callback)
Run a callback to all possible combinations with the given characters. Paramater callback can be a string or an array.
This module stops running callbacks when a callback returns "true".

## License
MIT License. See `./LICENSE` for details.

reverse-url-shortener
======

What
------
Reverse url shortener. Get the location of those shortened urls.

Installation
------
```
npm install -g reverse-url-shortener
```

or

```
npm install --save reverse-url-shortener
```

Usage
------
CLI
```
$ reverse-url http://ow.ly/W7oOu

// Output: >> http://ow.ly/W7oOu is http://bjarneo.codes/
```

JavaScript
```
var reverse = require('reverse-url-shortener');

reverse('http://ow.ly/W7oOu', function(err, url) {
    if (err) {
        throw new Error(err);
    }

    console.log(url);
});

// Output: http://bjarneo.codes/
```

Tests
------
```
npm test
```

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.

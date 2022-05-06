# ruby-nice
[![npm](https://img.shields.io/npm/v/ruby-nice?color=default&style=plastic&logo=npm)](https://www.npmjs.com/package/ruby-nice)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/magynhard/ruby-nice?color=default&label=browser&logo=javascript&style=plastic)](https://github.com/magynhard/ruby-nice/releases)
![npm](https://img.shields.io/npm/dt/ruby-nice?color=blue&style=plastic)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg?style=plastic&logo=mit)](LICENSE)

> The nice javascript library to rubynize your javascript to be a happy programmer again.

This library is mainly intended for those who are used to programming with Ruby and miss some comfort functionalities in Javascript. It's time to be happy again!


On the one hand it includes extensions and patches for core classes (e.g. String), on the other hand it provides (extended) wrappers in Ruby style, e.g. `File` with `File.write()`.


It is available for the browser as well as for NodeJS.


Search terms:
```
ruby for javascript, ruby methods for javascript, ruby functions for javascript
```

# Table of contents
* [Usage](#usage)
* [Installation](#installation)
  * [NodeJS](#installation_node_js)
  * [Browser](#installation_browser)
* [Documentation](#documentation)
* [Contributing](#contributing)





<a name="usage"></a>
## Usage
### Example
```js
// -- node js --
const Array = require('ruby-nice/array');
const String = require('ruby-nice/string');
// -- browser --
<script type="text/javascript" src="js/lib/ruby-nice.min.js"></script>



// -- code samples --
        
"sample".capitalize() // capitalize a string
// => "Sample"
        
[1,2,3].sample() // get random element of an Array
// => 3

```





<a name="installation"></a>
## Installation

### NodeJS
You can either use npm or yarn to install ruby-nice.

#### yarn
In your project root directory execute the following command:
```bash
yarn add ruby-nice
```
### npm
In your project root directory execute the following command:
```bash
npm install ruby-nice
```

### Browser

Download the latest build `ruby-nice.min.js` from the folder `dist` or get the latest release
and put it in an appropriate folder of your project, e.g. `js/lib`
and reference it by a script tag in your project:
```html
<script type="text/javascript" src="js/lib/ruby-nice.min.js"></script>
```

Optionally you may the source file to your build pipeline, if you are using webpack, brunch or any other packager.

  
<a name="documentation"></a>    
## Documentation
### Feature set
* Tools
* Loops
* Classes
  * [Array](#)
  * [File](doc/file.jsdoc.md)
  * [String](doc/string.jsdoc.md)




<a name="contributing"></a>    
## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/magynhard/ruby-nice. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


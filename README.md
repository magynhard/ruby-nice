# ruby-nice

[![npm](https://img.shields.io/npm/v/ruby-nice?color=default&style=plastic&logo=npm)](https://www.npmjs.com/package/ruby-nice)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/magynhard/ruby-nice?color=default&label=browser&logo=javascript&style=plastic)](https://github.com/magynhard/ruby-nice/releases)
![npm](https://img.shields.io/npm/dt/ruby-nice?color=blue&style=plastic)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg?style=plastic&logo=mit)](LICENSE)

> The nice javascript library to rubynize your javascript to be a happy programmer again.

This library is mainly intended for those who are familiar with programming 
with Ruby and miss some convenience features in Javascript. It's time to be happy again!

On the one hand it contains extensions and patches for core classes (e.g. String), 
on the other hand it provides (extended) wrapper classes in Ruby style, 
e.g. `File` with `File.write()`.

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

### JavaScript method naming of the Ruby ports

The javascript method names are ported to a javascript equivalent by the following rules and always written
in `camelCase`:

| Description                                                                                                                                                                                            | Ruby code                                     | JavaScript code                                 |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|-------------------------------------------------|
| Question mark methods are ported to `isMethod`                                                                                                                                                         | `File.exist?`<br>`File.directory?`            | `File.isExisting()`<br>`File.isDirectory()`     | 
| Getters are ported to getMethod `getMethod`                                                                                                                                                            | `File.basename`                               | `File.getBaseName()`                            | 
| Verbs and transformation methods starting with 'to' are only ported to `camelCase`                                                                                                                     | `MyClass.destroy_object`<br>`MyClass.to_hash` | `MyClass.destroyObject()`<br>`MyClass.toHash()` | 
| Loops should start with `for`, but they would collide with java script methods, e.g. forEach()<br>In cases of collissions, the orignal ruby name remains if possible. Some other cases have new names. | `[].each` / `[].each_with_index`              | `[1,2,3].eachWithIndex()`                       | 

### Usage example

```js
// -- node js --
require('ruby-nice/array'); // monkey patch arrays
require('ruby-nice/string'); // monkey patch strings
require('ruby-nice'); // load all monkey patches at once
const File = require('ruby-nice/file'); // load ported ruby class
// -- browser --
<script type="text/javascript" src="js/lib/ruby-nice.bundle.js"></script>



// -- code samples --
        
"sample".capitalize() // capitalize a string
// => "Sample"
        
[1,2,3].getSample() // get random element of an Array
// => 3

        
// iterate array       
['dog','house','mouse'].eachWithIndex((val, i) => {
   console.log(i + ':' + val); 
});
// => 0:dog
// => 1:house
// => 2:mouse


// iterate object
{ peter: { role: "admin" }, sam: { role: "dev" } }.eachWithIndex((key, val, i) => {
   console.log(key + " has the role: " + val.role); 
});
// => peter has the role admin
// => sam has the role dev


// write text file
File.write("/home/user/document.txt", "some content");


// use map() on object
{ a: 1, b: 2}.mapObject((key, value, index) => { 
    return value;
})
// => [1,2]

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

Download the latest [release on Github](https://github.com/magynhard/ruby-nice/releases) or the from the folder `dist` and put it in an appropriate folder of your project, e.g. `js/lib`
and reference it by a script tag in your project:

```html

<script type="text/javascript" src="js/lib/ruby-nice.bundle.js"></script>
```

Optionally you may add the source file to your build pipeline, if you are using webpack, brunch or any other packager.

#### Bundle releases
As `ruby-nice` depends on [LuckyCase](https://github.com/magynhard/lucky-case), there is also a bundle release called `ruby-nice.bundle.js` where the latter is included. If you already use [LuckyCase](https://github.com/magynhard/lucky-case) separately, use the default version `ruby-nice.js` without included dependencies. If you don't know what you should use, use the bundled release!

#### Minified releases
If you prefer minified builds, use the `*.min.js` version. Be aware that they do not contain any javascript documentation that may be very useful when working with a powerful IDE.

<a name="documentation"></a>

## Documentation

### Feature set

* Tools
* Loops
* Classes
    * [Array](doc/array.jsdoc.md)
    * [Dir](doc/dir.jsdoc.md)
    * [Env](doc/env.jsdoc.md)
    * [File](doc/file.jsdoc.md)
    * [FileUtils](doc/file-utils.jsdoc.md)
    * [Number](doc/number.jsdoc.md)
    * [Object](doc/object.jsdoc.md)
    * [String](doc/string.jsdoc.md)
    * [System](doc/system.jsdoc.md)

<a name="contributing"></a>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/magynhard/ruby-nice. This project is intended
to be a safe, welcoming space for collaboration, and contributors are expected to adhere to
the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


<a name="String"></a>

## String
RubyNice version to add methods directly to the class by monkey patching

* [String](#String)
    * [.toDownCase()](#String+toDownCase) &rarr; <code>string</code>
    * [.toUpCase()](#String+toUpCase) &rarr; <code>string</code>
    * [.getFirst()](#String+getFirst) &rarr; <code>string</code>
    * [.getLast()](#String+getLast) &rarr; <code>string</code>
    * [.getSample()](#String+getSample) &rarr; <code>Object</code>

<a name="String+toDownCase"></a>

### string.toDownCase() &rarr; <code>string</code>
Convert all characters inside the string
into lower case

**Example**
```js
'this-isAnExample_string'.downcase()
     // => 'this-isanexample_string'
```
<a name="String+toUpCase"></a>

### string.toUpCase() &rarr; <code>string</code>
Convert all characters inside the string
into upper case

**Example**
```js
'this-isAnExample_string'.upcase()
 // => 'THIS-ISANEXAMPLE_STRING'
```
<a name="String+getFirst"></a>

### string.getFirst() &rarr; <code>string</code>
Get first character of the current string

**Example**
```js
'Happy'.getFirst()
 // => 'H'
```
<a name="String+getLast"></a>

### string.getLast() &rarr; <code>string</code>
Get last character of the current string

**Example**
```js
'Happy'.getLast()
 // => 'y'
```
<a name="String+getSample"></a>

### string.getSample() &rarr; <code>Object</code>
Returns a random element of the string

**Example**
```js
'Happy'.getSample()
     // => 'H' | 'a' | 'p' | 'y'
```

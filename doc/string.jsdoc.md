<a name="String"></a>

## String
RubyNice version to add methods directly to the class by monkey patching

* [String](#String)
    * [.toDownCase()](#String+toDownCase) &rarr; <code>string</code>
    * [.toUpCase()](#String+toUpCase) &rarr; <code>string</code>
    * [.getFirst()](#String+getFirst) &rarr; <code>string</code>
    * [.getLast()](#String+getLast) &rarr; <code>string</code>
    * [.getSample()](#String+getSample) &rarr; <code>Object</code>
    * [.scan(pattern)](#String+scan)

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
<a name="String+scan"></a>

### string.scan(pattern)
Matching the pattern (which may be a Regexp or a String).

For each match, a result is generated and either added to the result array. If the pattern contains no groups, each individual result consists of the matched string.
If the pattern contains groups, each individual result is itself an array containing one entry per group.

| Param | Type |
| --- | --- |
| pattern | <code>string</code> \| <code>RegExp</code> | 


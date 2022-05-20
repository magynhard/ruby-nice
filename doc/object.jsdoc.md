<a name="String"></a>

## Object
RubyNice version to add methods directly to the class by monkey patching

* [Object](#Object)
    * [.each(loop_function)](#Object+each) &rarr; <code>Object.&lt;any&gt;</code>
    * [.map(loop_function)](#Object+map) &rarr; <code>Array.&lt;any&gt;</code>
    * [.getFirst()](#Object+getFirst) &rarr; [<code>Object</code>](#Object)
    * [.getLast()](#Object+getLast) &rarr; [<code>Object</code>](#Object)
    * [.getSample()](#Object+getSample) &rarr; [<code>Object</code>](#Object)

<a name="Object+each"></a>

### object.each(loop_function) &rarr; <code>Object.&lt;any&gt;</code>
Iterates over all elements of an object

Breaks if returning false

**Returns**: <code>Object.&lt;any&gt;</code> - returns itself  

| Param | Type |
| --- | --- |
| loop_function | [<code>eachObjectLoopCallback</code>](#eachObjectLoopCallback) \| <code>eachArrayLoopCallback</code> | 


**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.each((key, value, index) => {
         if(condition) return false;
         console.log(key, value);
     })
```
<a name="Object+map"></a>

### object.map(loop_function) &rarr; <code>Array.&lt;any&gt;</code>
Maps over all elements of an object

**Returns**: <code>Array.&lt;any&gt;</code> - returns itself  

| Param | Type |
| --- | --- |
| loop_function | [<code>eachObjectLoopCallback</code>](#eachObjectLoopCallback) | 


**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.map((key, value, index) => {
         return value;
     })
     => ['one','two','three']
```
<a name="Object+getFirst"></a>

### object.getFirst() &rarr; [<code>Object</code>](#Object)
Returns the first element of the array

**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.getFirst() => { a: 'one' }
```
<a name="Object+getLast"></a>

### object.getLast() &rarr; [<code>Object</code>](#Object)
Returns the last element of the array

**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.getLast() => { c: 'three' }
```
<a name="Object+getSample"></a>

### object.getSample() &rarr; [<code>Object</code>](#Object)
Returns a random element of the array

**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.getSample() => { b: 'two' }
```

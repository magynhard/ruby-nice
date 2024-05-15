<a name="String"></a>

## Object
RubyNice version to add methods directly to the class by monkey patching

* [Object](#Object)
    * [.eachWithIndex(loop_function)](#Object+eachWithIndex) &rarr; <code>Object.&lt;any&gt;</code>
    * [.mapObject(loop_function)](#Object+mapObject) &rarr; <code>Object.&lt;any&gt;</code>
    * [.getFirst()](#Object+getFirst) &rarr; [<code>Object</code>](#Object)
    * [.getLast()](#Object+getLast) &rarr; [<code>Object</code>](#Object)
    * [.getSample()](#Object+getSample) &rarr; [<code>Object</code>](#Object)

<a name="Object+eachWithIndex"></a>

### object.eachWithIndex(loop_function) &rarr; <code>Object.&lt;any&gt;</code>
Iterates over all elements of the object

Breaks if returning false

**Returns**: <code>Object.&lt;any&gt;</code> - returns itself  

| Param | Type |
| --- | --- |
| loop_function | [<code>eachObjectLoopCallback</code>](#eachObjectLoopCallback) \| <code>eachArrayLoopCallback</code> | 


**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.eachWithIndex((key, value, index) => {
         if(condition) return false;
         console.log(key, value);
     })
```
<a name="Object+mapObject"></a>

### object.mapObject(loop_function) &rarr; <code>Object.&lt;any&gt;</code>
Maps over all elements of an object

**Returns**: <code>Object.&lt;any&gt;</code> - returns itself  

| Param | Type |
| --- | --- |
| loop_function | [<code>eachObjectLoopCallback</code>](#eachObjectLoopCallback) | 


**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.mapObject((key, value, index) => {
         return value;
     })
     // => ['one','two','three']
```
<a name="Object+getFirst"></a>

### object.getFirst() &rarr; [<code>Object</code>](#Object)
Returns the first element of the object

**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.getFirst() // => { a: 'one' }
```
<a name="Object+getLast"></a>

### object.getLast() &rarr; [<code>Object</code>](#Object)
Returns the last element of the object

**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.getLast() // => { c: 'three' }
```
<a name="Object+getSample"></a>

### object.getSample() &rarr; [<code>Object</code>](#Object)
Returns a random element of the object

**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.getSample() // => { b: 'two' }
```
<a name="value"></a>

## value(loop_function) &rarr; <code>Object.&lt;any&gt;</code>
Iterates over all elements of the object

Breaks if returning false

**Returns**: <code>Object.&lt;any&gt;</code> - returns itself  

| Param | Type |
| --- | --- |
| loop_function | [<code>eachObjectLoopCallback</code>](#eachObjectLoopCallback) \| <code>eachArrayLoopCallback</code> | 


**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.eachWithIndex((key, value, index) => {
         if(condition) return false;
         console.log(key, value);
     })
```
<a name="value"></a>

## value(loop_function) &rarr; <code>Object.&lt;any&gt;</code>
Maps over all elements of an object

**Returns**: <code>Object.&lt;any&gt;</code> - returns itself  

| Param | Type |
| --- | --- |
| loop_function | [<code>eachObjectLoopCallback</code>](#eachObjectLoopCallback) | 


**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.mapObject((key, value, index) => {
         return value;
     })
     // => ['one','two','three']
```
<a name="value"></a>

## value() &rarr; [<code>Object</code>](#Object)
Returns the first element of the object

**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.getFirst() // => { a: 'one' }
```
<a name="value"></a>

## value() &rarr; [<code>Object</code>](#Object)
Returns the last element of the object

**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.getLast() // => { c: 'three' }
```
<a name="value"></a>

## value() &rarr; [<code>Object</code>](#Object)
Returns a random element of the object

**Example**
```js
{ a: 'one', b: 'two', c: 'three'}.getSample() // => { b: 'two' }
```
<a name="eachObjectLoopCallback"></a>

## eachObjectLoopCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| key | <code>any</code> | 
| value | <code>any</code> | 
| index | <code>number</code> | 


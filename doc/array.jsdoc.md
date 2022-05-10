<a name="String"></a>

## Array
RubyNice version to add methods directly to the class by monkey patching

* [Array](#Array)
    * [.each(loop_function)](#Array+each) &rarr; <code>Array.&lt;any&gt;</code>
    * [.eachWithIndex(loop_function)](#Array+eachWithIndex) &rarr; <code>Array.&lt;any&gt;</code>
    * [.flatten()](#Array+flatten)
    * [.getFirst()](#Array+getFirst) &rarr; <code>any</code>
    * [.getLast()](#Array+getLast) &rarr; <code>any</code>
    * [.getMax()](#Array+getMax) &rarr; <code>number</code> \| <code>null</code>
    * [.getMin()](#Array+getMin) &rarr; <code>number</code> \| <code>null</code>
    * [.getSample()](#Array+getSample) &rarr; <code>any</code>

<a name="Array+each"></a>

### array.each(loop_function) &rarr; <code>Array.&lt;any&gt;</code>
Iterates over all elements of an array

Breaks if returning false

**Returns**: <code>Array.&lt;any&gt;</code> - returns itself  

| Param | Type |
| --- | --- |
| loop_function | [<code>eachLoopCallback</code>](#eachLoopCallback) | 


**Example**
```js
['one','two','three'].each((elem, index) => {
         if(condition) return false;
         console.log(elem);
     })
```
<a name="Array+eachWithIndex"></a>

### array.eachWithIndex(loop_function) &rarr; <code>Array.&lt;any&gt;</code>
Iterates over all elements of an array

Breaks if returning false

**Returns**: <code>Array.&lt;any&gt;</code> - returns itself  

| Param | Type |
| --- | --- |
| loop_function | [<code>eachLoopCallback</code>](#eachLoopCallback) | 


**Example**
```js
['one','two','three'].each((elem, index) => {
         if(condition) return false;
         console.log(elem);
     })
```
<a name="Array+flatten"></a>

### array.flatten()
Returns a new array that is a one dimensional flattening of itself.
**Returns{array}**:   
<a name="Array+getFirst"></a>

### array.getFirst() &rarr; <code>any</code>
Returns the first element of the array

**Example**
```js
['one','two','three'].first => 'one'
```
<a name="Array+getLast"></a>

### array.getLast() &rarr; <code>any</code>
Returns the last element of the array

**Example**
```js
['one','two','three'].last => 'three'
```
<a name="Array+getMax"></a>

### array.getMax() &rarr; <code>number</code> \| <code>null</code>
Returns the max element of the array. All values must be of type number.

**Returns**: <code>number</code> \| <code>null</code> - returns null if array is empty  

**Example**
```js
[3,7,2].getMax() => 7
```
<a name="Array+getMin"></a>

### array.getMin() &rarr; <code>number</code> \| <code>null</code>
Returns the min element of the array. All values must be of type number.

**Returns**: <code>number</code> \| <code>null</code> - returns null if array is empty  

**Example**
```js
[3,7,2,9].getMax() => 2
```
<a name="Array+getSample"></a>

### array.getSample() &rarr; <code>any</code>
Returns a random element of the array

**Example**
```js
['one','two','three'].sample => 'two'
```

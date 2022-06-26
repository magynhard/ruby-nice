<a name="String"></a>

## Array
RubyNice version to add methods directly to the class by monkey patching

* [Array](#Array)
    * [.eachWithIndex(loop_function)](#Array+eachWithIndex) &rarr; <code>Array.&lt;any&gt;</code>
    * [.flatten()](#Array+flatten) &rarr; [<code>Array</code>](#Array)
    * [.getFirst()](#Array+getFirst) &rarr; <code>any</code>
    * [.getLast()](#Array+getLast) &rarr; <code>any</code>
    * [.getMax()](#Array+getMax) &rarr; <code>number</code> \| <code>null</code>
    * [.getMin()](#Array+getMin) &rarr; <code>number</code> \| <code>null</code>
    * [.getSample()](#Array+getSample) &rarr; <code>any</code>

<a name="Array+eachWithIndex"></a>

### array.eachWithIndex(loop_function) &rarr; <code>Array.&lt;any&gt;</code>
Iterates over all elements of the array

Breaks if returning false

**Returns**: <code>Array.&lt;any&gt;</code> - returns itself  

| Param | Type |
| --- | --- |
| loop_function | [<code>eachArrayLoopCallback</code>](#eachArrayLoopCallback) | 


**Example**
```js
['one','two','three'].eachWithIndex((elem, index) => {
         if(condition) return false;
         console.log(elem);
     })
```
<a name="Array+flatten"></a>

### array.flatten() &rarr; [<code>Array</code>](#Array)
Returns a new array that is a one dimensional flattening of itself.

Different to Javascript flat(), which only flattens one dimension.
<a name="Array+getFirst"></a>

### array.getFirst() &rarr; <code>any</code>
Returns the first element of the array

**Example**
```js
['one','two','three'].getFirst() // => 'one'
```
<a name="Array+getLast"></a>

### array.getLast() &rarr; <code>any</code>
Returns the last element of the array

**Example**
```js
['one','two','three'].getLast() // => 'three'
```
<a name="Array+getMax"></a>

### array.getMax() &rarr; <code>number</code> \| <code>null</code>
Returns the max element of the array. All values must be of type number.

**Returns**: <code>number</code> \| <code>null</code> - returns null if array is empty  

**Example**
```js
[3,7,2].getMax() // => 7
```
<a name="Array+getMin"></a>

### array.getMin() &rarr; <code>number</code> \| <code>null</code>
Returns the min element of the array. All values must be of type number.

**Returns**: <code>number</code> \| <code>null</code> - returns null if array is empty  

**Example**
```js
[3,7,2,9].getMin() // => 2
```
<a name="Array+getSample"></a>

### array.getSample() &rarr; <code>any</code>
Returns a random element of the array

**Example**
```js
['one','two','three'].getSample() // => 'two'
```
<a name="flatten"></a>

## flatten() &rarr; [<code>Array</code>](#Array)
Returns a new array that is a one dimensional flattening of itself.

Different to Javascript flat(), which only flattens one dimension.
<a name="getMax"></a>

## getMax() &rarr; <code>number</code> \| <code>null</code>
Returns the max element of the array. All values must be of type number.

**Returns**: <code>number</code> \| <code>null</code> - returns null if array is empty  

**Example**
```js
[3,7,2].getMax() // => 7
```
<a name="getMin"></a>

## getMin() &rarr; <code>number</code> \| <code>null</code>
Returns the min element of the array. All values must be of type number.

**Returns**: <code>number</code> \| <code>null</code> - returns null if array is empty  

**Example**
```js
[3,7,2,9].getMin() // => 2
```
<a name="eachArrayLoopCallback"></a>

## eachArrayLoopCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| index | <code>number</code> | 


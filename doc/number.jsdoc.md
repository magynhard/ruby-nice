<a name="String"></a>

## Number
RubyNice version to add methods directly to the class by monkey patching

* [Number](#Number)
    * [.timesWithIndex(loop_function)](#Number+timesWithIndex) &rarr; [<code>Number</code>](#Number)
    * [.round()](#Number+round) &rarr; [<code>Number</code>](#Number)
    * [.floor()](#Number+floor) &rarr; [<code>Number</code>](#Number)
    * [.ceil()](#Number+ceil) &rarr; [<code>Number</code>](#Number)

<a name="Number+timesWithIndex"></a>

### number.timesWithIndex(loop_function) &rarr; [<code>Number</code>](#Number)
Loops n times

Breaks if returning false

**Returns**: [<code>Number</code>](#Number) - returns itself  

| Param | Type |
| --- | --- |
| loop_function | [<code>eachIndexLoopCallback</code>](#eachIndexLoopCallback) | 


**Example**
```js
(5).timesWithIndex((index) => {
         if(condition) return false;
         console.log(index);
     })
```
<a name="Number+round"></a>

### number.round() &rarr; [<code>Number</code>](#Number)
Wrapper for Math.round()

**Example**
```js
(5.6).round()
     => 6
```
<a name="Number+floor"></a>

### number.floor() &rarr; [<code>Number</code>](#Number)
Wrapper for Math.floor()

**Example**
```js
(5.7).floor()
     => 5
```
<a name="Number+ceil"></a>

### number.ceil() &rarr; [<code>Number</code>](#Number)
Wrapper for Math.ceil()

**Example**
```js
(5.1).ceil()
     => 6
```
<a name="value"></a>

## value(loop_function) &rarr; [<code>Number</code>](#Number)
Loops n times

Breaks if returning false

**Returns**: [<code>Number</code>](#Number) - returns itself  

| Param | Type |
| --- | --- |
| loop_function | [<code>eachIndexLoopCallback</code>](#eachIndexLoopCallback) | 


**Example**
```js
(5).timesWithIndex((index) => {
         if(condition) return false;
         console.log(index);
     })
```
<a name="value"></a>

## value() &rarr; [<code>Number</code>](#Number)
Wrapper for Math.round()

**Example**
```js
(5.6).round()
     => 6
```
<a name="value"></a>

## value() &rarr; [<code>Number</code>](#Number)
Wrapper for Math.ceil()

**Example**
```js
(5.1).ceil()
     => 6
```
<a name="value"></a>

## value() &rarr; [<code>Number</code>](#Number)
Wrapper for Math.floor()

**Example**
```js
(5.7).floor()
     => 5
```
<a name="eachIndexLoopCallback"></a>

## eachIndexLoopCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 


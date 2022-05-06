<a name="String"></a>

## File
File class port of ruby

For node js only, does not work inside a browser.

* [File](#File)
    * [.read(name, opt)](#File.read) &rarr; <code>string</code>
    * [.write(name, data, opt)](#File.write) &rarr; <code>string</code>

<a name="File.read"></a>

### File.read(name, opt) &rarr; <code>string</code>
Read file and return its content synchronously.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>String</code> |  | path to file |
| opt | <code>Object</code> |  |  |
| opt.encoding | <code>&#x27;utf8&#x27;</code> \| <code>&#x27;binary&#x27;</code> \| <code>&#x27;buffer&#x27;</code> | <code>&#x27;utf8&#x27;</code> |  |
| opt.length | <code>Number</code> |  |  |
| opt.offset | <code>Number</code> |  |  |

<a name="File.write"></a>

### File.write(name, data, opt) &rarr; <code>string</code>
Write into file synchronously.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>String</code> |  | path to file |
| data | <code>String</code> \| <code>Buffer</code> \| <code>TypedArray</code> \| <code>DataView</code> \| <code>Object</code> |  | data |
| opt | <code>Object</code> |  |  |
| opt.encoding | <code>&#x27;utf8&#x27;</code> \| <code>&#x27;binary&#x27;</code> \| <code>&#x27;buffer&#x27;</code> | <code>&#x27;utf8&#x27;</code> |  |
| opt.flag | [<code>FileWriteFlag</code>](#FileWriteFlag) | <code>&#x27;ws&#x27;</code> |  |

<a name="FileEncoding"></a>

## FileEncoding : <code>&#x27;utf8&#x27;</code> \| <code>&#x27;binary&#x27;</code> \| <code>&#x27;buffer&#x27;</code>
**Kind**: global typedef  
<a name="FileWriteFlag"></a>

## FileWriteFlag : <code>&#x27;rs+&#x27;</code> \| <code>&#x27;ws&#x27;</code> \| <code>&#x27;as&#x27;</code>
**Kind**: global typedef  

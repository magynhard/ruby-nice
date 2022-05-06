<a name="File"></a>

## File
File class port of ruby

For node js only, does not work inside a browser.

* [File](#File)
    * [.getBasename(file_name, suffix)](#File.getBasename)
    * [.getDirname(file_name)](#File.getDirname) &rarr; <code>String</code>
    * [.expandPath(file_name, dir_string)](#File.expandPath) &rarr; <code>String</code>
    * [.isDirectory(file_name)](#File.isDirectory) &rarr; <code>Boolean</code>
    * [.isExisting(file_name)](#File.isExisting) &rarr; <code>Boolean</code>
    * [.isFile(file_name)](#File.isFile) &rarr; <code>Boolean</code>
    * [.normalizePath(path)](#File.normalizePath) &rarr; <code>String</code>
    * [.read(file_name, opt)](#File.read) &rarr; <code>string</code>
    * [.readAsDataUri(file_name)](#File.readAsDataUri) &rarr; <code>String</code>
    * [.write(name, data, opt)](#File.write) &rarr; <code>string</code>

<a name="File.getBasename"></a>

### File.getBasename(file_name, suffix)
Get the last component of the given file name

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>String</code> |  |
| suffix | <code>String</code> | If suffix is given and present at the end of file_name, it is removed. If suffix is '.*', any extension will be removed. |


**Example**
```js
File.getBasename('/home/user/documents/letter.txt')
 // => 'letter.txt'
```

**Example**
```js
File.getBasename('/home/user/documents/letter.txt','.txt')
 // => 'letter'
```

**Example**
```js
File.getBasename('/home/user/documents/image.jpg','.*')
 // => 'image'
```
<a name="File.getDirname"></a>

### File.getDirname(file_name) &rarr; <code>String</code>
Get all components of the given file name except of the last one

| Param | Type |
| --- | --- |
| file_name | <code>String</code> | 


**Example**
```js
File.getDirname('/home/user/documents/letter.txt')
 // => '/home/user/documents'
```

**Example**
```js
File.getDirname('/home/user/documents/some_file_without_extension')
 // => '/home/user/documents'
```

**Example**
```js
File.getDirname('/home/user/documents/')
 // => '/home/user'
```
<a name="File.expandPath"></a>

### File.expandPath(file_name, dir_string) &rarr; <code>String</code>
Converts a pathname to an absolute pathname

**Returns**: <code>String</code> - absolute pathname  

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>String</code> | path of the file to expand |
| dir_string | <code>String</code> | optional starting point of the given path |

<a name="File.isDirectory"></a>

### File.isDirectory(file_name) &rarr; <code>Boolean</code>
Check if given file name exists and is a directory

**Returns**: <code>Boolean</code> - true if file exists and is a directory, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>String</code> | path of the file to check |

<a name="File.isExisting"></a>

### File.isExisting(file_name) &rarr; <code>Boolean</code>
Check if given file name exists

**Returns**: <code>Boolean</code> - true if file exists, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>String</code> | path of the file to check |

<a name="File.isFile"></a>

### File.isFile(file_name) &rarr; <code>Boolean</code>
Check if given file name exists and is a file

**Returns**: <code>Boolean</code> - true if file exists and is a file, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>String</code> | path of the file to check |

<a name="File.normalizePath"></a>

### File.normalizePath(path) &rarr; <code>String</code>
Normalize path and replace all back slashes to slashes

**Returns**: <code>String</code> - normalized path  

| Param | Type |
| --- | --- |
| path | <code>String</code> | 

<a name="File.read"></a>

### File.read(file_name, opt) &rarr; <code>string</code>
Read file and return its content synchronously

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| file_name | <code>String</code> |  | path to file |
| opt | <code>Object</code> |  |  |
| opt.encoding | <code>&#x27;utf8&#x27;</code> \| <code>&#x27;binary&#x27;</code> \| <code>&#x27;buffer&#x27;</code> \| <code>&#x27;base64&#x27;</code> | <code>&#x27;utf8&#x27;</code> |  |
| opt.length | <code>Number</code> |  |  |
| opt.offset | <code>Number</code> |  |  |

<a name="File.readAsDataUri"></a>

### File.readAsDataUri(file_name) &rarr; <code>String</code>
Read a file and return as data URI that can be embedded on HTML for example

**Returns**: <code>String</code> - base64 encoded data URI  

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>String</code> | path to file |

<a name="File.write"></a>

### File.write(name, data, opt) &rarr; <code>string</code>
Write into file synchronously.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>String</code> |  | path to file |
| data | <code>String</code> \| <code>Buffer</code> \| <code>TypedArray</code> \| <code>DataView</code> \| <code>Object</code> |  | data |
| opt | <code>Object</code> |  |  |
| opt.encoding | <code>&#x27;utf8&#x27;</code> \| <code>&#x27;binary&#x27;</code> \| <code>&#x27;buffer&#x27;</code> | <code>&#x27;utf8&#x27;</code> |  |
| opt.flag | <code>&#x27;rs+&#x27;</code> \| <code>&#x27;ws&#x27;</code> \| <code>&#x27;as&#x27;</code> | <code>&#x27;ws&#x27;</code> |  |


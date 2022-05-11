<a name="File"></a>

## File
File class port of ruby

For node js only, does not work inside a browser.

* [File](#File)
    * [.delete(file_name)](#File.delete) &rarr; <code>string</code>
    * [.getAbsolutePath(file_name, dir_string)](#File.getAbsolutePath) &rarr; <code>string</code>
    * [.getAccessTime(file_name)](#File.getAccessTime) &rarr; <code>Date</code>
    * [.getBasename(file_name, suffix)](#File.getBasename)
    * [.getBirthTime(file_name)](#File.getBirthTime) &rarr; <code>Date</code>
    * [.getDirname(file_name)](#File.getDirname) &rarr; <code>string</code>
    * [.getSize(file_name)](#File.getSize) &rarr; <code>number</code>
    * [.expandPath(file_name, dir_string, options, expand_user_dir)](#File.expandPath) &rarr; <code>string</code>
    * [.isDirectory(file_name)](#File.isDirectory) &rarr; <code>boolean</code>
    * [.isEmpty(file_name)](#File.isEmpty) &rarr; <code>boolean</code>
    * [.isExisting(file_name)](#File.isExisting) &rarr; <code>boolean</code>
    * [.isFile(file_name)](#File.isFile) &rarr; <code>boolean</code>
    * [.normalizePath(path)](#File.normalizePath) &rarr; <code>string</code>
    * [.read(file_name, opt)](#File.read) &rarr; <code>string</code>
    * [.rename(file_name, new_path)](#File.rename)
    * [.readAsDataUri(file_name)](#File.readAsDataUri) &rarr; <code>string</code>
    * [.write(name, data, opt)](#File.write) &rarr; <code>string</code>

<a name="File.delete"></a>

### File.delete(file_name) &rarr; <code>string</code>
Delete file synchronously

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> | path to file |

<a name="File.getAbsolutePath"></a>

### File.getAbsolutePath(file_name, dir_string) &rarr; <code>string</code>
Converts a pathname to an absolute pathname

'~' are not resolved.

**Returns**: <code>string</code> - absolute pathname  

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> | path of the file to expand |
| dir_string | <code>string</code> | optional starting point of the given path |

<a name="File.getAccessTime"></a>

### File.getAccessTime(file_name) &rarr; <code>Date</code>
Returns the last access time for the file as a Date object.

| Param | Type |
| --- | --- |
| file_name | <code>string</code> | 

<a name="File.getBasename"></a>

### File.getBasename(file_name, suffix)
Get the last component of the given file name

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> |  |
| suffix | <code>string</code> | If suffix is given and present at the end of file_name, it is removed. If suffix is '.*', any extension will be removed. |


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
<a name="File.getBirthTime"></a>

### File.getBirthTime(file_name) &rarr; <code>Date</code>
Returns the birth time for the file as a Date object.

| Param | Type |
| --- | --- |
| file_name | <code>string</code> | 

<a name="File.getDirname"></a>

### File.getDirname(file_name) &rarr; <code>string</code>
Get all components of the given file name except of the last one

| Param | Type |
| --- | --- |
| file_name | <code>string</code> | 


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
<a name="File.getSize"></a>

### File.getSize(file_name) &rarr; <code>number</code>
Get the size of the given file in bytes

**Returns**: <code>number</code> - size in bytes  

| Param | Type |
| --- | --- |
| file_name | <code>string</code> | 


**Example**
```js
File.getSize('myFile.txt');
 // => 12345
```
<a name="File.expandPath"></a>

### File.expandPath(file_name, dir_string, options, expand_user_dir) &rarr; <code>string</code>
Converts a pathname to an absolute pathname

'~' is resolved to the home directory, '~user' to the given users home directory.

**Returns**: <code>string</code> - absolute pathname  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| file_name | <code>string</code> |  | path of the file to expand |
| dir_string | <code>string</code> |  | optional starting point of the given path |
| options | <code>Object</code> |  |  |
| expand_user_dir | <code>boolean</code> | <code>true</code> |  |

<a name="File.isDirectory"></a>

### File.isDirectory(file_name) &rarr; <code>boolean</code>
Check if given file name exists and is a directory

**Returns**: <code>boolean</code> - true if file exists and is a directory, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> | path of the file to check |

<a name="File.isEmpty"></a>

### File.isEmpty(file_name) &rarr; <code>boolean</code>
Check if given file exists but has no content

**Returns**: <code>boolean</code> - true if file exists and has zero content, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> | path of the file to check |

<a name="File.isExisting"></a>

### File.isExisting(file_name) &rarr; <code>boolean</code>
Check if given file name exists

**Returns**: <code>boolean</code> - true if file exists, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> | path of the file to check |

<a name="File.isFile"></a>

### File.isFile(file_name) &rarr; <code>boolean</code>
Check if given file name exists and is a file

**Returns**: <code>boolean</code> - true if file exists and is a file, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> | path of the file to check |

<a name="File.normalizePath"></a>

### File.normalizePath(path) &rarr; <code>string</code>
Normalize path and replace all back slashes to slashes
and remove trailing slashes

**Returns**: <code>string</code> - normalized path  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="File.read"></a>

### File.read(file_name, opt) &rarr; <code>string</code>
Read file and return its content synchronously

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| file_name | <code>string</code> |  | path to file |
| opt | <code>Object</code> |  |  |
| opt.encoding | <code>&#x27;utf8&#x27;</code> \| <code>&#x27;binary&#x27;</code> \| <code>&#x27;buffer&#x27;</code> \| <code>&#x27;base64&#x27;</code> | <code>&#x27;utf8&#x27;</code> |  |
| opt.length | <code>Number</code> |  |  |
| opt.offset | <code>Number</code> |  |  |

<a name="File.rename"></a>

### File.rename(file_name, new_path)
Rename the given file

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> | path to original file |
| new_path | <code>string</code> | path to new file |

<a name="File.readAsDataUri"></a>

### File.readAsDataUri(file_name) &rarr; <code>string</code>
Read a file and return as data URI that can be embedded on HTML for example

**Returns**: <code>string</code> - base64 encoded data URI  

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> | path to file |

<a name="File.write"></a>

### File.write(name, data, opt) &rarr; <code>string</code>
Write into file synchronously.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | path to file |
| data | <code>String</code> \| <code>Buffer</code> \| <code>TypedArray</code> \| <code>DataView</code> \| <code>Object</code> |  | data |
| opt | <code>Object</code> |  |  |
| opt.encoding | <code>&#x27;utf8&#x27;</code> \| <code>&#x27;binary&#x27;</code> \| <code>&#x27;buffer&#x27;</code> | <code>&#x27;utf8&#x27;</code> |  |
| opt.flag | <code>&#x27;rs+&#x27;</code> \| <code>&#x27;ws&#x27;</code> \| <code>&#x27;as&#x27;</code> | <code>&#x27;ws&#x27;</code> |  |


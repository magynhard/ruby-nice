<a name="FileUtils"></a>

## FileUtils
FileUtils class port of ruby

For node js only, does not work inside a browser.

* [FileUtils](#FileUtils)
    * [.copy(src, dest, mode)](#FileUtils.copy)
    * [.cp()](#FileUtils.cp)
    * [.cp_r(src, dest, mode)](#FileUtils.cp_r)
    * [.mkdirP(file_name)](#FileUtils.mkdirP)
    * [.move(source, dest, options)](#FileUtils.move)
    * [.mv(source, dest, options)](#FileUtils.mv)
    * [.rmRf(file_name)](#FileUtils.rmRf)
    * [.rmR(file_name, opt)](#FileUtils.rmR)

<a name="FileUtils.copy"></a>

### FileUtils.copy(src, dest, mode)
Copy file

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> \| <code>Array.&lt;string&gt;</code> | path(s) to source file(s) |
| dest | <code>string</code> | path to destination |
| mode | <code>number</code> \| <code>fs.constants.COPYFILE\_EXCL</code> \| <code>fs.constants.COPYFILE\_FICLONE</code> \| <code>fs.constants.COPYFILE\_FICLONE\_FORCE</code> | specify behaviour of copy operation |

<a name="FileUtils.cp"></a>

### FileUtils.cp()
Alias for FileUtils.copy(...)
<a name="FileUtils.cp_r"></a>

### FileUtils.cp\_r(src, dest, mode)
Copies src to dest. If src is a directory, this method copies all its contents recursively. If dest is a directory, copies src to dest/src.

src can be a list of files.

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> \| <code>Array.&lt;string&gt;</code> | path(s) to source file(s) |
| dest | <code>string</code> | path to destination |
| mode | <code>number</code> \| <code>fs.constants.COPYFILE\_EXCL</code> \| <code>fs.constants.COPYFILE\_FICLONE</code> \| <code>fs.constants.COPYFILE\_FICLONE\_FORCE</code> | specify behaviour of copy operation |

<a name="FileUtils.mkdirP"></a>

### FileUtils.mkdirP(file_name)
Create directory recursively

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> \| <code>Array.&lt;string&gt;</code> | path(s) to create |

<a name="FileUtils.move"></a>

### FileUtils.move(source, dest, options)
Move files from source to dest

| Param | Type | Default |
| --- | --- | --- |
| source | <code>string</code> |  | 
| dest | <code>string</code> |  | 
| options | <code>Object</code> |  | 
| options.noop | <code>boolean</code> | <code>false</code> | 

<a name="FileUtils.mv"></a>

### FileUtils.mv(source, dest, options)
Move files from source to dest

| Param | Type | Default |
| --- | --- | --- |
| source | <code>string</code> |  | 
| dest | <code>string</code> |  | 
| options | <code>Object</code> |  | 
| options.noop | <code>boolean</code> | <code>false</code> | 

<a name="FileUtils.rmRf"></a>

### FileUtils.rmRf(file_name)
Deletes directory recursively including its contents, force=true

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> \| <code>Array.&lt;string&gt;</code> | path(s) to delete recursively |

<a name="FileUtils.rmR"></a>

### FileUtils.rmR(file_name, opt)
Deletes directory recursively including its contents

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> \| <code>Array.&lt;string&gt;</code> | path(s) to delete recursively |
| opt | <code>Object</code> | options |


<a name="FileUtils"></a>

## FileUtils
FileUtils class port of ruby

For node js only, does not work inside a browser.

* [FileUtils](#FileUtils)
    * [.copy(src, dest, mode)](#FileUtils.copy)
    * [.mkdirP(file_name)](#FileUtils.mkdirP)
    * [.rmRf(file_name, opt)](#FileUtils.rmRf)

<a name="FileUtils.copy"></a>

### FileUtils.copy(src, dest, mode)
Copy file

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

<a name="FileUtils.rmRf"></a>

### FileUtils.rmRf(file_name, opt)
Deletes directory recursively including its contents

| Param | Type | Description |
| --- | --- | --- |
| file_name | <code>string</code> \| <code>Array.&lt;string&gt;</code> | path(s) to delete recursively |
| opt | <code>Object</code> | options |


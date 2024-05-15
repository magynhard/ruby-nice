<a name="Dir"></a>

## Dir
Dir class port of ruby.

As JavaScript does not support bracket methods, we have a getter and setter instead.

For node js only, does not work inside a browser.

* [Dir](#Dir)
    * [.glob(pattern, options, base_path)](#Dir.glob) &rarr; <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.pwd()](#Dir.pwd) &rarr; <code>string</code>
    * [.chdir(dir)](#Dir.chdir)
    * [.delete(file_name, opts)](#Dir.delete)
    * [.isExisting(file_name)](#Dir.isExisting) &rarr; <code>boolean</code>

<a name="Dir.glob"></a>

### Dir.glob(pattern, options, base_path) &rarr; <code>Array.&lt;string&gt;</code> \| <code>null</code>
Expands pattern, which is a pattern string or an Array of pattern
strings, and returns an array containing the matching filenames.

| Param | Type | Description |
| --- | --- | --- |
| pattern | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  |
| options | <code>object</code> | of npm package 'glob' |
| base_path | <code>string</code> | shortcut of options.cwd with higher prio |

<a name="Dir.pwd"></a>

### Dir.pwd() &rarr; <code>string</code>
Returns the path to the current working directory of this process as a string.
<a name="Dir.chdir"></a>

### Dir.chdir(dir)
Changes the current working directory of the process to the given string.

When called without an argument, changes the directory to the value of the
environment variable HOME, or LOGDIR or the operating systems home directory by API.
**Throws**:

- <code>Error</code> if directory can not be changed


| Param | Type |
| --- | --- |
| dir | <code>string</code> | 

<a name="Dir.delete"></a>

### Dir.delete(file_name, opts)
Deletes the named directory.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| file_name | <code>string</code> |  |  |
| opts | <code>Object</code> |  |  |
| opts.recursive | <code>boolean</code> | <code>false</code> | If true, perform a recursive directory removal. In recursive mode, operations are retried on failure |
| opts.max_retries | <code>boolean</code> | <code>0</code> | If an EBUSY, EMFILE, ENFILE, ENOTEMPTY, or EPERM error is encountered, Node.js retries the operation with a linear backoff wait of retryDelay milliseconds longer on each try. This option represents the number of retries. This option is ignored if the recursive option is not true |
| opts.retry_delay | <code>boolean</code> | <code>100</code> | The amount of time in milliseconds to wait between retries. This option is ignored if the recursive option is not true |

<a name="Dir.isExisting"></a>

### Dir.isExisting(file_name) &rarr; <code>boolean</code>
Returns true if the named file is a directory, false otherwise.

| Param | Type |
| --- | --- |
| file_name | <code>string</code> | 


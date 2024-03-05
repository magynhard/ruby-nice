<a name="System"></a>

## System
'system' and `execute` port of ruby.

As JavaScript does not support back tick run, we have a method for that.

For node js only, does not work inside a browser.

* [System](#System)
    * [.run(command)](#System.run) &rarr; <code>string</code>
    * [.system(command)](#System.system) &rarr; <code>number</code>
    * [.exec(command)](#System.exec) &rarr; <code>Object</code>
    * [.execDetached(command)](#System.execDetached) &rarr; <code>Object</code>
    * [.getUserName()](#System.getUserName) &rarr; <code>string</code>

<a name="System.run"></a>

### System.run(command) &rarr; <code>string</code>
Run a system command synchronously and return the output (stdout/stderr).

| Param | Type |
| --- | --- |
| command | <code>string</code> | 

<a name="System.system"></a>

### System.system(command) &rarr; <code>number</code>
Run a system command synchronously and return the return code.

| Param | Type |
| --- | --- |
| command | <code>string</code> | 

<a name="System.exec"></a>

### System.exec(command) &rarr; <code>Object</code>
Run a system command synchronously and return the child process Object.

**Returns**: <code>Object</code> - child process object  

| Param | Type |
| --- | --- |
| command | <code>string</code> | 

<a name="System.execDetached"></a>

### System.execDetached(command) &rarr; <code>Object</code>
Start a system command asynchronously and detach the process from the main process and return the child process Object.

**Returns**: <code>Object</code> - child process object  

| Param | Type |
| --- | --- |
| command | <code>string</code> | 

<a name="System.getUserName"></a>

### System.getUserName() &rarr; <code>string</code>
Get the current user name.

Fist checks for USER or USERNAME environment variable, after using operating system API.

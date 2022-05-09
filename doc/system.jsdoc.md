<a name="System"></a>

## System
'system' and `execute` port of ruby.

As JavaScript does not support back tick run, we have a method for that.

For node js only, does not work inside a browser.

* [System](#System)
    * [.run(command)](#System.run) &rarr; <code>string</code>
    * [.system(command)](#System.system) &rarr; <code>number</code>

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


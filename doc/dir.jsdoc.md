<a name="Dir"></a>

## Dir
Dir class port of ruby.

As JavaScript does not support bracket methods, we have a getter and setter instead.

For node js only, does not work inside a browser.
<a name="Dir.glob"></a>

### Dir.glob(pattern, options, base_path) &rarr; <code>Array.&lt;string&gt;</code> \| <code>null</code>
Expands pattern, which is a pattern string or an Array of pattern
strings, and returns an array containing the matching filenames.

| Param | Type | Description |
| --- | --- | --- |
| pattern | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  |
| options | <code>object</code> | of npm package 'glob' |
| base_path | <code>string</code> | shortcut of options.cwd with higher prio |


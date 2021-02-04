# Svelte Color Picker [\[Demo Site\]](https://minorin22.github.io/svelte-color-picker/)
The fork of [Svelte Color Picker](https://github.com/efeskucuk/svelte-color-picker).

Supporting Two way data binding. Written by TypeScript and SCSS.

## Installation

With npm
```sh
$ cd yourSvelteProject
$ npm i minorin22/svelte-color-picker
```

## Usage
In your component :
```jsx
<script>
import HsvPicker from 'svelte-color-picker/src/HsvPicker.svelte';

function colorCallback(rgba) {
	console.log(rgba.detail)
}
</script>

<HsvPicker on:colorChange={colorCallback} startColor={"#FBFBFB"}/>
```


## Components

Svelte Color Picker currently has one type of colorpicker.

#### \</HsvPicker>
| Props | Value Type | Use |
| ------ | ------ | ------ |
| on:colorChange | function | Given function gets called every time color changes |
| startColor | string | Initializes color picker with the value (hexadecimal without alpha). |

License
----

MIT

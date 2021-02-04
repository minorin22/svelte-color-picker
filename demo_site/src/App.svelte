<script lang="ts">
import HsvPicker from 'svelte-color-picker/src/HsvPicker.svelte';

</script>

<main>
  <span id="forkongithub"><a href="https://github.com/minorin22/svelte-color-picker">Fork me on GitHub</a></span>
  <h1>Svelte Color Picker</h1>
  <HsvPicker></HsvPicker>
</main>

<style lang="scss" global>
body {
  background: #eaeaea;
  font-family: sans-serif;
  h1 {
    text-align: center;
  }
  .toolArea {
    margin: auto;
  }
  #forkongithub a{background:#E0A7A6;color:#fff;text-decoration:none;font-family:arial,sans-serif;text-align:center;font-weight:bold;padding:5px 40px;font-size:1rem;line-height:2rem;position:relative;transition:0.5s;}#forkongithub a:hover{background:#E27371;color:#fff;}#forkongithub a::before,#forkongithub a::after{content:"";width:100%;display:block;position:absolute;top:1px;left:0;height:1px;background:#fff;}#forkongithub a::after{bottom:1px;top:auto;}@media screen and (min-width:800px){#forkongithub{position:fixed;display:block;top:0;right:0;width:200px;overflow:hidden;height:200px;z-index:9999;}#forkongithub a{width:200px;position:absolute;top:60px;right:-60px;transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);box-shadow:4px 4px 10px rgba(0,0,0,0.2);}}
}
</style>

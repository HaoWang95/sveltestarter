<script lang="ts">
    import Timer from "./Timer.svelte";
    let color: string = "green";
</script>

<div class="ColorPicker">
    <h2 id="colorString" style="color: {color}">
        Color picker component, the color is {color}
    </h2>
    Enter a color:<input type="text" name="color" bind:value={color} />
    Choose color :
    <input type="color" name="colorSelector" bind:value={color} />
</div>
<Timer timerColor={color} />

<style>
</style>

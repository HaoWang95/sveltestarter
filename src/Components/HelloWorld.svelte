<script lang="ts">
    let authorName: string = "Alan";
    let content: string = "This is the first component in Svelte";
    let isUpperCase: boolean = false;
    let isClickable: boolean = true;
    const btnOnclick = () => {
        isUpperCase = !isUpperCase;
    };
    $: reactiveContent = isUpperCase ? content.toUpperCase() : content;
    $: reactiveName = isUpperCase ? authorName.toUpperCase() : authorName;
    $: reactiveIsClickable = content.length > 0 ? false : true;
</script>

<div id="HelloWorld">
    <p>This is a test string from {reactiveName}, {reactiveContent}</p>
    {#if isUpperCase == true}
        <input
            required={false}
            placeholder="Uppercase text binding"
            bind:value={content}
        />
        <button on:click={btnOnclick} disabled={reactiveIsClickable}
            >LowerCase</button
        >
    {:else}
        <input
            required={false}
            placeholder="Uppercase text binding"
            bind:value={content}
        />
        <button on:click={btnOnclick} disabled={reactiveIsClickable}
            >UpperCase</button
        >
    {/if}
</div>

<style>
    p {
        color: cadetblue;
        font-family: "Courier New", Courier, monospace;
        font-size: 2em;
    }
</style>

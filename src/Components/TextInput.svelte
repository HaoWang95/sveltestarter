<script lang="ts">
    let hint: string = "Enter";
</script>

<div>
    <input
        id="TextInput"
        type="text"
        required={false}
        placeholder={hint}
        bind:value={hint}
    />
</div>

<style>
    #TextInput {
        color: crimson;
    }
</style>

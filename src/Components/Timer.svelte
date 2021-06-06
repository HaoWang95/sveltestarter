<script lang="ts">
    export let timerColor: string = "";
    let currentTime: string = "";
    setInterval(() => {
        currentTime = new Date().toLocaleTimeString();
    }, 1000);
</script>

<footer>
    <span style="color: {timerColor}">{currentTime}</span>
</footer>

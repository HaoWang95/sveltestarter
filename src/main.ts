//@ts-ignore
import App from './Components/App.svelte';

const app = new App({
	target: document.body,
	props: {
		greeting: `I'm Alan`
	}
});

export default app;
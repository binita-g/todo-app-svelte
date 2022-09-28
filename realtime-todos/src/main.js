import App from './App.svelte';

// Set up Firebase/Svelte app
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
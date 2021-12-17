import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Dunia',
		title: 'Home page'
	}
});

export default app;
import App from './App.svelte';
import { dataSkill, dataTools, dataPortfolio } from '../public/assets/js/data'

const app = new App({
	target: document.body,
	props: {
		title: 'Home page',
		dataSkill,
		dataTools,
		dataPortfolio
	}
});

export default app;
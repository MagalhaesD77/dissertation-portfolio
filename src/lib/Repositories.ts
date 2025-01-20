import { base } from '$app/paths';

const repositories = [
	{
		title: 'Portfolio',
		technologies: ['SvelteKit', 'TailwindCSS'],
		description:
			"This repo contains the code for my personal portfolio, which will be used to showcase my activities during the semester for PD/E and aggregate the repos of my master's thesis.",
		url: 'https://github.com/MagalhaesD77/dissertation-portfolio'
	},
	{
		title: 'Dissertation Proposal',
		technologies: ['LaTeX'],
		description:
			'This repo contains the code for my dissertation proposal, which will be used to present the proposal for my master\'s thesis.',
		url: 'https://github.com/MagalhaesD77/master-thesis-proposal',
		file: `${base}/files/proposal.pdf`
	},
	{
		title: 'Sprint 1',
		technologies: [],
		description:
			'Slides presented during the first sprint of PD/E.',
		file: `${base}/files/sprint_1.pdf`
	},
	{
		title: 'Sprint 2',
		technologies: [],
		description:
			'Slides presented during the second sprint of PD/E.',
		file: `${base}/files/sprint_2.pdf`
	},
	{
		title: 'Sprint 3',
		technologies: [],
		description:
			'Slides presented during the third sprint of PD/E.',
		file: `${base}/files/sprint_3.pdf`
	},
	{
		title: 'Sprint 4',
		technologies: [],
		description:
			'Slides presented during the fourth sprint of PD/E.',
		file: `${base}/files/sprint_4.pdf`
	},
];

export default repositories;

<script>
	import repositories from '$lib/Repositories';
</script>

<svelte:head>
	<title>Repositories</title>
</svelte:head>

<div class="projectContainer">
	<div class="repositories">
		<h1>Repositories</h1>
		<p class="note">
			Note: The following repositories are aglomerated in a single Main Repository on <a href="https://github.com/MagalhaesD77/master-thesis" class="linkRepo" target="_blank">Master Thesis Repository</a>.
		</p>
		{#each repositories as project}
			<div class="project">
				<div class="header">
					<h2>
						{project.title}
					</h2>
					<div class="techsContainer">
						Technologies:
						<div class="techs">
							{#each project.technologies as tech}
								<div>{tech}</div>
							{/each}
						</div>
					</div>
				</div>
				<p>
					{project.description}
				</p>
				<a href={project.url} target="_blank" rel="noreferrer">
					<div class="button">Go To Repository</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.linkRepo {
		color: #66ccff;
		text-decoration: none;
		font-weight: bold;
		transition: color 0.3s ease;
	}

	.linkRepo:hover {
		color: #ffffff;
		text-decoration: underline;
	}

	.projectContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	.note {
		opacity: 0.5;
		margin: 0;
		max-width: 900px;
		text-align: left;
	}

	a {
		text-decoration: none;
	}

	.projectContainer .repositories {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}

	h1 {
		font-weight: 700;
		text-align: start;
	}

	h2 {
		display: flex;
		margin: 0;
	}

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: #111;
		padding: 2rem;
		width: 100%;
		border-radius: 5px;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
	}

	.project p {
		font-weight: 100;
		color: #708090;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		word-break: break-all;
		hyphens: auto;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.repositories {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.techs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.techs > div {
		margin: 0 0 0 10px;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border: 2px solid white;
		padding: 10px;
	}

	@media (min-width: 900px) {
		.projectContainer {
			padding: 0;
		}
		.repositories > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}

		.repositories {
			grid-template-columns: 1fr;
		}

		.repositories .project {
			min-height: 200px;
		}
		.button {
			max-width: 200px;
		}
	}

	@media (min-width: 600px) {
		.repositories {
			grid-template-columns: 1fr;
		}
	}
</style>

<script>
</script>

<svelte:head>
	<title>Diogo Magalhães — About</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			Hello! My name is Diogo Magalhães, I am from Portugal and I'm currently pursuing my Master's degree in Software Engineering at University of Aveiro.

			I am currently working on my thesis project, which is focused on low-latency computing solutions focusing on Multi-access Edge Computing (MEC), a paradigm designed to bring cloud computing closer to the network's edge. More specifically, this thesis will continue the work related to an open-source MEC orchestrator, particularly realizing the automatic migration of applications between different MEC clusters. This functionality will, among others, fit multi-domain use cases and cloud-edge computing scenarios.
		</p>

		<div>
			<h2 class="supervisor-header">Supervisors:</h2>
			<p class="supervisor-info">
				Supervisor: Prof. Diogo Gomes (<a class="mailTo" href="mailto:dgomes@ua.pt">dgomes@ua.pt</a>)
				<br />
				Collaborator: Pedro Escaleira (<a class="mailTo" href="mailto:escaleira@ua.pt">escaleira@ua.pt</a>)
				<br />
				Co-Supervisor: Prof. Rui L. Aguiar (<a class="mailTo" href="mailto:ruilaa@ua.pt">ruilaa@ua.pt</a>)
			</p>
		</div>

	</main>
</div>

<style>
	.mailTo {
		color: #66ccff;
		text-decoration: none;
		font-weight: bold;
		transition: color 0.3s ease;
	}

	.mailTo:hover {
		color: #ffffff;
		text-decoration: underline;
	}

	.supervisor-header {
		margin-bottom: 0.5rem; /* Adjust as needed */
	}

	.supervisor-info {
		margin-top: 0; /* You can also set this to a smaller value if necessary */
	}

	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}
</style>

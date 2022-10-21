<template>
	<div>
		<!-- Nav bar -->
		<nav class="navbar navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">
					<img src="./assets/img/class.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
					Control de Estudiantes
				</a>
				<ul class="nav navbar-nav flex-row float-right">
					<li class="nav-item">
						<router-link class="nav-link pe-3" to="/">Inicio</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link pe-3" to="/create-student">Crear</router-link>
					</li>
				</ul>
			</div>
		</nav>
		<!-- Router view -->
		<div class="container mt-4">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
    @import './assets/styles/style.css';
</style>

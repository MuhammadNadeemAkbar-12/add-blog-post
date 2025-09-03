<template>
	<div class="dashboard-bg d-flex">
		<SidebarMenu />
		<div class="flex-grow-1">
			<NavbarMenu :userName="userName" />
			<div class="dashboard-content">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
	import SidebarMenu from "../components/SidebarMenu.vue";
	import NavbarMenu from "../components/NavbarMenu.vue";

	export default {
		name: "UserDashboard",
		components: { SidebarMenu, NavbarMenu },
		data() {
			return {
				userName: localStorage.getItem("userName") || "User",
			};
		},
	};
</script>

<style scoped>
	.dashboard-bg {
		background: linear-gradient(135deg, #f1f5f9 0%, #e0e7ef 100%);
		min-height: 100vh;
	}
	.dashboard-content {
		min-height: calc(100vh - 70px);
		background: #fff;
		border-radius: 18px;
		box-shadow: 0 4px 24px rgba(30, 64, 175, 0.07);
		margin: 32px 32px 0 32px;
		padding: 36px;
	}
	@media (max-width: 991.98px) {
		.dashboard-content {
			margin: 12px 6px 0 6px;
			padding: 16px;
			border-radius: 8px;
		}
	}
</style>

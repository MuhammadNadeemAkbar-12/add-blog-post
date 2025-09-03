<template>
	<div>
		<h4 class="mb-3">All Logged In Users</h4>
		<table class="table table-bordered table-striped">
			<thead>
				<tr>
					<th>#</th>
					<th>Username</th>
					<th>Email</th>
					<th style="width: 120px">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user, i) in users" :key="i">
					<td>{{ i + 1 }}</td>
					<td>{{ user.username }}</td>
					<td>{{ user.email }}</td>
					<td>
						<button
							class="btn btn-sm btn-primary me-2"
							@click="openEdit(user, i)">
							Edit
						</button>
						<button class="btn btn-sm btn-danger" @click="openDelete(user, i)">
							Delete
						</button>
					</td>
				</tr>
				<tr v-if="users.length === 0">
					<td colspan="4" class="text-center text-muted">No users found</td>
				</tr>
			</tbody>
		</table>

		<!-- Edit Modal -->
		<div v-if="showEditModal" class="modal-backdrop">
			<div class="modal-dialog">
				<div class="modal-content p-3">
					<h5>Edit User</h5>
					<input
						v-model="editUser.username"
						class="form-control mb-2"
						placeholder="Username" />
					<input
						v-model="editUser.email"
						class="form-control mb-2"
						placeholder="Email" />
					<div class="d-flex justify-content-end">
						<button
							class="btn btn-secondary me-2"
							@click="showEditModal = false">
							Cancel
						</button>
						<button class="btn btn-primary" @click="saveEdit">Save</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Delete Confirm Modal -->
		<div v-if="showDeleteModal" class="modal-backdrop">
			<div class="modal-dialog">
				<div class="modal-content p-3">
					<h5>Are you sure you want to delete this user?</h5>
					<div class="d-flex justify-content-end">
						<button
							class="btn btn-secondary me-2"
							@click="showDeleteModal = false">
							Cancel
						</button>
						<button class="btn btn-danger" @click="confirmDelete">
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "UserTable",
		data() {
			return {
				users: [],
				showEditModal: false,
				showDeleteModal: false,
				editUser: { username: "", email: "" },
				editIndex: null,
				deleteIndex: null,
			};
		},
		mounted() {
			let allUsers = [];
			try {
				allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
			} catch (e) {
				// ignore JSON parse error
			}
			if (allUsers.length === 0) {
				const singleUser = JSON.parse(
					localStorage.getItem("userAllData") || "{}"
				);
				if (singleUser.username && singleUser.email) {
					allUsers = [singleUser];
				}
			}
			this.users = allUsers;
		},
		methods: {
			openEdit(user, idx) {
				this.editUser = { ...user };
				this.editIndex = idx;
				this.showEditModal = true;
			},
			saveEdit() {
				if (!this.editUser.username || !this.editUser.email) return;
				this.$set(this.users, this.editIndex, { ...this.editUser });
				localStorage.setItem("allUsers", JSON.stringify(this.users));
				this.showEditModal = false;
				this.$emit("user-updated", {
					user: this.editUser,
					index: this.editIndex,
				});
			},
			openDelete(user, idx) {
				this.deleteIndex = idx;
				this.showDeleteModal = true;
			},
			confirmDelete() {
				this.users.splice(this.deleteIndex, 1);
				localStorage.setItem("allUsers", JSON.stringify(this.users));
				this.showDeleteModal = false;
				this.$emit("user-deleted", this.deleteIndex);
			},
		},
	};
</script>

<style scoped>
	.modal-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.2);
		z-index: 1050;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

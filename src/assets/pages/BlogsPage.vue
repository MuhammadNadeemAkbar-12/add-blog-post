<template>
	<div class="container py-4">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h2>Blogs</h2>
			<button class="btn btn-primary" @click="openAddModal">Add Blog</button>
		</div>
		<div class="mb-3">
			<input
				type="text"
				class="form-control"
				v-model="search"
				placeholder="Search blogs..." />
		</div>
		<div class="row">
			<div class="col-md-4 mb-4" v-for="blog in filteredBlogs" :key="blog.id">
				<div class="card h-100">
					<img
						v-if="blog.image"
						:src="blog.image"
						class="card-img-top"
						style="max-height: 180px; object-fit: cover" />
					<div class="card-body">
						<h5 class="card-title">{{ blog.title }}</h5>
						<p class="card-text" style="max-height: 60px; overflow: hidden">
							{{ blog.content }}
						</p>
					</div>
					<div class="card-footer bg-white border-0 d-flex justify-content-end">
						<button
							class="btn btn-sm btn-primary me-2"
							@click="openEditModal(blog)">
							Edit
						</button>
						<button class="btn btn-sm btn-danger" @click="confirmDelete(blog)">
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Add/Edit Modal -->
		<div v-if="showModal" class="modal-backdrop">
			<div class="modal-dialog">
				<div class="modal-content p-3">
					<h5>{{ editMode ? "Edit Blog" : "Add Blog" }}</h5>
					<input
						v-model="modalBlog.title"
						class="form-control mb-2"
						placeholder="Title" />
					<textarea
						v-model="modalBlog.content"
						class="form-control mb-2"
						placeholder="Content"></textarea>
					<input type="file" class="form-control mb-2" @change="onFileChange" />
					<img
						v-if="modalBlog.image"
						:src="modalBlog.image"
						class="img-fluid mb-2"
						style="max-height: 120px" />
					<div class="d-flex justify-content-end">
						<button class="btn btn-secondary me-2" @click="closeModal">
							Cancel
						</button>
						<button class="btn btn-primary" @click="saveBlog">
							{{ editMode ? "Update" : "Add" }}
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Delete Confirm Modal -->
		<div v-if="showDelete" class="modal-backdrop">
			<div class="modal-dialog">
				<div class="modal-content p-3">
					<h5>Are you sure you want to delete?</h5>
					<div class="d-flex justify-content-end">
						<button class="btn btn-secondary me-2" @click="showDelete = false">
							Cancel
						</button>
						<button class="btn btn-danger" @click="deleteBlog">Delete</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				blogs: [],
				search: "",
				showModal: false,
				showDelete: false,
				editMode: false,
				modalBlog: { id: null, title: "", content: "", image: "" },
				deleteBlogId: null,
			};
		},
		computed: {
			filteredBlogs() {
				if (!this.search) return this.blogs;
				const s = this.search.toLowerCase();
				return this.blogs.filter(
					(b) =>
						b.title.toLowerCase().includes(s) ||
						b.content.toLowerCase().includes(s)
				);
			},
		},
		mounted() {
			this.blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
		},
		methods: {
			openAddModal() {
				this.editMode = false;
				this.modalBlog = { id: null, title: "", content: "", image: "" };
				this.showModal = true;
			},
			openEditModal(blog) {
				this.editMode = true;
				this.modalBlog = { ...blog };
				this.showModal = true;
			},
			closeModal() {
				this.showModal = false;
			},
			saveBlog() {
				if (!this.modalBlog.title || !this.modalBlog.content) return;
				if (this.editMode) {
					const idx = this.blogs.findIndex((b) => b.id === this.modalBlog.id);
					if (idx !== -1) this.blogs.splice(idx, 1, { ...this.modalBlog });
					this.showModal = false; // Edit ke baad modal band ho
				} else {
					this.modalBlog.id = Date.now();
					this.blogs.push({ ...this.modalBlog });
					this.showModal = false; // Add ke baad bhi modal band ho
				}
				localStorage.setItem("blogs", JSON.stringify(this.blogs));
			},
			confirmDelete(blog) {
				this.deleteBlogId = blog.id;
				this.showDelete = true;
			},
			deleteBlog() {
				this.blogs = this.blogs.filter((b) => b.id !== this.deleteBlogId);
				localStorage.setItem("blogs", JSON.stringify(this.blogs));
				this.showDelete = false;
			},
			onFileChange(e) {
				const file = e.target.files[0];
				if (!file) return;
				const reader = new FileReader();
				reader.onload = (e) => {
					this.modalBlog.image = e.target.result;
				};
				reader.readAsDataURL(file);
			},
		},
	};
</script>

<style scoped>
	.modal-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 1050;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

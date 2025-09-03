<template>
  <nav class="navbar navbar-expand navbar-light bg-white shadow-sm px-4 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <span class="navbar-brand mb-0 h1">Dashboard</span>
    </div>
    <div class="d-flex align-items-center">
      <div class="user-details text-end ms-3">
        <span class="user-name fw-semibold mb-1">{{ userName }}</span>
        <span class="logout-link mt-1" @click="logout">Logout</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMenu',
  props: ['userName'],
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.user-details {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.user-name {
  color: #0d6efd;
  font-size: 1rem;
  letter-spacing: 0.5px;
  padding: 2px 10px;
  border-radius: 4px;
}
.logout-link {
  color: #dc3545;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 2px 10px;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
  margin-top: 2px;
  display: inline-block;
}
.logout-link:hover {
  background: #ffeaea;
  color: #a71d2a !important;
  text-decoration: underline;
}
</style>
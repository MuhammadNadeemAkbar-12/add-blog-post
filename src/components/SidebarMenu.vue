<template>
  <div class="sidebar d-flex flex-column p-4" style="width: 220px; min-height: 100vh;">
    <h2 class="mb-4 fw-bold" style="font-size: 2rem;">Sidebar</h2>
    <ul class="nav nav-pills flex-column mb-auto">
      
      <li class="nav-item mb-2">
        <router-link to="/UserDashboard/users" class="nav-link" active-class="active">Users</router-link>
      </li>
      <li class="nav-item mb-2">
        <router-link to="/UserDashboard/blogs" class="nav-link" active-class="active">Blogs</router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name:"SidebarMenu"

}

</script>
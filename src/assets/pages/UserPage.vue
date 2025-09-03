<template>
  <div>
    <h2>Users Management</h2>
    <UserTable />
  </div>
</template>

<script>
import UserTable from '../../components/UserTable.vue'
export default {
  name:"UserPage",
  components: { UserTable }
}
</script>
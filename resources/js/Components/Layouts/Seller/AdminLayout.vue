<script setup>
import AdminSidebar from "./AdminSidebar.vue"
import AdminHeader from "./AdminHeader.vue"
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <AdminSidebar />

    <main class="flex-1 bg-gray-100">
      <AdminHeader />

      <div class="p-6">
        <slot />
      </div>
    </main>
  </div>
</template>


<style lang="scss" scoped>
</style>

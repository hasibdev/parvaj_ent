<script setup>
import SellerSidebar from "./SellerSidebar.vue"
import SellerHeader from "./SellerHeader.vue"
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <SellerSidebar />

    <main class="flex-1 bg-gray-100">
      <SellerHeader />

      <div class="p-6">
        <slot />
      </div>
    </main>
  </div>
</template>


<style lang="scss" scoped>
</style>

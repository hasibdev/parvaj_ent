<script setup>
import { usePage } from '@inertiajs/inertia-vue3'

const { props } = usePage();
</script>

<script>
import AdminLayout from '@/Components/Layouts/Admin/AdminLayout'
export default {
  layout: AdminLayout
}
</script>

<template>
  <div class="p-4">
    <pre>{{ props }}</pre>

    <Head title="Dashboard" />
    <h1 class="text-red-500">Inertia Render!</h1>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script setup>
import { usePage } from '@inertiajs/inertia-vue3'

const { props } = usePage();
</script>

<script>
import SellerLayout from '@/Components/Layouts/Seller/SellerLayout'
export default {
  layout: SellerLayout
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

<script setup>
import { NIcon, NButton } from 'naive-ui'
import { Add as AddIcon } from '@vicons/ionicons5'

</script>

<script>
import AdminLayout from '@/Components/Layouts/Admin/AdminLayout'
export default {
  layout: AdminLayout
}
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-3xl">Sellers List</h1>

      <Link href="/admin/sellers/create">
      <n-button size="large" type="primary">
        <template #icon>
          <n-icon>
            <add-icon />
          </n-icon>
        </template>

        Create New
      </n-button>
      </Link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>

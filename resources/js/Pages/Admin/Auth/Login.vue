<script setup>
import { reactive } from "vue"
import { NInput, NButton } from 'naive-ui'

import { useForm } from '@inertiajs/inertia-vue3'

const form = useForm({
  identifier: 'admin@test.com',
  password: '123456'
})

const login = () => {
  form.post('/admin/login', {
    onSuccess: () => {
      form.reset()
    }
  })
}
</script>

<script>
import EmptyLayout from '@/Components/Layouts/EmptyLayout'
export default {
  layout: EmptyLayout
}
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="card">
      <h1 class="text-xl mb-4 text-center">Welcome Back</h1>

      <form @submit.prevent="login">
        <n-input v-model:value="form.identifier" size="large" type="email" placeholder="Email" class="mb-3" />
        <n-input v-model:value="form.password" size="large" type="password" placeholder="Password" show-password-on="mousedown" class="mb-4" />

        <div class="flex justify-end">
          <n-button attr-type="submit" type="success" :loading="form.processing" :disabled="form.processing" size="large" class="text-lg bg-primary">
            Login
          </n-button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
   @apply shadow p-6 bg-white rounded;
   width: 500px;
}
</style>

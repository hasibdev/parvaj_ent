<script setup>
import { reactive } from "vue"
import { NInput, NButton } from 'naive-ui'

import InputField from "@/Components/Form/InputField.vue"

const form = reactive({
  email: "",
  password: "",
})
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
      <h1 class="text-xl mb-4">Signin</h1>

      <form>
        <n-input v-model:value="form.email" size="large" type="email" placeholder="Email" class="mb-3" />
        <n-input v-model:value="form.password" size="large" type="password" placeholder="Password" show-password-on="mousedown" class="mb-3" />

        <div class="flex justify-end">
          <n-button attr-type="submit">
            Login
          </n-button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
   @apply shadow p-6;
   width: 500px;
}
</style>

<script setup>
import { reactive } from "vue"

import InputField from "@/Components/Form/InputField.vue"

const form = reactive({
   email: "",
   password: "",
})
</script>
<template>
   <div class="flex justify-center">
      <div class="card mt-60">
         <h1>Signin</h1>

         <form>
            <InputField v-model="form.email" />
            <InputField v-model="form.password" type="password" />
         </form>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.card {
   @apply shadow;
   width: 380px;
}
</style>

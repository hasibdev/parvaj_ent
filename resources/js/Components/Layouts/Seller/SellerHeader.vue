<script setup>
import Hamburger from '@/Components/icons/Hamburger'
import BellIcon from '@/Components/icons/BellIcon'

</script>
<template>
  <div class="default__header bg-white h-16 flex items-center">
    <Hamburger class="ml-3" />

    <div class="ml-auto mr-3 flex items-center">

      <!-- Notification Icon -->
      <div class="mr-4">
        <BellIcon />
      </div>

      <!-- Profile Image -->
      <div>
        <img src="@/images/profile.png" class="w-9" alt="Profile">
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
// .default__header {
//   // background-color: #ececf1;
// }
</style>

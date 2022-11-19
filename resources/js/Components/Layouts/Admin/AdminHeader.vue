<script setup>
import { h } from 'vue'
import { NIcon, NDropdown } from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'

import Hamburger from '@/Components/icons/Hamburger'
import BellIcon from '@/Components/icons/BellIcon'
import { Inertia } from '@inertiajs/inertia'

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const options = [
  {
    label: 'Profile',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: 'Edit Profile',
    key: 'editProfile',
    icon: renderIcon(EditIcon)
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
]

const handleSelect = async (key) => {
  if (key === 'logout') {
    Inertia.post('/admin/logout')
  }
}

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
        <n-dropdown :options="options" @select="handleSelect">
          <img src="@/images/profile.png" class="w-9 cursor-pointer" alt="Profile">
        </n-dropdown>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
// .default__header {
//   // background-color: #ececf1;
// }
</style>

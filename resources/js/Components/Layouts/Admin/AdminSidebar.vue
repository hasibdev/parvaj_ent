<script setup>
import { faChartLine, faGrip, faCubesStacked } from "@fortawesome/free-solid-svg-icons"
import SidebarMenu from "../../Base/SidebarMenu"

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: faChartLine,
    exactActive: true,
  },
  {
    title: "Sellers",
    icon: faGrip,
    href: "/admin/sellers",
  },

]
</script>

<template>
  <div class="sidebar__wrapper w-72 text-white">
    <!-- Header -->
    <div class="sidebar__header h-16 flex flex-col justify-center items-center">
      <p class="text-center">Header</p>
    </div>

    <!-- Sidebar Menu -->
    <div class="sidebar__menu">
      <SidebarMenu :menu="menuItems" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar__wrapper {
   background-color: #333547;
   color: #b4c9de;

   .sidebar__header {
      background-color: #272b35;
   }
}
</style>

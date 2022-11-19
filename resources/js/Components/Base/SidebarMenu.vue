<script setup>
import { ref } from "vue"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import TrasitionExpand from "./TrasitionExpand.vue"

const props = defineProps({
  menu: {
    type: Array,
    required: true,
  },
})

// console.log(window.location.pathname.star)

const getVisible = (item) => {
  if (item.hasOwnProperty("children")) {
    const routes = item.children.map((child) => child.href)

    return routes.includes(window.location.pathname)
  }

  return false
}

const menuMod = props.menu.map((m, i) => ({
  i,
  ...m,
  ...(m.hasOwnProperty("children") && {
    children: m.children.map((child) => ({
      ...child,
      active: window.location.pathname === child.href,
    })),
  }),
  visible: getVisible(m),
  active: window.location.pathname === m.href,
}))

let menuItems = ref(menuMod)

const handleToggle = (item) => {
  menuItems.value = menuItems.value.map((m) => ({
    ...m,
    visible: item.visible ? false : item.i === m.i,
  }))
}
</script>

<template>
  <div class="sidebar__menu">
    <div v-for="(item, i) in menuItems" :key="i">
      <!-- IF has childred -->
      <div v-if="item.children">
        <div @click="handleToggle(item)" class="link__item flex justify-between items-center px-4">
          <span>
            <font-awesome-icon v-if="item.icon" :icon="item.icon" class="mr-3" />

            {{ item.title }}
          </span>
          <div class="arrow__icon" :class="{ visible: item.visible }">
            <font-awesome-icon :icon="faAngleRight" />
          </div>
        </div>

        <!-- Childrens -->
        <TrasitionExpand>
          <div v-if="item.visible">
            <div v-for="(child, i) in item.children" :key="i">
              <Link
                :href="child.href"
                class="link__item flex items-center pl-5"
                :class="`${child.active ? 'link-active' : 'bg-darklight'}`"
              >
                <span class="dot"></span>

                {{ child.title }}
              </Link>
            </div>
          </div>
        </TrasitionExpand>
      </div>

      <!-- IF no children -->
      <Link
        v-else
        :href="item.href"
        class="link__item block px-4"
        :class="{ 'link-active': item.active }"
      >
        <p>
          <font-awesome-icon v-if="item.icon" :icon="item.icon" class="mr-3" />
          {{ item.title }}
        </p>
      </Link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link__item {
  @apply py-3 cursor-pointer hover:bg-gray-800 transition duration-300;
  font-size: 15.7px;
}

.link-active {
  @apply bg-gray-800;
}

.dot {
  width: 6px;
  height: 6px;
  display: inline-block;
  background-color: #b4c9de;
  border-radius: 50%;
  margin-right: 16px;
}

.sidebar__menu {
  .arrow__icon {
    transition: all 0.3s ease-in-out;
    &.visible {
      transform: rotate(90deg);
    }
  }
}

.bg-darklight {
  background-color: #383b4e;
}
</style>

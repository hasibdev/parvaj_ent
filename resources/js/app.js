
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import globalComponents from './plugins/globalComponents'
import DefaultLayout from './Components/Layouts/Web/DefaultLayout.vue'

import '../css/tailwind.css'

createInertiaApp({
  resolve: name => {
    const page = require(`./Pages/${name}`).default
    if (!page.layout) page.layout = DefaultLayout

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(globalComponents)
      .mount(el)
  },
})

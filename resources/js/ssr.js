import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { createInertiaApp } from '@inertiajs/inertia-vue3';

import globalComponents from './plugins/globalComponents'

export default function render(page) {
  return createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
      const page = require(`./Pages/${name}`).default
      if(!page.layout) page.layout = DefaultLayout
  
      return page
    },
    setup({ app, props, plugin }) {
      return createSSRApp({
        render: () => h(app, props),
      })
      .use(plugin)
      .use(globalComponents);
    },
  });
}
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Link, Head } from "@inertiajs/inertia-vue3"

export default (app) => {
  app.component('Link', Link)
  app.component('Head', Head)

  app.component('font-awesome-icon', FontAwesomeIcon)
}

import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import { coreHooks } from '@vue-storefront/core/hooks';
import { extendStore } from '@vue-storefront/core/helpers';
import { ExtendProductStore } from './store';
import Liked from './components/Liked.vue'; // Import the component

const likedRoutes = [
  {
    name: 'liked',
    path: '/liked',
    component: Liked,
    alias: '/liked.html',
    props: true
  }
]; // compose the router we will use

export const ProductLikes: StorefrontModule = function ({
  app,
  store,
  router,
  moduleConfig,
  appConfig
}) {
  // You can access config passed to registerModule via moduleConfig variable
  // This is how you register new Vuex modules
  // store.registerModule('example', ExampleStore)
  // This is how you override properties of currently existing Vuex modules
  extendStore('product', ExtendProductStore);
  router.addRoutes(likedRoutes); // adding routes here
  router.beforeEach((to, from, next) => {
    next();
  }); // navigation guards here
  // This is how you can hook into various palces of the application
  coreHooks.afterAppInit(() => console.log('module init!!'));
};

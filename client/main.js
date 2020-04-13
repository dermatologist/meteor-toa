import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';  
Vue.use(VueMeteorTracker);                           
import AppLayout from './AppLayout.vue';

// Import the router factory
import routerFactory from './routes'

Meteor.startup(() => {
  // Start the router
  const router = routerFactory.create();
  // Create the app
  new Vue({
    el: '#app',
    router,
    ...AppLayout,
  });
});


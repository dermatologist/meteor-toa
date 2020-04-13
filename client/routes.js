/* /client/routes.js */

// Import the router
import { RouterFactory } from 'meteor/akryum:vue-router2'

// Components
import Add from './Add.vue'
import Dashboard from './Dashboard.vue'


// Create router instance
const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior
});

RouterFactory.configure(factory => {
  // Simple routes
  factory.addRoutes([
    {
      path: '/',
      name: 'home',
      component: Dashboard,
    }, 
    {
      path: '/patient/:id',
      name: 'patient',
      component: Add,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ])
})

export default routerFactory;

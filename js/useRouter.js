import { Home } from '../components/Home.js'

async function createRouter() {
  const About = { template: '<div>About</div>' }
  const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
  ]

  const router = VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes,
  })

  return router;

}

export { createRouter }

// Composables
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default/Default.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          // route level code-splitting
          // this generates a separate chunk (Home-[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/Home.vue'),
        },
        {
          path: '/category',
          name: 'category',
          // route level code-splitting
          // this generates a separate chunk (Home-[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/Category.vue'),
        },
        {
          path: '/product',
          name: 'product',
          // route level code-splitting
          // this generates a separate chunk (Home-[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/Product.vue'),
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (Home-[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/About.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          // route level code-splitting
          // this generates a separate chunk (Home-[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/Contact.vue'),
        },
        {
          path: '/smartlighting',
          name: 'smartlighting',
          // route level code-splitting
          // this generates a separate chunk (Home-[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/SmartLighting.vue'),
        },
        {
          path: '/touchtripleswitch',
          name: 'touchtripleswitch',
          // route level code-splitting
          // this generates a separate chunk (Home-[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/TouchTripleSwitch.vue'),
        },
  
      ],
    },
  ]
})

// const routes = [
//   {
//     path: '/',
//     component: () => import('@/layouts/default/Default.vue'),
//     children: [
//       {
//         path: '/',
//         name: 'Home',
//         // route level code-splitting
//         // this generates a separate chunk (Home-[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import('@/views/Home.vue'),
//       },
//       {
//         path: '/category',
//         name: 'category',
//         // route level code-splitting
//         // this generates a separate chunk (Home-[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import('@/views/Category.vue'),
//       },
//       {
//         path: '/product',
//         name: 'product',
//         // route level code-splitting
//         // this generates a separate chunk (Home-[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import('@/views/Product.vue'),
//       },
//       {
//         path: '/about',
//         name: 'about',
//         // route level code-splitting
//         // this generates a separate chunk (Home-[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import('@/views/About.vue'),
//       },
//       {
//         path: '/contact',
//         name: 'contact',
//         // route level code-splitting
//         // this generates a separate chunk (Home-[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import('@/views/Contact.vue'),
//       },
//       {
//         path: '/smartlighting',
//         name: 'smartlighting',
//         // route level code-splitting
//         // this generates a separate chunk (Home-[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import('@/views/SmartLighting.vue'),
//       },
//       {
//         path: '/touchtripleswitch',
//         name: 'touchtripleswitch',
//         // route level code-splitting
//         // this generates a separate chunk (Home-[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import('@/views/TouchTripleSwitch.vue'),
//       },

//     ],
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// })

export default router

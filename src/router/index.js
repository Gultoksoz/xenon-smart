
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
        path: '/RgbLed',
        name: 'RgbLed',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/RgbLed.vue'),
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
        path: '/smartlightingcategory',
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
      {
        path: '/smartsingleswitch',
        name: 'smartsingleswitch',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/SmartSingleSwitch.vue'),
      },
      {
        path: '/smartdualswitch',
        name: 'smartdualswitch',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/SmartDualSwitch.vue'),
      },
      {
        path: '/doorsensor',
        name: 'doorsensor',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/DoorSensor.vue'),
      },
      {
        path: '/motionsensor',
        name: 'motionsensor',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/MotionSensor.vue'),
      },
      {
        path: '/curtainswitch',
        name: 'curtainswitch',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/CurtainSwitch.vue'),
      },
      {
        path: '/singlesocket',
        name: 'singlesocket',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/SingleSocket.vue'),
      },
      {
        path: '/accesscontrolcategory',
        name: 'accesscontrol',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/AccessControl.vue'),
      },
      {
        path: '/qrcode',
        name: 'qrcode',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/QrCode.vue'),
      },
      {
        path: '/rfid',
        name: 'rfid',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/RfidProduct.vue'),
      },
      {
        path: '/qrcoderfid',
        name: 'qrcoderfid',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/QrCodeRfid.vue'),
      },
      {
        path: '/doorscloud',
        name: 'doorscloud',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/DoorsCloud.vue'),
      },
      {
        path: '/accesscontrolpanel',
        name: 'accesscontrolpanel',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/AccessControlPanel.vue'),
      },
      {
        path: '/temphumsensor',
        name: 'temphumsensor',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/TempHumSensor.vue'),
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

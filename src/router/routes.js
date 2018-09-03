
const routes = [
  {
    path: '/',
    component: () => import('layouts/menu.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'home', component: () => import('pages/Index.vue') },
      { path: 'news', component: () => import('pages/News.vue') },
      { path: 'forum', component: () => import('pages/Forum.vue') },
      { path: 'schedule', component: () => import('pages/Schedule.vue') },
      { path: 'notifications', component: () => import('pages/Notifications.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

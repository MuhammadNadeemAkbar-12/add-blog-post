import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from './views/LoginForm.vue'
import UserDashboard from './views/UserDashboard.vue'
import UserPage from './assets/pages/UserPage.vue'
import BlogsPage from './assets/pages/BlogsPage.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import SignupForm from './views/SignupForm.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: LoginForm },
    { path: '/login', component: LoginForm },
    { path: '/forgot', component: ForgotPassword },
    { path: '/signup', component: SignupForm },
    {
      path: '/UserDashboard',
      component: UserDashboard,
      children: [
        { path: 'users', component: UserPage },
        { path: 'blogs', component: BlogsPage }
      ]
    },
    { path: '*', redirect: '/' }
  ]
})

// ---- Navigation Guard ----
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (
    to.path.startsWith('/UserDashboard') &&
    !isLoggedIn
  ) {
    next('/login');
  } else {
    next();
  }
});

export default router;
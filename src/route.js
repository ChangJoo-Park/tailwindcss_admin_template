import Home from './Home.vue'
import Dashboard from './Dashboard.vue'
import DashboardIndex from './pages/dashboard/Index.vue'
import Kitchensink from './pages/dashboard/Kitchensink.vue'
import DashboardCustomers from './pages/dashboard/Customers.vue'
import DashboardOrders from './pages/dashboard/Orders.vue'
import DashboardSetting from './pages/dashboard/Setting.vue'
import DashboardMessages from './pages/dashboard/Messages.vue'
import DashboardNotifications from './pages/dashboard/Notifications.vue'
import DashboardArchive from './pages/dashboard/Archive.vue'
import Login from './pages/Login.vue'
import SignUp from './pages/SignUp.vue'

export const routes = [
  {
    path: '/', component: Home
  },
  {
    path: '/admin', component: Dashboard,
    children: [
      { path: '', component: DashboardIndex },
      { path: 'customers', component: DashboardCustomers },
      { path: 'orders', component: DashboardOrders },
      { path: 'kitchensink', component: Kitchensink },
      { path: 'setting', component: DashboardSetting },
      { path: 'messages', component: DashboardMessages },
      { path: 'notifications', component: DashboardNotifications },
      { path: 'archive', component: DashboardArchive },
    ],
  },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
]

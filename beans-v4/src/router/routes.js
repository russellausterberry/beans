import Home from '../views/Home'
import Header from '../views/Header'
import OrderCycle from '../components/order-cycle/OrderCycle'
import MakeAvailable from '../components/order-cycle/make-available/MakeAvailable'
import OrderSupplies from '../components/order-cycle/order-supplies'
import PrintSheets from '../components/order-cycle/print-sheets/PrintSheets'
import AdjustOrders from '../components/order-cycle/adjust-orders/AdjustOrders'
import EnterPayments from '../components/order-cycle/enter-payments'
import ManageDB from '../components/admin/ManageDB'

// import Orders from './features/views/orders'
// import Stock from './features/views/stock'
// import Suppliers from './features/views/suppliers'
// import Members from './features/views/members'
// import Reports from './features/views/reports'
// import Settings from './features/settings'

export const routes = [
  {
      path: '',
      name: 'home',
      components: {
        header: Header,
        home: Home
      }
    },
    {
      path: '/order-cycle',
      name: 'orderCycle',
      components: {
        header: Header,
        orderCycle: OrderCycle
      },
      children: [
        {
          path: 'make-available',
          component: MakeAvailable
        },
        {
          path: 'order-supplies',
          component: OrderSupplies
        },
        {
          path: 'print-sheets',
          component: PrintSheets
        },
        {
          path: 'adjust-orders',
          component: AdjustOrders
        },
        {
          path: 'enter-payments',
          component: EnterPayments
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      components: {
        header: Header
      },
      children: [
        {
          path: 'manage-db',
          component: ManageDB
        }
      ]
    }    
  ]

      // { path: '/orders', name:'Orders', component: Orders },
      // { path: '/stock', name:'stock', component: Stock },
      // { path: '/suppliers', name:'suppliers', component: Suppliers },
      // { path: '/reports', name:'reports', component: Reports },
      // { path: '/members', name:'members', component: Members },
      // { path: '/settings', name:'settings', component: Settings }
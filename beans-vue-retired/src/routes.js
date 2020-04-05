import Home from './shared/Home'
import Header from './shared/Header'
import OrderCycle from './features/OrderCycle'
import MakeAvailable from './features/make-available/ma'
import OrderSupplies from './features/order-supplies/os'
import PrintSheets from './features/print-sheets/ps'
import AdjustOrders from './features/adjust-orders/ao'
import EnterPayments from './features/enter-payments/ep'

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
    }
  ]

      // { path: '/orders', name:'Orders', component: Orders },
      // { path: '/stock', name:'stock', component: Stock },
      // { path: '/suppliers', name:'suppliers', component: Suppliers },
      // { path: '/reports', name:'reports', component: Reports },
      // { path: '/members', name:'members', component: Members },
      // { path: '/settings', name:'settings', component: Settings }
import Home from './shared/Home'
import Header from './shared/Header'
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

export const routes = [{
    path: '',
    name: 'home',
    components: {
      header: Header,
      home: Home
    }
  },
  {
    path: '/make-available',
    name: 'makeAvailable',
    components: {
      header: Header,
      makeAvailable: MakeAvailable
    } 
  },
  {
    path: '/order-supplies',
    name: 'orderSupplies',
    components: {
      header: Header,
      orderSupplies: OrderSupplies 
    }
  },
  {
    path: '/print-sheets',
    name: 'printSheets',
    components: {
      header: Header,
      printSheets: PrintSheets 
    }
  },
  {
    path: '/adjust-orders',
    name: 'adjustOrders',
    components: {
      header: Header,
      adjustOrders: AdjustOrders 
    }
  },
  {
    path: '/enter-payments',
    name: 'enterPayments',
    components: {
      header: Header,
      enterPayments: EnterPayments 
    }
  }

  // { path: '/orders', name:'Orders', component: Orders },
  // { path: '/stock', name:'stock', component: Stock },
  // { path: '/suppliers', name:'suppliers', component: Suppliers },
  // { path: '/reports', name:'reports', component: Reports },
  // { path: '/members', name:'members', component: Members },
  // { path: '/settings', name:'settings', component: Settings }
]
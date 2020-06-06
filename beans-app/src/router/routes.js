import Home from "../components/Home"
import Header from "../components/Header"

import OrderCycle from "../components/order-cycle/OrderCycle"
import Availability from "../components/order-cycle/availability/MakeAvailable"
import Ordering from "../components/order-cycle/ordering/SupplierOrders"
import Printing from "../components/order-cycle/printing/Printing"
import Adjusting from "../components/order-cycle/adjusting/AdjustOrders"
import Payments from "../components/order-cycle/payments/Payments"

import Admin from "../components/admin/Admin"
import ManageDB from "../components/admin/ManageDB"
import Orders from '../components/admin/Orders'
import Stock from '../components/admin/Stock'
import Suppliers from '../components/admin/Suppliers'
import Members from '../components/admin/Members'
import Reports from '../components/admin/Reports'
import Settings from '../components/admin/Settings'

const routes = [
  {
    path: "/", // '' or '/'?
    name: "home",
    components: {
      header: Header,
      home: Home,
    },
  },

  {
    path: "/order-cycle",
    name: "orderCycle",
    components: {
      header: Header,
      orderCycle: OrderCycle,
    },
    children: [
      {
        path: "availability",
        component: Availability,
      },
      {
        path: "ordering",
        component: Ordering,
      },
      {
        path: "printing",
        component: Printing,
      },
      {
        path: "adjusting",
        component: Adjusting,
      },
      {
        path: "payments",
        component: Payments,
      },
    ],
  },
  
  {
    path: "/admin",
    name: "admin",
    components: {
      header: Header,
      admin: Admin,
    },
    children: [
      {
        path: "manage-db",
        component: ManageDB,
      },
      {
        path: "orders",
        component: Orders,
      },
      {
        path: "stock",
        component: Stock,
      },
      {
        path: "suppliers",
        component: Suppliers,
      },
      {
        path: "members",
        component: Members,
      },
      {
        path: "reports",
        component: Reports,
      },   
      {
        path: "settings",
        component: Settings,
      }                           
    ],
  },
]

export default routes

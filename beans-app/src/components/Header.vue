
<template>
  <div>
    <nav class="navbar has-background-white-bis" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home' }" class="navbar-item"><img src="../assets/beanPlant-64.png" alt="beans logo" /></router-link>

        <a
          ref="burger"
          class="navbar-burger"
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="beansNavBar"
          @click="burgerExpanded=!burgerExpanded"
        >
          <!-- 3 empty spans to show 'hamburger' -->
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>   

      <div id="beansNavBar" class="navbar-menu" v-bind:class="{'is-active': burgerExpanded}">
        <div class="navbar-end">

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">order cycle</a>
            <div class="navbar-dropdown">
              <router-link :to="'/order-cycle/availability'" class="navbar-item">Availability</router-link>
              <router-link :to="'/order-cycle/ordering'" class="navbar-item">Ordering</router-link>
              <router-link :to="'/order-cycle/printing'" class="navbar-item">Printing</router-link>
              <router-link :to="'/order-cycle/adjusting'" class="navbar-item">Adjustments</router-link>
              <router-link :to="'/order-cycle/payments'" class="navbar-item">Payments</router-link>
            </div>
          </div>   

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">admin</a>
            <div class="navbar-dropdown">
              <router-link :to="'/admin/manage-db'" class="navbar-item">Manage db</router-link>
              <router-link :to="'/admin/orders'" class="navbar-item">Orders</router-link>
              <router-link :to="'/admin/stock'" class="navbar-item">Stock</router-link>
              <router-link :to="'/admin/suppliers'" class="navbar-item">Suppliers</router-link>
              <router-link :to="'/admin/members'" class="navbar-item">Members</router-link>
              <router-link :to="'/admin/reports'" class="navbar-item">Reports</router-link>
              <router-link :to="'/admin/settings'" class="navbar-item">Settings</router-link>
            </div>
          </div>

          <a class="navbar-item">my account</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      burgerExpanded: false
    };
  }
};
</script>
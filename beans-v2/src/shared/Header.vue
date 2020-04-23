
<template>
  <div>
    <nav class="navbar has-background-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home' }" class="navbar-item"><img src="../assets/beanPlant.png" alt="beans logo" /></router-link>

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
              <router-link :to="'/order-cycle/make-available'" class="navbar-item">Make available</router-link>
              <router-link :to="'/order-cycle/order-supplies'" class="navbar-item">Order Supplies</router-link>
              <router-link :to="'/order-cycle/print-sheets'" class="navbar-item">Print Sheets</router-link>
              <router-link :to="'/order-cycle/adjust-orders'" class="navbar-item">Adjust Orders</router-link>
              <router-link :to="'/order-cycle/enter-payments'" class="navbar-item">Enter Payments</router-link>
            </div>
          </div>   

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">admin</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">orders</a>
              <a class="navbar-item">stock</a>
              <a class="navbar-item">suppliers</a>
              <a class="navbar-item">members</a>
              <a class="navbar-item">reports</a>
              <a class="navbar-item">settings</a>
            </div>
          </div>

          <a class="navbar-item">my account</a>
        </div>
      </div>
    </nav>
    <!-- <router-view name="Header"></router-view> -->
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
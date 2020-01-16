<template>
  <div>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../assets/beanslogo.png" alt="beans logo"/>
        </a>
        <!-- to do: hook 'is-active' toggle to navbar-menu, controlled by clicking burger -->
        <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="beansNavBar">
          <!-- 3 empty spans to show 'hamburger' -->
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <!-- to do: hook 'is-active' toggle to navbar-menu, controlled by clicking burger -->
      <div id="beansNavBar" class="navbar-menu">  
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">order cycle</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">make available</a>
              <a class="navbar-item">order supplies</a>
              <a class="navbar-item">print sheets</a>
              <a class="navbar-item">adjust orders</a>
              <a class="navbar-item">print sheets</a>
              <a class="navbar-item">enter payments</a>
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

    <section class="hero">
      <div class="container">
        <div class="hero-body">
          <h1 class="title is-family-code">Header piping hot surfer going ballistic hey</h1>
          <h2 class="subtitle">subtitle or so</h2>
          <button class="button is-primary is-outlined">some button</button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="columns">
        <div class="column">
          <article class="message is-warning">
            <div class="message-header">
              <p>Lorem Ipsum</p>
              <button class="delete" aria-label="delete"></button>
            </div>

            <p class="message-body is-family-code is-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste rem
              doloribus minus at non itaque minima libero, deleniti quo maiores natus
              sequi culpa delectus repellendus sapiente vel voluptates temporibus...
            </p>
          </article>
        </div>
        <div class="column">
          <a class="button">hey, a button</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

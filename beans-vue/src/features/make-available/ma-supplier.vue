<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Select supplier to update availability for</p>
        </header>
        <div class="card-content control">
          <v-select :options="suppliers" v-model="chosenSupplier"></v-select>
        </div>
      </div>   
      <br>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Select how to update:</p>
        </header>
        <div class="card-content control">
          <v-select :options="['from csv', 'manually']" v-model="chosenMethod"></v-select>
        </div>
      </div>           
    </div>
    <div class="column">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      suppliers: [
        "Food Connect",
        "Sovereign Foods",
        "Mt Cotton Organic Farm",
        "Gabrielle Austerberry",
        "Carol Blight"
      ],
      chosenSupplier:'',
      chosenMethod: ''
    };
  }
};
</script>

<style lang="">
</style>
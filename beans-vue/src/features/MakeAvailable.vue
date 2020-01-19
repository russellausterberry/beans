<template>
  <section class="section has-text-centered">
  <a class="button subtitle is-4">Make Available</a> 

    <ul class="steps has-content-centered">
      <li class="steps-segment is-active">
        <span class="steps-marker"></span>
        <div class="steps-content">
          <p class="subtitle is-5">Supplier</p>
          <p>Choose supplier to set availability for</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
          <p class="subtitle is-5">Method</p>
          <p>Choose how to set availability</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
          <p class="subtitle is-">Map</p>
          <p>If needed match supplier fields to relevant import fields</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
          <p class="subtitle is-5">Skip</p>
          <p>If needed check which items to skip by default</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
          <p class="subtitle is-5">Split</p>
          <p>Assign each word of item to relevant field</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
          <p class="subtitle is-5">Sift</p>
          <p>Assign each item a category and optionally a packing category</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
          <p class="subtitle is-5">Cull</p>
          <p>Uncheck any items you do NOT wish to make available</p>
        </div>
      </li>
    </ul>

    <SelectSupplier></SelectSupplier>
    <MapFields></MapFields>
    <SkipItems></SkipItems>
    <SplitItems></SplitItems>
    <AddCategories></AddCategories>
    <CullSelection></CullSelection>
  </section>
</template>

<script>
// import SelectSupplier from "./SelectSupplier"
// import MapFields from "./MapFields"
// import SkipItems from "./SkipItems"
// import SplitItems from "./SplitItems"
// import AddCategories from "./AddCategories"
// import CullSelection from "./CullSelection"
// export default {
//   components: {
//     SelectSupplier,
//     MapFields,
//     SkipItems,
//     SplitItems,
//     AddCategories,
//     CullSelection
//   }
// }
</script>
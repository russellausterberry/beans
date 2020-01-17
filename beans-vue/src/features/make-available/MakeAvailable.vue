<template>
  <section class="section has-text-centered">
    <span class="tag is-medium is-light">Make available</span>
    <div class="tabs is-small is-centered">
      <ul>
        <li class="is-active"><a href="">select supplier</a></li>
        <li><a href="">map fields</a></li>
        <li><a href="">skip items</a></li>
        <li><a href="">split items</a></li>
        <li><a href="">add categories</a></li>
        <li><a href="">cull selection</a></li>
      </ul>
    </div>
    <ul class="steps">
      <li class="steps-segment"><a href="#" class="steps-marker is-active">1</a></li>
      <li class="setps-segment"><a href="#" class="steps-marker">2</a></li>
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
import SelectSupplier from "./SelectSupplier"
import MapFields from "./MapFields"
import SkipItems from "./SkipItems"
import SplitItems from "./SplitItems"
import AddCategories from "./AddCategories"
import CullSelection from "./CullSelection"

export default {
  components: {
    SelectSupplier,
    MapFields,
    SkipItems,
    SplitItems,
    AddCategories,
    CullSelection
  }
}
</script>
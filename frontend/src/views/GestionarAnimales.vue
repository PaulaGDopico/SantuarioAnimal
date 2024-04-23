<template>
 <!-- The AG Grid component -->
 <ag-grid-vue
   :rowData="rowData"
   :columnDefs="colDefs"
   style="height: 500px"
   class="ag-theme-quartz"
 >
 </ag-grid-vue>
</template>
<script setup lang="ts">

import { ref } from 'vue';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { AgGridVue } from "ag-grid-vue3"; // AG Grid Component

export default {
 name: "App",
 components: {
   AgGridVue, // Add AG Grid Vue3 component
 },
 setup() {
    // Row Data: The data to be displayed.
 const rowData = ref([
   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
   { make: "Ford", model: "F-Series", price: 33850, electric: false },
   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
 ]);

 // Column Definitions: Defines the columns to be displayed.
 const colDefs = ref([
   { field: "make" },
   { field: "model" },
   { field: "price" },
   { field: "electric" }
 ]);

 return {
   rowData,
   colDefs,
 };
 },
};

</script>
<style scoped lang="scss">

</style>
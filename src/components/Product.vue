<template>
  <h1>Products</h1>
  <router-link :to="{ name: 'call_center'}">Call Center</router-link>
  <br>
  
  <RouterView />
  <br />
  <br />
  <br />
  <div>
    <select v-model="brand">
      <option value="All">All</option>
      <option value="Honda">Honda</option>
      <option value="Toyota">Toyota</option>
      <option value="Ford">Ford</option>
      <option value="Chevrolet">Chevrolet</option>
    </select>
  </div>
  <br />
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Year</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car, index) in cars" :key="car.id">
          <td>{{ index + 1 }}</td>
          <td>{{ car.name }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.brand }}</td>
          <td>{{ car.price }}</td>
          <td>
            <!-- MENGGUNAKAN PARAMS -->
            <!-- 
            <router-link
              :to="{ name: 'detail_product', params: { id: car.id } }"
            >
              Detail
            </router-link>
            -->
            <!-- MENGGUNAKAN QUERY -->
             <router-link :to="{ name: 'detail_product', query: {id: car.id} }">Detail</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
import { ref, watch, onMounted } from "vue";
import carsJson from "@/plugins/cars.json";

const route = useRoute();
const cars = ref(carsJson);
const brand = ref("All");

onMounted(() => {
  console.log(route.query)
  brand.value = route.query.brand || "All";
}),

// Watch for changes in brand and filter cars accordingly
watch(brand, () => {
  if (brand.value) { 
    if (brand.value === "All") { 
      cars.value = carsJson;
    } else { 
      cars.value = carsJson.filter(car => car.brand === brand.value);
    }
  }
});
</script>

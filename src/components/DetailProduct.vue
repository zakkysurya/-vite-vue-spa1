<template>
  <div>
    <h2>Detail Product</h2>
    <p v-if="foundCar">
      <!-- CARA 1 -->
      <!-- {{ foundCar.name }} ({{ foundCar.year }}): Price {{ foundCar.price }} -->
      <!-- CARA 2 -->
      Name: {{ foundCar.name }}
      <br />
      Year: {{ foundCar.year }}
      <br />
      Price: {{ foundCar.price }}
    </p>
    <p v-else>Product not found.</p>
    <button @click="goBack"><< Go Back</button>
    <!-- Tombol untuk kembali -->
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router"; // Impor useRouter
import carsJson from "@/plugins/cars.json";

// ============================ CARA 1
// // Mengambil ID dari props
// const props = defineProps(["id"]);
// // Fungsi untuk mencari mobil berdasarkan ID
// const findCarById = (id) => {
//   return carsJson.find((car) => car.id === Number(id));
// };
// // Mencari mobil yang sesuai dengan ID dari props
// const foundCar = ref(findCarById(props.id));

// ============================ CARA 2
const route = useRoute(); // Mendapatkan instance route
// MENGGUNAKAN PARAMS
// const { id } = route.params;
// MENGGUNAKAN QUERY
const {id} = route.query
const foundCar = ref(null);
// Mencari mobil yang sesuai dengan ID dari route params
onMounted(() => {
  foundCar.value = carsJson.find((c) => c.id === Number(id));
});

// ============================ CARA 3
// const route = useRoute(); // Mendapatkan instance route
// // State untuk menyimpan data mobil yang ditemukan
// const foundCar = ref(null);
// // watchEffect untuk memantau perubahan route params.id
// watchEffect(() => {
//   const id = route.params.id; // Ambil id dari route params
//   // Cari mobil yang sesuai dengan ID
//   foundCar.value = carsJson.find((car) => car.id === Number(id));
// });

// Fungsi untuk kembali ke halaman awal
const router = useRouter(); // Mendapatkan instance router
const goBack = () => {
  router.push("/products"); // Mengalihkan ke halaman awal
};
</script>

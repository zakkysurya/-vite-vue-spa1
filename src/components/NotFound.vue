<template>
  <center>
    <h1 :style="{ color: textColor }">NOT FOUND - 404</h1>
    <br />
    <button
      type="button"
      @click="changeColor"
      :style="{ backgroundColor: backgroundColor }"
    >
      Click Me
    </button>
    &nbsp;<b>{{ count }}</b>
  </center>
</template>

<script setup>
import { ref } from "vue";
import randomColors from "@/plugins/codeColors.json";

const count = ref(0);
const backgroundColor = ref("aquamarine");
const textColor = ref("black");

// Fungsi untuk mengubah warna latar belakang
const changeColor = () => {
  count.value++;
  // Mengambil warna acak untuk latar belakang
  const randomIndex = Math.floor(Math.random() * randomColors.length);
  backgroundColor.value = randomColors[randomIndex].color;
  // Mengambil warna acak untuk teks
  const randomTextIndex = Math.floor(Math.random() * randomColors.length);
  textColor.value = randomColors[randomTextIndex].color;
};
</script>

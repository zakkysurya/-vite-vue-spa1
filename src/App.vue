<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    |
    <router-link :to="{ name: 'products' }">Product</router-link>
  </div>
  <router-view></router-view>
</template>
<script setup></script>

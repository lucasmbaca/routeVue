<template>
    <div>
        <ul>
            <RouterLink active-class="active" to="/">home</RouterLink>
            <RouterLink active-class="active" to="/about">About</RouterLink>
        </ul>
    </div>
</template>

<script setup>
import {RouterLink} from "vue-router"
</script>

<style scoped>
  .active{
    font-weight: 900;
    color: red;
  }
</style>
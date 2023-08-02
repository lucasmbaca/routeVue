<template>
    <div>
        <h1>Contact View</h1>
        <p>{{ car.seller.name }}</p>
    </div>
</template>

<script setup>
import {useRoute} from "vue-router"
import cars from "../data/cars.json"

const route = useRoute()
const car = cars.find(c => c.id === parseInt(route.params.id))

</script>

<style scoped>

</style>
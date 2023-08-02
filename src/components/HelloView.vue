<template>
    <div>
        <h1>this HomeView</h1>
        <div class="cars">
            <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id">
                {{ car.name }}
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import cars from "../data/cars.json"
import {RouterLink} from "vue-router"
</script>

<style scoped>
    .cars{
        display: flex;
    }

    .cars a{
        color: black;
        background-color: white;
        text-decoration: none;
        width: 100%;
        box-shadow: 1px 1px 1px rgba(146, 23, 23, 0.388);
        margin: 20px;
    }
</style>
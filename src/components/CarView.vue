<template>
    <div>
        <h1>Car View</h1>
        <p> brand : {{ car.name}}</p>
        <p>year : {{ car.year }}</p>
        <p>price : {{ car.price }}</p>
        <button @click="showContact">show contact</button>
        <RouterView/>
    </div>
</template>

<script setup>
    import {useRoute,useRouter, RouterView} from "vue-router"
    import cars from "../data/cars.json"

    const route = useRoute()
    const router = useRouter()
    const car = cars.find(c => c.id === parseInt(route.params.id))

    const showContact = () => {
        return router.push(`/cars/${car.id}/contact`)
    }
    
</script>

<style scoped>

</style>
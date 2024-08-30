<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="w-full p-5 bg-stone-900 flex justify-between items-center">
        <RouterLink to="/" class="mr-5 ml-10 text-amber-300">
            <img class="h-10" src="/public/img/logo.png" alt="">
        </RouterLink>

        <nav class="p-5">
            <RouterLink to="/" class="mr-5 ml-10 text-amber-300">Home</RouterLink>
            <RouterLink to="/pedidos" class="mr-5 ml-10 text-amber-300">Pedidos</RouterLink>
        </nav>
    </header>

    <section class="w-full flex justify-center flex-1">
        <RouterView />
    </section>

    <footer class="w-full bg-stone-900 text-amber-300 p-10 text-center">
        <p>Make Your Burger &copy; 2024</p>
    </footer>
</template>
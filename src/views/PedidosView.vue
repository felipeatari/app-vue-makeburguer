<template>
  <div class="w-full p-5">
    <h1 class="p-5 text-2xl mb-5 font-bold">Gerenciar Pedidos:</h1>

    <div class="w-full border-2">
      <div class="bg-amber-300 w-full h-[50px] flex justify-between">
        <div class="p-2 flex-1 text-center">ID:</div>
        <div class="p-2 flex-1 text-center">Cliente:</div>
        <div class="p-2 flex-1 text-center">Pão:</div>
        <div class="p-2 flex-1 text-center">Carne:</div>
        <div class="p-2 flex-1 text-center">Opcionais:</div>
        <div class="p-2 flex-1 text-center">Ações:</div>
      </div>
  
      <div class="relative w-full h-[300px] overflow-y-scroll">
        <PedidosListar />
      </div>
    </div>
  </div>
</template>

<script setup>
import PedidosListar from '@/components/PedidosListar.vue';
</script>

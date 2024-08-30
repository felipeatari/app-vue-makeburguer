<template>
  <div v-for="pedido in pedidos" :key="pedido.id" class="flex border-b-2">
    <div class="flex-1 p-2 text-center">{{ pedido.id }}</div>
    <div class="flex-1 p-2 text-center">{{ pedido.pao }}</div>
    <div class="flex-1 p-2 text-center">{{ pedido.carne }}</div>
    <div class="flex-1 p-2 text-center">{{ pedido.id }}</div>
    <div class="flex-1 p-2 text-center">
      <ul>
        <li v-for="(opcional, index) in pedido.opcionais" :key="index">{{ opcional }}</li>
      </ul>
    </div>
    <div class="flex-1 flex flex-col items-center text-center p-2">
      <div>
        <select class="w-40 border-2 bg-gray-100" @change="changePedidoStatus($event, pedido.id)">
          <option class="font-bold" disabled value=""></option>
          <option v-for="status in statusTodosPedidos" :value="status.tipo" :key="status.id"
            :selected="pedido.status === status.tipo">{{ status.tipo }}</option>
        </select>
      </div>
      <button @click="cancelarPedido(pedido.id)" class="w-40 h-10 bg-stone-900 text-amber-300 mt-2">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const pedidos = ref({})
const statusTodosPedidos = ref([])

const getPedidos = async () => {
  const res = await fetch('http://127.0.0.1:3000/burgers')
    .then(res => res.json())

  pedidos.value = res
}

const getPedidosStatus = async () => {
  const res = await fetch('http://127.0.0.1:3000/status')
    .then(res => res.json())

  statusTodosPedidos.value = res
}

const changePedidoStatus = (event, id) => {
  const status = event.target.value
  const statusJSON = { status: status }
  const body = JSON.stringify(statusJSON)

  updatePedidoStatus(body, id)
}

const updatePedidoStatus = async (body, id) => {
  await fetch(`http://127.0.0.1:3000/burgers/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: body
  }).then(res => res.json())

  getPedidos()
}

const cancelarPedido = async (id) => {
  await fetch(`http://127.0.0.1:3000/burgers/${id}`, {
    method: 'DELETE'
  }).then(res => res.json())

  getPedidos()
}

onMounted(() => {
  getPedidos()
  getPedidosStatus()
})
</script>
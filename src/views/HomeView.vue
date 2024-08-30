<template>
  <div class="w-full">
    <!-- Banner -->
    <div class="w-full h-[600px] bg-burger bg-cover bg-[0-15em] flex justify-start items-center">
      <h1 class="p-5 text-5xl font-bold text-gray-50">Monte Seu Burger</h1>
    </div>

    <!-- Form -->
    <div class="bg-slate-50 flex justify-center">
      <form @submit.prevent="criarBurger" class="flex flex-col p-4 m-5">
        <p
        v-if="msg"
        class="w-[450px] h-[35px] bg-blue-200 text-blue-900 border-[0.1px] border-blue-900 flex justify-center items-center text-[13pt]"
        >{{ msg }}</p>

        <h1 class="p-5 text-4xl font-bold">Monte seu Burger</h1>

        <div  class="flex flex-col m-2">
          <label class="font-bold border-l-4 border-amber-300 pl-3 mb-2" for="nome">Nome do cliente</label>
          <input class="p-2 border-2 h-8" type="text" id="nome" v-model="nome" >
        </div>

        <div class="flex flex-col m-2">
          <span class="font-bold border-l-4 border-amber-300 pl-3 mb-2">Escolha o Pão do seu Burger</span>
          
          <select class="border-2 h-8" v-model="pao">
            <option value=""></option>
            <option
              v-for="pao in paes"
              :key="pao.id"
              :value="pao.tipo"
            >{{ pao.tipo }}</option>
          </select>
        </div>

        <div class="flex flex-col m-2">
          <span class="font-bold border-l-4 border-amber-300 pl-3 mb-2">Escolha a Carne do seu Burger</span>

          <select class="border-2 h-8" v-model="carne">
            <option value=""></option>
            <option
              v-for="carne in carnes"
              :key="carne.id"
              :value="carne.tipo"
            >{{ carne.tipo }}</option>
          </select>
        </div>

        <div class="m-2">
          <span class="font-bold border-l-4 border-amber-300 pl-3 mb-3" for="nome">Opcionais:</span>

          <div class="w-[250px] flex justify-between flex-wrap">
            <div 
              v-for="opcao in opcionaisData"
              :key="opcao.id"
            >
              <input class="ml-3" type="checkbox" :value="opcao.tipo" v-model="opcionais">
              <span class="ml-2 font-bold">{{ opcao.tipo }}</span>
            </div>
          </div>
          </div>

        <button class="h-10 mt-3 bg-stone-900 text-amber-300 font-bold" type="submit">
            Criar meu Burger!
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const paes = ref('')
const carnes = ref('')
const opcionaisData = ref('')
const nome = ref('')
const pao = ref('')
const carne = ref('')
const opcionais = ref([])
const msg = ref('')

const getIngredients = async ()=> {

  const data = await fetch('http://localhost:3000/ingredientes').then(res => {
    return res.json()
  })

  paes.value = data.paes
  carnes.value = data.carnes
  opcionaisData.value = data.opcionais
}

const criarBurger = async ()=> {
  const data = JSON.stringify({
    nome: nome.value,
    pao: pao.value,
    carne: carne.value,
    opcionais: Array.from(opcionais.value),
    status: 'Solicitado'
  })

  await fetch('http://localhost:3000/burgers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  }).then(res => {
    return res.json()
  })
  .then(res => {
    msg.value = `Pedido Nº ${res.id} criado com sucesso!`

    setTimeout(()=> msg.value = '', 3000)
  })
}

getIngredients()
</script>

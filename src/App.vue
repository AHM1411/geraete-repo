<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from './utils/supabaseClient'
import type { Database } from '@/types/database.types'
import Button from 'primevue/button'

type Todo = Database['public']['Tables']['todos']['Row']

const todos = ref<Todo[]>([])

async function getTodos() {
  const { data, error } = await supabase.from('todos').select()
  if (error) {
    console.error(error)
    return
  }
  todos.value = data ?? []
}

onMounted(() => {
  getTodos()
})
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Setup Test</h1>

    <Button label="PrimeVue Button" />

    <div class="mt-4 p-4 bg-gray-100 rounded">Tailwind is working</div>
  </div>
  <div class="bg-white text-black dark:bg-black dark:text-white p-4">
    Dark mode test
  </div>
</template>

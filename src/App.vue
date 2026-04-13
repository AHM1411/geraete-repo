<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from './utils/supabaseClient'
import type { Database } from '@/types/database.types'

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
  <RouterView />
  <div class="p-4 flex gap-4">
    <RouterLink to="/home">Home</RouterLink>
    <RouterLink to="/test">Test</RouterLink>
  </div>
</template>

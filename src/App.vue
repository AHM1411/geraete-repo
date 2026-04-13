<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
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
  <HelloWorld />
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.id }} - {{ todo.created_at }}
    </li>
  </ul>
</template>
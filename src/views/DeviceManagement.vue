<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { supabase } from '@/utils/supabaseClient'
import type { Database } from '@/types/database.types'

type Device = Database['public']['Tables']['devices']['Row']

const devices = ref<Device[]>([])
const loading = ref(false)

async function fetchDevices() {
  loading.value = true

  const { data, error } = await supabase
    .from('devices')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error fetching devices:', error)
    loading.value = false
    return
  }

  devices.value = data ?? []
  loading.value = false
}

onMounted(() => {
  fetchDevices()
})
</script>

<template>
  <div class="p-6">
    <h1 class="mb-4 text-2xl font-bold">Device Management</h1>
    <p class="mb-4">This is the device management page.</p>

    <DataTable
      :value="devices"
      :loading="loading"
      tableStyle="min-width: 50rem"
    >
      <Column field="id" header="ID" />
      <Column field="name" header="Name" />
      <Column field="created_at" header="Created At" />
    </DataTable>
  </div>
</template>
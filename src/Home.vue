<script setup>
import Button from 'primevue/button'
</script>

<template>
  <div class="card flex flex-col items-center gap-4">

    <div class="flex flex-wrap gap-4 justify-center">
      <Button icon="pi pi-home" aria-label="Home" />
      <Button label="Profile" icon="pi pi-user" />
      <Button label="Save" icon="pi pi-check" iconPos="right" />
    </div>

    <div class="flex flex-wrap gap-4 justify-center">
      <Button label="Search" icon="pi pi-search" iconPos="top" />
      <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />

      <!-- RouterLink CORRECT avec PrimeVue -->
      <RouterLink to="/portfolio" custom v-slot="{ navigate }">
        <Button
          label="Portfolio"
          icon="pi pi-briefcase"
          @click="navigate"
        />
      </RouterLink>

    </div>

  </div>
</template>

<template>
  <RouterLink v-if="to" class="py-1 px-8 bg-red-600 rounded-3xl cursor-pointer font-medium" :to="to">
    <slot></slot>
  </RouterLink>
  <button v-else class="py-1 px-8 bg-red-600 rounded-3xl cursor-pointer font-medium">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const { to } = defineProps<{ to?: string }>()
</script>

<style></style>
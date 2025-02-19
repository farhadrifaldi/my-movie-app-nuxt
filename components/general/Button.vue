<template>
  <RouterLink v-if="to"
    :class="`py-1 px-8 rounded-3xl cursor-pointer font-medium ${active ? 'bg-red-600' : 'bg-[#15181e]'}`" :to="to">
    <slot></slot>
  </RouterLink>
  <button v-else :class="`py-1 px-8 rounded-3xl cursor-pointer font-medium ${active ? 'bg-red-600' : 'bg-[#15181e]'}`">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const { to, active } = defineProps<{ to?: string, active?: boolean }>()
</script>

<style></style>
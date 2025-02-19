<template>
  <RouterLink v-if="to"
    :class="`py-1 px-8 rounded-3xl cursor-pointer font-medium ${!type || type === 'primary' ? 'bg-red-600' : 'bg-[#15181e]'}`"
    :to="to">
    <slot></slot>
  </RouterLink>
  <button v-else
    :class="`py-1 px-8 rounded-3xl cursor-pointer font-medium ${!type || type === 'primary' ? 'bg-red-600' : 'bg-[#15181e]'}`">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const { to, type } = defineProps<{ to?: string, type?: 'primary' | 'secondary' }>()
</script>

<style></style>
<template>
  <slot v-if="!isLoading && !isError"></slot>
  <GeneralError v-if="isError && !isLoading" />
  <GeneralLoading v-if="isLoading && !isError" :is-dark="isDark" />
</template>

<script lang="ts" setup>
const { isLoading, isError, isDark } = defineProps<{ isLoading: boolean, isError: boolean, isDark?: boolean }>() 
</script>

<template>
  <slot v-if="!isLoading && !isError"></slot>
  <GeneralError v-if="isError && !isLoading" />
  <GeneralLoading v-if="isLoading && !isError" />
</template>

<script lang="ts" setup>
const { isLoading, isError } = defineProps<{ isLoading: boolean, isError: boolean }>() 
</script>

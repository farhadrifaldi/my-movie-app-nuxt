<template>
  <div :class="`w-full h-[200px] flex justify-center items-center ${isDark ? 'text-gray-600' : 'text-white'}`">
    <Icon name="eos-icons:loading" :size="100" />
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '#components';

const { isDark } = defineProps<{ isDark?: boolean }>()

</script>

<style></style>
<template>
  <div class="relative font-medium">
    <hr class="border border-[#E74C3C] w-[100px]" />
    <h1 v-if="level === '1'" class="py-3 text-6xl">
      <slot />
    </h1>
    <h2 v-if="level === '2'" class="py-3 text-5xl">
      <slot />
    </h2>
    <h3 v-if="level === '3'" class="py-3 text-4xl">
      <slot />
    </h3>
    <h4 v-if="level === '4'" class="py-3 text-3xl">
      <slot />
    </h4>
    <h5 v-if="level === '5'" class="py-3 text-2xl">
      <slot />
    </h5>
    <h6 v-if="level === '6'" class="py-3 text-xl">
      <slot />
    </h6>
  </div>
</template>

<script lang="ts" setup>
const { level } = defineProps<{
  level: '1' | '2' | '3' | '4' | '5' | '6'
}>()
</script>
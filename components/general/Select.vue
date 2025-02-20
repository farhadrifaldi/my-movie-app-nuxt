<template>
  <select v-model="selected" v-bind="$attrs" class="bg-[#292e36] w-full p-2 rounded-sm font-light">
    <option v-for="option in options" :value="option.value">{{ option.label }}</option>
  </select>
</template>

<script lang="ts" setup>
type props = { modelValue: string, options: { label: string; value: string; }[] }

const { modelValue, options } = defineProps<props>()


const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const selected = ref<string>(modelValue)

watch(selected, (newVal) => {
  emit('update:modelValue', newVal);
})

watch(() => modelValue, (newVal) => {
  selected.value = newVal
});
</script>
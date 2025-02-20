<template>
  <div class="flex items-center justify-between">
    <label v-if="label" :for="`checkbox-${Math.random().toString(36).substring(2, 9)}`" class="font-light">
      {{ label }}
    </label>
    <input type="checkbox" :id="`checkbox-${Math.random().toString(36).substring(2, 9)}`" v-model="isChecked"
      :disabled="disabled" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface CheckboxProps {
  modelValue: string[];
  disabled?: boolean;
  label?: string;
  value: string;
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: undefined,
  disabled: false,
  label: '',
  value: ''
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>();

const isChecked = ref<boolean>(Boolean(props.modelValue.find(v => v === props.value)))

watch(isChecked, (newVal) => {
  emit('update:modelValue', newVal ? [...props.modelValue, props.value] : props.modelValue.filter((v) => v !== props.value));
})

watch(() => props.modelValue, (newVal) => {
  isChecked.value = Boolean(newVal.find(v => v === props.value))
});
</script>

<style scoped>
input[type="checkbox"] {
  background-color: #292e36;
  border: 2px solid #6b6b6b;
  width: 20px;
  height: 20px;
  appearance: none;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
}

input[type="checkbox"]:checked {
  background-color: #E74C3C;
}

input[type="checkbox"]:checked::before {
  content: "✓";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
}
</style>

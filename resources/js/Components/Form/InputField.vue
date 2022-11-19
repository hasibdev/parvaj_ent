<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
   modelValue: {
      type: [String, Number],
      required: true,
   },
   type: {
      type: String,
      default: "text",
   },
   label: { type: String },
   placeholder: { type: String },
   errorField: { type: String },
   disabled: { type: Boolean, default: false },
   readonly: { type: Boolean, default: false },
   focus: { type: Boolean, default: false },
   stack: { type: Boolean, default: false },
})

const onChange = (e) => {
   emit("update:modelValue", e.target.value)
}
</script>
<template>
   <div>
      <input @input="onChange" :value="props.modelValue" :type="props.type" :placeholder="props.placeholder"
         :disabled="props.disabled" class="block w-full" />
   </div>
</template>

<style lang="scss" scoped>

</style>

<template>
  <div :class="`flex flex-row ${bgColor} mb-4 p-4`">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: "white"
    }
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    bgColor() {
      return `bg-${this.color}`;
    }
  }
};
</script>

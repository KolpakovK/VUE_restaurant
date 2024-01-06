<!-- VueLabel.vue -->

<template>
  <p :class="['text-' + size, 'text-' + color, 'label-component']">{{ displayText }}</p>
</template>

<script>
export default {
  props: {
    displayText: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large', 'header-small', 'header-medium', 'header-large'].includes(value);
      }
    },
    color: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'secondary', 'tertiary', 'accent'].includes(value);
      }
    }
  }
};
</script>

<style scoped>


.label-component{
    margin: 0;
}

</style>
<!-- VueButton.vue -->

<template>
  <button :class="computedClasses" @click="$emit('click')">
    <span v-if="icon" class="button-icon">
      <i :class="icon"></i>
    </span>
    <span class="button-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '' // Icon class name
    },
    rounded: {
      type: Boolean,
      default: false // Rounded corner option
    },
    styleType: {
      type: String,
      default: 'fill', // Button style (fill, outline, link)
      validator: function (value) {
        return ['fill', 'outline', 'link'].includes(value);
      }
    },
    colorStyle: {
      type: String,
      default: 'neutral', // Button color style (primary, secondary, neutral, error, success)
      validator: function (value) {
        return ['primary', 'secondary', 'neutral', 'error', 'success'].includes(value);
      }
    },
    disabled:{
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedClasses() {
      return [
      'button',
      `button-${this.styleType}`,
      `button-${this.colorStyle}`,
      this.rounded ? 'button-rounded' : '',
      this.disabled ? "button-disabled" : ""
      ];
    }
  }
};
</script>

<style scoped>
/* Basic button styles */
.button {
  padding: 8px 16px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  border-radius: var(--border-radius-medium); /* Rounded corners */

  transition-duration: 300ms;
}

/* Fill style */
.button-fill {
  background-color: var(--color-primary);
  color: var(--text-white);
}

/* Outline style */
.button-outline {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  background-color: transparent;
}

/* Link style */
.button-link {
  color: var(--color-primary);
  background-color: transparent;
  border: none;
}
.button-link:hover{
  background-color: var(--color-neutral);
}

/* Different color styles */
/* FILL BUTTONS */
.button-primary.button-fill{
  background-color: var(--color-primary);
  color: var(--text-white);
}
.button-primary.button-fill:hover{
  background-color: var(--color-primary-emphasis);
}

.button-secondary.button-fill {
  background-color: var(--color-secondary);
  color: var(--text-white);
}
.button-secondary.button-fill:hover{
  background-color: var(--color-secondary-emphasis);
}

.button-neutral.button-fill {
  background-color: var(--color-neutral);
  color: var(--text-secondary);
}
.button-neutral.button-fill:hover{
  background-color: var(--color-neutral-emphasis);
}

.button-error.button-fill {
  background-color: var(--color-error);
  color: var(--text-white);
}
.button-error.button-fill:hover{
  background-color: var(--color-error-emphasis);
}

.button-success.button-fill {
  background-color: var(--color-success);
  color: var(--text-white);
}
.button-success.button-fill:hover{
  background-color: var(--color-success-emphasis);
}
/* OUTLINE BUTTONS */
.button-primary.button-outline{
  background-color: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}
.button-primary.button-outline:hover{
  background-color: var(--color-primary);
  color: var(--text-white);
}

.button-secondary.button-outline {
  background-color: transparent;
  border-color: var(--color-secondary);
  color: var(--color-secondary);
}
.button-secondary.button-outline:hover{
  background-color: var(--color-secondary);
  color: var(--text-white);
}

.button-neutral.button-outline {
  background-color: transparent;
  border-color: var(--color-neutral);
  color: var(--text-secondary);
}
.button-neutral.button-outline:hover{
  background-color: var(--color-neutral);
  color: var(--text-secondary);
}

.button-error.button-outline {
  background-color: transparent;
  border-color: var(--color-error);
  color: var(--color-error);
}
.button-error.button-outline:hover{
  background-color: var(--color-error);
  color: var(--text-white);
}

.button-success.button-outline {
  background-color: transparent;
  border-color: var(--color-success);
  color: var(--color-success);
}
.button-success.button-outline:hover{
  background-color: var(--color-success);
  color: var(--text-white);
}

/* Additional styles for rounded corners */
.button-rounded {
  border-radius: 20px;
}

/* Disabeld button */
.button-disabled{
  opacity: 0.7;
  pointer-events: none;
}

/* Styles for icon */
.button-icon {
  margin-left: -8px;
  margin-right: 8px; /* Adjust spacing between icon and text */
  font-size: 1rem;
  line-height: 1rem;
}

/* Styles for button text */
.button-text {
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 500;
}
</style>

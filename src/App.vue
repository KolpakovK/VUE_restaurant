<script setup>
import VueLabel from "@/components/VueLabel.vue";
import VueButton from "@/components/VueButton.vue";
</script>

<template>
  <div class="app">
    <VueLabel displayText="Header large" size="header-large" color="accent"></VueLabel>
    <VueLabel displayText="Header medium" size="header-medium"></VueLabel>
    <VueLabel displayText="Header small" size="header-small"></VueLabel>
    <VueLabel displayText="Large paragraph" size="large" color="secondary"></VueLabel>
    <VueLabel displayText="Medium paragraph" size="medium" color="secondary"></VueLabel>
    <VueLabel displayText="Small paragraph" size="small" color="tertiary"></VueLabel>
    
    <VueButton icon="ri-presentation-fill" styleType="link">Hello it is a button</VueButton>
  </div>
</template>

<style scoped>

</style>

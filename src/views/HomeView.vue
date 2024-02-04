<script setup lang="ts">
import { onMounted } from "vue";
import { themeChange } from "theme-change";

onMounted(() => {
  themeChange(true);
});
</script>

<template>
  <div class="m-2 space-x-3">
    <select data-choose-theme>
      <option value="light">Default</option>
      <option value="dark">Dark</option>
      <option value="aqua">Aqua</option>
    </select>

    <button class="btn">Button</button>
    <button class="btn btn-neutral">Neutral</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn btn-link">Link</button>
  </div>
</template>

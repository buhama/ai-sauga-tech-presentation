<template>
  <div class="section-header" v-bind="$attrs">
    <div class="badge badge-primary" v-if="badge">{{ badge }}</div>
    <h1>{{ title }}</h1>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: String,
  badge: String
})
</script>

<style scoped>
.section-header {
  margin-bottom: var(--space-2xl);
}

.badge {
  margin-bottom: var(--space-md);
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-top: calc(var(--space-lg) * -1);
  max-width: 48rem;
}
</style>

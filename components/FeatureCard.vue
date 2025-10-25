<template>
  <div class="card" v-bind="$attrs">
    <h3 v-if="title" class="card-title">{{ title }}</h3>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style scoped>
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  height: 100%;
  transition: border-color 0.2s ease;
}

.card:hover {
  border-color: var(--text-tertiary);
}

.card-title {
  margin-top: 0;
  margin-bottom: var(--space-sm);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0;
}

.card-content {
  color: var(--text-secondary);
}

.card-content :deep(ul) {
  margin-top: var(--space-xs);
}

.card-content :deep(li) {
  margin-bottom: var(--space-xs);
  font-size: 0.875rem;
}

.card-content :deep(p) {
  font-size: 0.875rem;
  margin-bottom: var(--space-sm);
}
</style>

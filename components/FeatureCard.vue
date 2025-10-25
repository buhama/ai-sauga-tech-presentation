<template>
  <div class="section" v-bind="$attrs">
    <h3 v-if="title" class="section-title">{{ title }}</h3>
    <div class="section-content">
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
.section {
  padding: var(--space-lg) 0;
  height: 100%;
  border-top: 1px solid var(--border-primary);
}

.section-title {
  margin: 0 0 var(--space-md) 0;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.section-content {
  color: var(--text-secondary);
}

.section-content :deep(ul) {
  margin: 0;
  padding: 0;
}

.section-content :deep(li) {
  margin-bottom: var(--space-sm);
  font-size: 0.875rem;
  line-height: 1.6;
}

.section-content :deep(p) {
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
}
</style>

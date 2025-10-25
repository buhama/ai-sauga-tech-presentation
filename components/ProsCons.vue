<template>
  <div class="pros-cons-grid">
    <div class="pros" v-click>
      <h3 class="header">Pros</h3>
      <slot name="pros" />
    </div>

    <div class="cons" v-click>
      <h3 class="header">Cons</h3>
      <slot name="cons" />
    </div>
  </div>
</template>

<style scoped>
.pros-cons-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  margin-top: var(--space-lg);
}

.pros, .cons {
  padding: var(--space-lg) 0;
  border-top: 1px solid var(--border-primary);
}

.header {
  margin: 0 0 var(--space-md) 0;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pros :deep(li), .cons :deep(li) {
  font-size: 0.875rem;
  margin-bottom: var(--space-sm);
  line-height: 1.6;
}
</style>

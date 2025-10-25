<template>
  <div class="pros-cons-grid">
    <div class="pros" v-click>
      <div class="header">
        <h3>Pros</h3>
      </div>
      <slot name="pros" />
    </div>

    <div class="cons" v-click>
      <div class="header">
        <h3>Cons</h3>
      </div>
      <slot name="cons" />
    </div>
  </div>
</template>

<style scoped>
.pros-cons-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
}

.pros, .cons {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
}

.header {
  margin-bottom: var(--space-md);
}

.header h3 {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  text-transform: uppercase;
}

.pros :deep(li), .cons :deep(li) {
  font-size: 0.875rem;
  margin-bottom: var(--space-sm);
}
</style>

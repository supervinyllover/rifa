<template>
  <section class="page-section">
    <h2 class="page-section__title">Os discos</h2>
    <div class="page-section__content">
      <div class="discs-grid">
        <img
          v-for="(disc, index) in discs" :key="index"
          class="discs-grid__image"
          :src="disc.imageSmall"
          alt="Capa de disco"
          width="300"
          height="300"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    discs: {
      type: Array,
      required: true
    }
  }
})
</script>
<style>
.discs-grid {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  gap: 10px;
}

.discs-grid__image {
  max-width: calc(50% - 10px);
  height: auto;
}
</style>

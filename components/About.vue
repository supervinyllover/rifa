<template>
  <section class="page-section">
    <h2 class="page-section__title">Sobre</h2>
    <div class="page-section__content">
      <div class="page-section__column">
        <video width="300" height="532" controls>
          <source src="~/static/andrew-falando-sobre-os-discos-2.mp4" type="video/mp4">
        </video>
      </div>
      <div class="page-section__column" style="font-size: 20px;padding: 30px;line-height: 1.5;">
        <div v-html="aboutHTML" />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import marked from 'marked'

export default Vue.extend({
  props: {
    about: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      aboutHTML: marked((this as any).about[0].sobre)
    }
  }
})
</script>

<template>
  <div class="page-section">
    <h2 class="page-section__title">Dúvidas frequentes</h2>
    <div class="page-section__content">
      <div class="faq">
        <details v-for="(question, index) in faq" :key="index" class="faq__item">
          <summary class="faq__question">
            {{question.pergunta}}
          </summary>
          <p class="faq__answer" v-html="marked(question.resposta)" />
        </details>
      </div>
    </div>
  </div>
</template>

<script type="ts">
import Vue from 'vue'
import marked from 'marked'

export default Vue.extend({
  props: {
    faq: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      marked
    }
  }
})
</script>
<style>
.faq {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.faq__item {
  width: 100%;
  padding: 15px;
  border: 1px solid #fff;
  border-radius: 4px;
  margin-bottom: 15px;
  display: block;
  cursor: pointer;
}

.faq__answer {
  margin-top: 10px;
}
</style>

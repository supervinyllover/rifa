<template>
  <div>
    <Hero :discs="discs" />
    <DiscsGrid :discs="discs" />
    <Raffle :raffle="raffle" />
    <About :about="about" />
    <FAQ :faq="faq" />
    <PageFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from '~/components/Hero'
import Raffle from '~/components/Raffle'
import DiscsGrid from '~/components/DiscsGrid'
import About from '~/components/About'
import PageFooter from '~/components/PageFooter'
import FAQ from '~/components/FAQ'

export default Vue.extend({
  components: {
    Hero,
    Raffle,
    DiscsGrid,
    About,
    FAQ,
    PageFooter
  },
  async asyncData({$axios}) {

    const getUrl = (method: 'discs' | 'numbers' | 'about' | 'faq') => {
      const macroId = 'AKfycbxOGHWJzv9m7vC4CgoD0elthQNOih5Fa1bYv5LSyIC0FCcKOUxfu2q51p_4HHeTj3aw8w';
      return `https://script.google.com/macros/s/${macroId}/exec?method=${method}`;
    }

    return {
      discs: await $axios.$get(getUrl('discs')),
      raffle: await $axios.$get(getUrl('numbers')),
      about: await $axios.$get(getUrl('about')),
      faq: await $axios.$get(getUrl('faq'))
    }
  }
})
</script>

<style>
.page-section {
  background-color: #222;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;

}
.page-section__content {
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 40px 0;
}

@media (min-width: 768px) {
  .page-section__content {
    flex-direction: row;
    width: 100%;
  }
}

.page-section__title {
  font-weight: 600;
  font-size: 42px;
  margin: 40px 0;
}

.page-section__subtitle {
  margin: 0 0 40px 0;
}
</style>

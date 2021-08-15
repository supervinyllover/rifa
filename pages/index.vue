<template>
  <div class="container">
    <header class="hero">
      <div class="hero__section">
        <h1 class="hero__title">
          Quer ganhar 20 LPS pelo preço de apenas um?
        </h1>
        <p class="hero__subtitle">
          Participe de nossa fica com 20 clássicos do rock em vinil. Todos lacrados!
        </p>
        <img
          src="~/static/imavinyllover-logo.png"
          class="hero__image"
          width="556"
          height="376"
          alt="I'm a Vinyl Lover Logo"
        />
      </div>
      <div class="hero__section">
        <div class="discs-caroussel">
          <img
            class="discs-caroussel__image"
            :src="discs[currentDiscIndex].imageSmall"
            alt="Capa de disco"
            width="300"
            height="300"
            loading="lazy"
          />
          <ul class="discs-caroussel__control">
            <li
              :class="currentDiscIndex === index
                ? 'discs-caroussel__control__item--active'
                : 'discs-caroussel__control__item'"
              v-for="(disc, index) in discs"
              @click="currentDiscIndex = index"
              :key="index">
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section class="page-section">
      <div class="page-section__content">
        <h2 class="page-section__title">Os discos</h2>
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
    <section class="page-section">
      <h2 class="page-section__title">
        Escolha seu número
      </h2>
      <p class="page-section__subtitle">
        Selecione um número para enviar uma mensagem direto para o Andrew via WhatsApp
      </p>
      <ul class="raffle">
        <li
          :class="raffleNumber.vendido ? 'raffle__item--inactive' : 'raffle__item'"
          v-for="(raffleNumber, index) in raffle" :key="index">
          {{raffleNumber.numero}}
        </li>
      </ul>
    </section>
    <section class="page-section">
      <h2 class="page-section__title">Sobre</h2>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  created() {
    setInterval(() => {
      (this as any).currentDiscIndex = ((this as any).currentDiscIndex + 1) % (this as any).discs.length;
    }, 2500)
  },
  async asyncData({$axios}) {

    const getUrl = (method: 'discs' | 'numbers') => {
      const macroId = 'AKfycbxZiPlTQ7VDV_0rx4c_4RuczZwsLyiXJILMEfCnaXL3k6-HSJyEZJIBIT5uf_G98WxD6Q';
      return `https://script.google.com/macros/s/${macroId}/exec?method=${method}`;
    };

    const discs = await $axios.$get(getUrl('discs'));
    const raffle = await $axios.$get(getUrl('numbers'));

    return {
      discs,
      raffle,
      currentDiscIndex: 0,
    }
  }
})
</script>

<style>

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  min-height: calc(100vh - 60px);
}

@media (min-width: 768px) {
  .hero {
    flex-direction: row;
  }
}

.hero__title {
  line-height: 1.5;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 40px;
}

.hero__section {
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: center;
}

.hero__subtitle {
  font-size: 18px;
  text-transform: lowercase;
  line-height: 1.5;
}

.hero__image {
  width: 300px;
  height: auto;
  max-width: 100%;
}

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

.page-section__title {
  font-weight: 600;
  font-size: 42px;
  margin-bottom: 40px;
}

.page-section__subtitle {
  margin: 0 0 40px 0;
}

.container {
  flex-direction: column;
}

.discs-caroussel {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.discs-caroussel__image {
  margin: auto;
}

.discs-caroussel__control {
  display: flex;
  list-style: none;
  flex-direction: row;
  gap: 10px;
  padding: 0;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.discs-caroussel__control__item,
.discs-caroussel__control__item--active {
  cursor: pointer;
  width: 10px;
  height: 10px;
  background: var(--color-white);
  border-radius: 50%;
  opacity: .5;
}

.discs-caroussel__control__item--active {
  opacity: 1;
}

/**/
.raffle {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 1240px;
  list-style: none;
  font-size: 20px;
  gap: 3px;
}

.raffle__item,
.raffle__item--inactive {
  border: 1px solid #fff;
  width: calc(20% - 3px);
  line-height: 60px;
  justify-content: center;
  display: flex;
  cursor: pointer;
  transition: all ease-in-out .2s;
}

@media (min-width: 768px) {
  .raffle__item,
  .raffle__item--inactive {
    width: calc(10% - 3px);
  }
}

.raffle__item:hover {
  background: #fff;
  color: #333;
}

.raffle__item--inactive {
  opacity: .1;
  cursor: initial;
}
/**/
.discs-grid {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  gap: 10px;
}

.discs-grid__image {
  max-width: calc(50% - 10px);
}

</style>

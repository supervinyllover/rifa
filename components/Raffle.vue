<template>
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
        <a class="raffle__anchor" :href="`https://wa.me/5511971676491/?text=Oi,%20Andrew.%20Quero%20participar%20da%20rifa%20com%20o%20n%C3%BAmero%20${raffleNumber.numero}`">
          {{raffleNumber.numero}}
        </a>
      </li>
    </ul>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    raffle: {
      type: Array,
      required: true
    }
  }
})
</script>
<style>
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
.raffle__anchor {
  width: 100%;
  display: flex;
  justify-content: center;
  color: inherit;
  text-decoration: none;
}
</style>

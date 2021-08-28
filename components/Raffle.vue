<template>
  <section class="page-section">
    <h2 class="page-section__title">
      Escolha seu número
    </h2>
    <p class="page-section__subtitle">
      <span>Selecione um número para enviar uma mensagem direto para o Andrew via WhatsApp.</span>
      <span>Restam {{notSold}} números. Garanta o seu.</span>
    </p>
    <div class="progress-bar">
      <span class="progress-bar__bar" :style="`width: ${percent}%`"></span>
    </div>
    <ul class="raffle">
      <li
        :class="raffleNumber.vendido ? 'raffle__item--inactive' : 'raffle__item'"
        v-for="(raffleNumber, index) in items" :key="index">
        <a class="raffle__anchor" :href="`https://wa.me/5511971676491/?text=Oi,%20Andrew.%20Quero%20participar%20da%20rifa%20com%20o%20n%C3%BAmero%20${raffleNumber.numero}`">
          {{raffleNumber.numero}}
        </a>
      </li>
    </ul>
  </section>
</template>
<script lang="ts">
import Vue, {PropOptions} from 'vue'

interface RaffleInterface {
  numero: number | string;
  vendido: boolean;
}

export default Vue.extend({
  props: {
    raffle: {
      type: Array,
      required: true
    } as PropOptions<RaffleInterface[]>
  },
  data() {
    const items = (this as any).raffle.map(function(item: RaffleInterface): RaffleInterface {
      return {
        numero: Number(item.numero),
        vendido: item.vendido
      }
    });
    const percent = Math.ceil(items.length / 100 * items.filter((item: RaffleInterface) => item.vendido).length);
    const notSold = items.filter((item: RaffleInterface) => item.vendido !== true).length;

    return {
      items,
      percent,
      notSold
    }
  }
})
</script>
<style>
.progress-bar {
  background-color: #1a1a1a;
  height: 25px;
  padding: 5px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;
}

.progress-bar__bar {
  display: inline-block;
  height: 100%;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;
  transition: width .4s ease-in-out;
  background-color: #6e6e6e;
}
.raffle {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 1240px;
  list-style: none;
  font-size: 20px;
  gap: 3px;
  margin-top: 40px;
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

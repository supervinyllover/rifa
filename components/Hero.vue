<template>
  <header class="hero">
    <div class="hero__section">
      <h1 class="hero__title">
        {{text.titulo || '...' }}
      </h1>
      <p class="hero__subtitle">
        {{text.subtitulo || '...'}}
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
</template>
<script lang="ts">
import Vue, {PropOptions} from 'vue'

export default Vue.extend({
  created() {
    setInterval(() => {
      (this as any).currentDiscIndex = ((this as any).currentDiscIndex + 1) % (this as any).discs.length;
    }, 2500)
  },
  props: {
    text: {
      type: Object,
      required: true
    } as PropOptions<{titulo: string; subtitulo: string;}>,
    discs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentDiscIndex: 0
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
.discs-caroussel {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.discs-caroussel__image {
  margin: auto;
  max-width: 100%;
  height: auto;
}

.discs-caroussel__control {
  display: flex;
  list-style: none;
  flex-direction: row;
  gap: 10px;
  padding: 0;
  margin-top: 20px;
  margin-left: auto;
  flex-wrap: wrap;
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
</style>


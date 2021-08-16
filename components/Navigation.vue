<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        Os discos
      </li>
      <li class="navigation__item">
        Escolha seu número
      </li>
      <li class="navigation__item">
        Sobre
      </li>
    </ul>
  </nav>
</template>
<style>
.navigation__list {
  list-style: none;
  display: flex;
  padding: 0;
  max-width: 1240px;
  margin: auto;
}

.navigation {
  position: sticky;
  top: 0;
  background: #010101;
  width: 100%;
  border-bottom: 1px solid #fff;
  z-index: 1;
}

.navigation__item {
  padding: 20px;
}
</style>

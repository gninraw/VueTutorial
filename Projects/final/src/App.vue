<template>
  <div class="page-container">
    <md-app>
      <md-app-content>
        <router-view/>
      </md-app-content>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title"> Vue.js 예제 모음 </span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar  md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense " @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list class="left-drawer">
          <md-list-item to="/">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">HOME</span>
          </md-list-item>

          <md-list-item to="/ex1">
            <md-icon>filter_1</md-icon>
            <span class="md-list-item-text"> 보간법 </span>
          </md-list-item>

          <md-list-item to="/ex2">
            <md-icon>filter_2</md-icon>
            <span class="md-list-item-text"> v-bind </span>
          </md-list-item>

          <md-list-item to="/ex3">
            <md-icon>filter_3</md-icon>
            <span class="md-list-item-text"> v-model </span>
          </md-list-item>

          <md-list-item to="/ex4">
            <md-icon>filter_4</md-icon>
            <span class="md-list-item-text"> v-on </span>
          </md-list-item>

          <md-list-item to="/ex5">
            <md-icon>filter_5</md-icon>
            <span class="md-list-item-text"> v-for </span>
          </md-list-item>

          <md-list-item to="/ex6">
            <md-icon>filter_6</md-icon>
            <span class="md-list-item-text"> v-if </span>
          </md-list-item>

          <md-list-item to="/ex7">
            <md-icon>filter_7</md-icon>
            <span class="md-list-item-text"> watch/compute </span>
          </md-list-item>

          <md-list-item to="/ex8">
            <md-icon>filter_8</md-icon>
            <span class="md-list-item-text"> life cycle </span>
          </md-list-item>

          <md-list-item to="/ex9">
            <md-icon>filter_9</md-icon>
            <span class="md-list-item-text"> 콤포넌트 </span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'PersistentFull',
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
    z-index: 100;
  }
</style>
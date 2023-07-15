<script setup>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Header, HeaderNav, HeaderNavItem } from "agnostic-vue";
</script>
<template>
  <Header isHeaderContentStart>
    <template v-slot:headernav>
      <HeaderNav css="header-flex-fill">
        <HeaderNavItem>
          <a href="">Tomatoes</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="">Projects</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="">Scores</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="">Settings</a>
        </HeaderNavItem>
      </HeaderNav>
    </template>
  </Header>
</template>

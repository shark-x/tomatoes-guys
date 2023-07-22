<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-tabs
            v-model="tab"
            align="left"
            inline-label
            indicator-color="lime-dark"
            class="bg-lime text-dark shadow-2 "
        >
          <q-route-tab name="home" icon="timer" label="Tomatoes" to="/"/>

          <q-route-tab name="projects" icon="apps" label="Projects" to="/projects"/>

          <q-route-tab name="scores" icon="emoji_events" label="Scores" to="/scores"/>

        </q-tabs>
  </q-header>
</template>

<script setup>
import { ref } from 'vue'
const tab= ref('mails')
</script>

<style>
</style>

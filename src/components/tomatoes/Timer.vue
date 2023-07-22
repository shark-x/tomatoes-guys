<template>
  <p>TypeTimer: {{typeTimer}}</p>
  <div>
    {{minutes}} : {{seconds}}
  </div>
  <q-btn v-if="workTimer.stopped" @click="startWorkTimer">Start</q-btn>
  <q-btn v-if="workTimer.active" @click="pauseWorkTimer">Pause</q-btn>
  <q-btn v-if="workTimer.paused" @click="continueWorkTimer">Continue</q-btn>
  <q-btn v-if="workTimer.paused" @click="stopWorkTimer">Stop</q-btn>
  <q-btn v-if="relaxTimer.stopped" @click="startRelaxTimer">Start</q-btn>
  <q-btn v-if="relaxTimer.active" @click="pauseRelaxTimer">Pause</q-btn>
  <q-btn v-if="relaxTimer.paused" @click="continueRelaxTimer">Continue</q-btn>
  <q-btn v-if="relaxTimer.paused" @click="stopRelaxTimer">Stop</q-btn>
</template>

<script setup>
import {reactive, ref} from 'vue'

let typeTimer = ref('work');

const workTimer = reactive({
  active: false,
  paused: false,
  stopped: true
})

const relaxTimer = reactive({
  active: false,
  paused: false,
  stopped: false
})

let minutes = ref(1);
let seconds = ref(0);
let timerId = null;

function startWorkTimer(){
  minutes.value=0
  seconds.value=13
  workTimer.stopped=false
  workTimer.active=true

  timerId = setInterval(() => {
    if (minutes.value === 0 && seconds.value === 0) {
      clearInterval(timerId)
      timerId=null
      workTimer.active=false
      workTimer.paused=false
      workTimer.stopped=false
      relaxTimer.stopped=true
      typeTimer.value = 'relax'
      console.log(workTimer,relaxTimer)
      console.log('Время истекло!')
    } else {
      if (seconds.value === 0) {
        minutes.value--;
        seconds.value = 59;
      } else {
        seconds.value--;
      }
      console.log(minutes, seconds);
    }
  }, 1000)
}

function pauseWorkTimer(){
  workTimer.active=false
  workTimer.paused=true
  console.log('Pause workTimer')
}

function continueWorkTimer(){
  workTimer.active=true
  workTimer.paused=false
  console.log('Continue workTimer')
}

function stopWorkTimer(){
  clearInterval(timerId)
  timerId=null
  workTimer.active=false
  workTimer.paused=false
  workTimer.stopped=true
  console.log('Stop workTimer')
}

function startRelaxTimer(){
  minutes.value = 0
  seconds.value = 10
  relaxTimer.stopped=false
  relaxTimer.active=true

  timerId = setInterval(() => {
    if (minutes.value === 0 && seconds.value === 0) {
      clearInterval(timerId)
      timerId=null
      relaxTimer.active=false
      relaxTimer.paused=false
      relaxTimer.stopped=false
      workTimer.stopped=true
      typeTimer.value = 'work'
      console.log('Время отдыха истекло!')
    } else {
      if (seconds.value === 0) {
        minutes.value--;
        seconds.value = 59;
      } else {
        seconds.value--;
      }
      console.log(minutes, seconds);
    }
  }, 1000)
}

function pauseRelaxTimer(){
  relaxTimer.active=false
  relaxTimer.paused=true
  console.log('Pause relaxTimer')
}

function continueRelaxTimer(){
  relaxTimer.active=true
  relaxTimer.paused=false
  console.log('Continue relaxTimer')
}

function stopRelaxTimer(){
  clearInterval(timerId)
  timerId=null
  relaxTimer.active=false
  relaxTimer.paused=false
  relaxTimer.stopped=true
  typeTimer.value = 'relax'
  console.log('Stop workTimer')
}

</script>

<style lang="scss">
</style>

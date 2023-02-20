<template>
    <div id="timer" :style="customStyle">
      <div id="timedisplay">
        {{minutes}}:{{twoDigitSeconds()}}
      </div>
      <button @click="runTimer" :disabled="myTimer !== null">
        {{props.startLabel}}
      </button>
      <button @click="pauseTimer">
        Pause
      </button>
    </div>
  </template>
  <script setup lang="ts">
    import {ref, defineProps, computed, withDefaults} from "vue"
    type TimerProp = {
      updateInterval: number,
      startLabel: string,
      faceColor: string
    }
    const props = withDefaults(defineProps<TimerProp>(),
        {
           updateInterval: 1000,
           startLabel: "Start",
           faceColor: "transparent"
        })
    const seconds = ref(0)
    const minutes = ref(0)
    let myTimer: Ref<number | null> = ref(null)
    
    function twoDigitSeconds() {
      return seconds.value.toLocaleString('en-US', { minimumIntegerDigits: 2})
    }
    function updateTime() {
      seconds.value++;
      if (seconds.value === 60) {
        minutes.value++
        seconds.value = 0
      }
    }
    function runTimer() {
      // Update the time once every second (1000 milliseconds)
      myTimer.value = setInterval(updateTime, props.updateInterval)
    }
    
    function pauseTimer() {
      if (myTimer.value !== null) {
         clearInterval(myTimer.value)
         myTimer.value = null
      }
    }
    
    const customStyle = computed(() => {
      return {
        backgroundColor: props.faceColor,
      }
    })
  </script>
  <style>
    #timer {
      display: inline-block;
      border: 2px solid gray;
      border-radius: 8px;
      width: 120px;
      text-align:center;
      padding-bottom: 4px;
    }
    #timedisplay {
      font-size: 280%;
    }
  </style>
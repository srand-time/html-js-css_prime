<template>
  <div id="app">
    <!--
    <img src="./assets/logo.png">
    <router-view/>
    -->
    <input-text v-bind:isshow="$root.flag"></input-text>
    <resume-btu v-bind:isshow="$root.flag"></resume-btu>
    <countup-btu v-bind:isshow="$root.flag"></countup-btu>
    <countdown-btu v-bind:isshow="$root.flag"></countdown-btu>
    <pause-btu v-bind:isshow="$root.flag"></pause-btu>
    <clear-btu v-bind:isshow="$root.flag"></clear-btu>
    <restart-btu v-bind:isshow="$root.flag"></restart-btu>
    <span id="time">{{$root.message}}</span>
    <span id="hint">{{$root.message2}}</span>
  </div>
</template>

<script>
import ResumeBtu from './components/ResumeBtu'
import CountupBtu from './components/CountupBtu'
import CountdownBtu from './components/CountdownBtu'
import PauseBtu from './components/PauseBtu'
import ClearBtu from './components/ClearBtu'
import RestartBtu from './components/RestartBtu'
import InputText from './components/InputText'
export default {
  name: 'App',
  components: {
    ResumeBtu, CountupBtu, PauseBtu, ClearBtu, CountdownBtu, RestartBtu, InputText
  }
}
</script>

<style>
#app {
  color: #b2bd17;
  margin-top: 60px;
  background-color:blue;
}
#time {
    font-family: PTMono-Bold, "PT Mono", monospace;
    font-weight: 700;
    font-size: 200px;
    color: #333333;
    position: absolute;
    left: 131px;
    top: 197px;
}
#hint {
    position: absolute;
    left: 40px;
    top: 24px;
    width: 167px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    color: #FFFFFF;
}
</style>

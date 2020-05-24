<template>
    <div>
      <input type="button" @click="pause" value="暂停计时器" id="pause"
      v-show="(isshow==1)||(isshow==2)"
      style="{
        width: 98px;
        height: 40px;
        color: #FFFFFF;
        position: absolute;
        left: 227px;
        top: 15px;
        border-radius: 5px;
        background-color: #2188E9;
        border-color: #2188E9;
      }"
      />
    </div>
</template>
<script>
export default {
  props:
  {
    isshow: {
      type: Number
    }
  },
  methods: {
    pause: function () {
      if (this.$root.flag === 1) {
        this.$root.flag = 3
        clearTimeout(this.$root.seti)
      } else if (this.$root.flag === 2) {
        this.$root.flag = 4
        clearInterval(this.$root.seti)
        this.$root.message2 = '暂停倒计时' + ' ' + this.$root.inputhour + ':' + this.$root.inputminute + ':' + this.$root.inputsecond
      }
    }
  }
}
</script>

<template>
    <div>
      <input type="button" @click="clear" value="清除倒计时" id="clear"
      v-show='isshow!=0'
      style="{
        width: 98px;
        height: 40px;
        color: #FFFFFF;
        position: absolute;
        left: 964px;
        top: 15px;
        border-radius: 5px;
        background-color: #DD2E1D;
        border-color: #DD2E1D;
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
    clear: function () {
      if (this.$root.flag === 1) {
        clearTimeout(this.$root.seti)
      }
      if (this.$root.flag === 2) {
        clearInterval(this.$root.seti)
      }
      this.$root.flag = 0
      this.resettime()
      this.$root.message2 = ''
    },
    resettime: function () {
      this.$root.hour_1 = 0
      this.$root.hour_2 = 0
      this.$root.minute_1 = 0
      this.$root.minute_2 = 0
      this.$root.second_1 = 0
      this.$root.second_2 = 0
      this.$root.message = this.$root.hour_1 + '' + this.$root.hour_2 + ':' + this.$root.minute_1 + this.$root.minute_2 + ':' + this.$root.second_1 + this.$root.second_2
    }
  }
}
</script>

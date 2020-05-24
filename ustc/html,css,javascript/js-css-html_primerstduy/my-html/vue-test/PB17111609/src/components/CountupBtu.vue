<template>
    <div>
      <input type="button" @click="countup" value="开始正计时" id="countup"
      v-show='isshow==0'
      style="{
        width: 98px;
        height: 40px;
        color: #FFFFFF;
        position: absolute;
        left: 310px;
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
    countup: function () {
      this.$root.flag = 1
      this.$root.second_2++
      if (this.$root.second_2 === 10) { this.$root.second_1++; this.$root.second_2 = 0 }
      if (this.$root.second_1 === 6) { this.$root.minute_2++; this.$root.second_1 = 0 }
      if (this.$root.minute_2 === 10) { this.$root.minute_1++; this.$root.minute_2 = 0 }
      if (this.$root.minute_1 === 6) { this.$root.hour_2++; this.$root.minute_1 = 0 }
      if (this.$root.hour_2 === 10) { this.$root.hour_1++; this.$root.hour_2 = 0 }
      this.$root.message = this.$root.hour_1 + '' + this.$root.hour_2 + ':' + this.$root.minute_1 + this.$root.minute_2 + ':' + this.$root.second_1 + this.$root.second_2
      this.$root.seti = setTimeout(this.countup, 1000)
    }
  }
}
</script>

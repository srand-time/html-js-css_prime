<template>
    <div>
      <input type="button" @click="resume" value="恢复计时器" id="resume"
      v-show="(isshow==3)||(isshow==4)"
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
    resume: function () {
      if (this.$root.flag === 3) {
        this.$root.flag = 1
        this.$root.seti = setTimeout(this.countup, 1000)
      } else if (this.$root.flag === 4) {
        this.$root.flag = 2
        this.$root.seti = setInterval(this.countdown2, 1000)
        this.$root.message2 = '正在倒计时' + ' ' + this.$root.inputhour + ':' + this.$root.inputminute + ':' + this.$root.inputsecond
      }
    },
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
    },
    countdown2: function () {
      if (this.$root.lefttime >= 1) {
        this.$root.lefttime = this.$root.lefttime - 1
      }
      this.$root.lefthour = '' + (parseInt(this.$root.lefttime / 3600))
      this.$root.leftminute = '' + (parseInt((this.$root.lefttime % 3600) / 60))
      this.$root.leftsecond = '' + (parseInt(this.$root.lefttime % 60))
      // 辣鸡浮点数和字符串搞人心态。
      // javascript是弱类型语言，用除法会保留小数。
      // parseInt
      if (this.$root.lefthour < 10) {
        this.$root.lefthour = '0' + this.$root.lefthour
      } else if (this.$root.lefthour === 0) {
        this.$root.lefthour = '00'
      }
      if (this.$root.leftminute < 10) {
        this.$root.leftminute = '0' + this.$root.leftminute
      } else if (this.$root.leftminute === 0) {
        this.$root.leftminute = '00'
      }
      if (this.$root.leftsecond < 10) {
        this.$root.leftsecond = '0' + this.$root.leftsecond
      } else if (this.$root.leftsecond === 0) {
        this.$root.leftsecond = '00'
      }
      this.$root.message = this.$root.lefthour + ':' + this.$root.leftminute + ':' + this.$root.leftsecond
      if (this.$root.lefttime <= 0) {
        clearInterval(this.$root.setid)
        this.$root.flag = 5
        this.$root.message2 = '倒计时' + ' ' + this.$root.inputhour + ':' + this.$root.inputminute + ':' + this.$root.inputsecond + '已结束'
      }
    }
  }
}
</script>

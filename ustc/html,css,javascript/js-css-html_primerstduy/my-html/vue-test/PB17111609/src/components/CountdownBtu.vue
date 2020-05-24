<template>
    <div>
      <input type='button' @click='countdown' value='开始倒计时' id='countdown'
      v-show='isshow==0'
      style='{
        width: 98px;
        height: 40px;
        color: #FFFFFF;
        position: absolute;
        left: 428px;
        top: 15px;
        border-radius: 5px;
        background-color: #2188E9;
        border-color: #2188E9;
      }'
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
    countdown: function () {
      this.$root.flag = 2
      this.initial_countdown()
      this.$root.seti = setInterval(this.countdown2, 1000)
    },

    initial_countdown: function () {
      if (this.$root.inputminute > 59) { this.$root.inputminute = 59 }
      if (this.$root.inputsecond > 59) { this.$root.inputsecond = 59 }
      this.$root.lefttime = (Number(this.$root.inputhour * 3600) + Number(this.$root.inputminute * 60) + Number(this.$root.inputsecond))
      this.$root.lefthour = this.$root.inputhour
      this.$root.leftminute = this.$root.inputminute
      this.$root.leftsecond = this.$root.inputsecond

      if (this.$root.lefthour < 10 && this.$root.lefthour > 0) this.$root.lefthour = '0' + this.$root.lefthour
      else if (this.$root.lefthour === 0) this.$root.lefthour = '00'
      if (this.$root.leftminute < 10 && this.$root.leftminute > 0) this.$root.leftminute = '0' + this.$root.leftminute
      else if (this.$root.leftminute === 0) this.$root.leftminute = '00'
      if (this.$root.leftsecond > 0 && this.$root.leftsecond < 10) this.$root.leftsecond = '0' + this.$root.leftsecond
      else if (this.$root.leftsecond === 0) this.$root.leftsecond = '00'
      this.$root.message2 = '正在倒计时' + ' ' + this.$root.lefthour + ':' + this.$root.leftminute + ':' + this.$root.leftsecond
      this.$root.message = this.$root.lefthour + ':' + this.$root.leftminute + ':' + this.$root.leftsecond
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
        clearInterval(this.$root.seti)
        this.$root.flag = 5
        this.$root.message2 = '倒计时' + ' ' + this.$root.inputhour + ':' + this.$root.inputminute + ':' + this.$root.inputsecond + '已结束'
      }
    }
  }
}
</script>

<template>
    <div id="input-text">
        <div v-show='isshow==0'>
      <input type="number" name="" placeholder="0" id="hour" maxlength="2" v-model="$root.inputhour"
               onkeyup="this.value=this.value.replace(/\D/g,'')">
        <label for="hour" id="hour-label">时</label>
        <input type="number" name="" placeholder="0" id="minute" maxlength="2" v-model="$root.inputminute"
               onkeyup="this.value=this.value.replace(/\D/g,'')">
        <label for="minute" id="minute-label">分</label>
        <input type="number" name="" placeholder="0" id="second" maxlength="2" v-model="$root.inputsecond"
            onkeyup="this.value=this.value.replace(/\D/g,'')">
        <label for="second" id="second-label">秒</label>
        </div>
    </div>
</template>

<script>
export default {
  props:
  {
    isshow: {
      type: Number
    }
  }
}
</script>

<style scoped>
#input-text {
    width: 1300px;
    height:70px;
    position: absolute;
    left: 0px;
    top: 0px;
    font-size: 16px;
    font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
    background-color:#79A597;
}
#hour {
    box-shadow: 0px,2px,4px,0px;
    border-radius: 5px;
    width: 70px;
    height: 40px;
    position: absolute;
    left: 40px;
    top: 15px;
    color: #AFAFAF;
}

#hour-label {
    position: absolute;
    left: 69px;
    top: 24px;
    width: 32px;
    height: 22px;
    color: #222222;
    text-align: right;
}

#minute {
    border-radius: 5px;
    width: 70px;
    height: 40px;
    position: absolute;
    left: 130px;
    top: 15px;
    color: #AFAFAF;
}

#minute-label {
    position: absolute;
    left: 159px;
    top: 24px;
    width: 32px;
    height: 22px;
    color: #222222;
    text-align: right;
}

#second {
    border-radius: 5px;
    width: 70px;
    height: 40px;
    position: absolute;
    left: 220px;
    top: 15px;
    color: #AFAFAF;
}

#second-label {
    position: absolute;
    left: 249px;
    top: 24px;
    width: 32px;
    height: 22px;
    color: #222222;
    text-align: right;
}
</style>>

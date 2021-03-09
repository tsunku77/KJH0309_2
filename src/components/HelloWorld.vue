<template>
  <div>
    <h1 :class="testClass">{{dataTest}}</h1>
    <button type="button" :class="btn_css" @click="btn_start">{{btn1}}</button>
    <button type="button" :class="btn_css" @click="btn_stop">{{btn2}}</button>
    <button type="button" :class="btn_css" @click="btn_reset">{{btn3}}</button>
    <input type="text" v-model="mname">
    <input type="button" v-model="btn" @click="btn_time(mname)"><br>
    <input id="num_id" :class="answer" v-model="answer_box">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      dataTest : 0,
      testClass:"test",
      btn1:"START", btn2:"STOP", btn3:"Reset",
      btn_css:"btn_css",
      mname:"",
      btn:"확인",
      answer:"answer",answer_box:""
    }
  },
  methods: {
    btn_time(num){
      if(num<10){   //1~10
        document.getElementById('num_id').style.color="red";
        this.answer_box = (`00:0${num}`);
      }
      else if(num>10 && num<60){  //10~60
        document.getElementById('num_id').style.color="black";
        this.answer_box = (`00:${num}`);
      }
      else{  //60이상
        this.min = Math.floor(num/60);
        this.sec = num - (60*this.min);

        this.min2 = this.min.toString();
        this.sec2 = this.sec.toString();

        if(this.min2.length===1 && this.sec2.length===1){
          this.answer_box = (`0${this.min}:0${this.sec}`);
        }
        else if(this.min2.length===1 && this.sec2.length===2){
          this.answer_box = (`0${this.min}:${this.sec}`);
        }
        else if(this.min2.length===2 && this.sec2.length===1){
          this.answer_box = (`${this.min}:0${this.sec}`);
        }
        else {
          this.answer_box = (`${this.min}:${this.sec}`);
        }
      }
    },



    btn_start(){
      this.time = setInterval(()=>{
        this.dataTest++
        if(this.dataTest===60){
          clearInterval(this.time)
        }
      },1000);
    },
    btn_stop(){
      clearInterval(this.time)
    },
    btn_reset(){
      this.dataTest = 0
      clearInterval(this.time)
    }

    // test(){
    //   setTimeout(()=>{
    //
    //   },1000)
    // }
  } //methods닫기
}
</script>

<style scoped>
  .test {color:red;}
  .btn_css {
    width:100px; height:30px;
    color:white; background: green;
    border:1px solid black;
    margin:5px; cursor:pointer;
  }
  .btn_css:hover{
    color:green; background: white;
  }

  .answer{
    margin:0 auto; margin-top:10px;
    width:100px; height:30px;
    border:1px solid black;
    font-size:20px;
    color:black; text-align: center;
  }
</style>

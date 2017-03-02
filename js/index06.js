window.onload=function(){
  var box=document.getElementById("box");
  var wutai =box.getElementsByClassName("wutai");
  var gs=5;
  var neirong= '<div class="wutai"><div class="mofang qian"></div><div class="mofang hou"></div><div class="mofang left"></div><div class="mofang right"></div><div class="mofang top"></div><div class="mofang buttom"></div></div>';
  var dom="";
  for(var i=0;i<gs;i++){
    dom+=neirong;
  }
  box.innerHTML=dom;
  var dian=0;
  box.onclick=function(){
    dian++;
    var jiaodu=dian*90;
    for(var i=0;i<gs;i++){
      wutai[i].style="transition:transform 1s "+100*i+"ms;transform:rotateX("+jiaodu+"deg)";
      }
  }
  setInterval(function(){
    dian++;
    var jiaodu=dian*90;
    for(var i=0;i<gs;i++){
      wutai[i].style="transition:transform 1s "+100*i+"ms;transform:rotateX("+jiaodu+"deg)";
      }
  },3000)
}

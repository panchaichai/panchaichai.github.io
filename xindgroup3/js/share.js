<script type="text/javascript">
var timer=null;
window.onresize=window.onscroll = window.onload=function()
{
 var oDiv=document.getElementByIdx_x('div1');
 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
 startMove2(scrollTop + (document.documentElement.clientHeight - oDiv.offsetHeight)/2);

 oDiv.onmouseover = function()
 {
  startMove(0);
 };
 oDiv.onmouseout = function()
 {
  startMove(-100);
 };
}
function startMove(iTagget)
{
 clearInterval(timer);
 timer=setInterval(function()
 {
  doMove(iTagget);
 },30);
}
function doMove(iTagget)
{
 var oDiv=document.getElementByIdx_x('div1');
 var iSpeed = 0;
 if(oDiv.offsetLeft==iTagget){
  clearInterval(timer);
 }else
 {
  if(oDiv.offsetLeft>iTagget)
  {
   iSpeed = -10;
  }
  else
  {
   iSpeed = 10;
  }
  
  oDiv.style.left = oDiv.offsetLeft+iSpeed+'px';
 } 
}
function startMove2(iTagget)
{
 clearInterval(timer);
 timer=setInterval(function()
 {
  doMove2(iTagget);
 },30);
}
function doMove2(iTagget)
{
 var oDiv=document.getElementByIdx_x('div1');
 var iSpeed = (iTagget-oDiv.offsetTop)/5;
    window.status = iSpeed; 
 if(oDiv.offsetTop==iTagget){
  clearInterval(timer);
 }else
 {
  oDiv.style.top = oDiv.offsetTop + iSpeed + 'px';
 } 
}
</script>
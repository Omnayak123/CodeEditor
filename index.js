function initialize(){
    var html=document.querySelector("#html").value;
    var css="<style>"+document.querySelector("#css").value+"</style>";
    var js=document.querySelector("#js").value;
    var code=document.querySelector("#code");
   code.contentDocument.body.innerHTML=html+css;
   code.contentWindow.eval(js);
} 
document.querySelector("#html").addEventListener("keyup",initialize);
document.querySelector("#css").addEventListener("keyup",initialize);
document.querySelector("#js").addEventListener("keyup",initialize);
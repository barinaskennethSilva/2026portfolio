let start = Date.now();

function recordEngagedView(){
  
}
window.addEventListener("visibilitychange", () =>{
  if (document.visibilityState === "hidden"){
  let seconds = (Date.now() - start) / 1000;
  if (seconnds > 30) recordEngagedView();
  }
})
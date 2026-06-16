window.mySkillsFunc = function(){
  const skillsetId = document.getElementById('skillsetId');
  if(getComputedStyle(skillsetId).display === "none"){
    skillsetId.style.display = "block";
  }
  else{
  skillsetId.style.display = "none";
  }
}
let project =[{"img":"img/ChicksGPT.jpg","name":"ChicksGPT","techStock":"html,Django","intro":"ChicksGPT is a prototype artificial intelligence system developed using a Transformer architecture.","link":"https://github.com/barinaskennethSilva/ADA_WONG_AI"},{"img":"img/pw1.jpg","name":"ChatWeb","techStock":"Vuejs,PHP","intro":"A chatbox website that allow user to send message in realtime."},{"img":"img/hunt.jpg","name":"Animal Hunting","techStock":"Python","intro":"Start hunt animals for coins."},{"img":"img/pokeMo.jpg","name":"pokeMo","techStock":"Python","intro":"Come and catch pokemon.","link":"https://github.com/barinaskennethSilva/Pokemo"}]
const output = document.getElementById("output");
project.forEach(function(project){
output.innerHTML += `  <div class="game-card">      <img src='${project.img.trim()}'alt='${project.img}'><h3>${project.name}</h3><p>${project.intro}</p><span>${project.techStock}</span>      <div class="likeView"><button class="btnLike" data-btnprog_name='${project.name}'><i class="fa fa-thumbs-up"></i><p class="likeVal" id="like-${project.name}">0</p></button><button ><i class="fa fa-eye"></i><p id="numbView">0</p></button></div>
      <a href='${project.link}' class="play-btn">View Documentation</a></div>`;  
});


const btnLike = document.querySelectorAll(".btnLike");
 
btnLike.forEach(button => {
  const project = button.dataset.btnprog_name;

  let likes = parseInt(localStorage.getItem(project)) || 0;
//localStorage.removeItem(project);
  const likeDisplay = document.getElementById(`like-${project}`);
  likeDisplay.textContent = likes;

  button.addEventListener("click", () => {
    likes++;
    localStorage.setItem(project, likes);
    likeDisplay.textContent = likes;
    
  });
});
  

/*scrollimg function*/
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('active');
      observer.unobserve(entry.target);
      }
    });
  },{
      treshold:0.15,
      rootMargin: "0px 0px -50px 0px"
    });
  const hiddenElements = document.querySelectorAll('.myheader');
hiddenElements.forEach((el)=>
  observer.observe(el));
  
window.mySkillsFunc = function(){
  const skillsetId = document.getElementById('skillsetId');
  if(getComputedStyle(skillsetId).display === "none"){
    skillsetId.style.display = "block";
  }
  else{
  skillsetId.style.display = "none";
  }
}
let project =[{"img":"img/ChicksGPT.jpg","name":"ChicksGPT","techStock":"html,Django","intro":"ChicksGPT is a prototype artificial intelligence system developed using a Transformer architecture.","link":"https://github.com/barinaskennethSilva/ADA_WONG_AI"},{"img":"img/pw1.jpg","name":"ChatWeb","techStock":"Vuejs,PHP","intro":"A chatbox website that allow user to send message in realtime."},{"img":"img/hunt.jpg","name":"Animal Hunting","techStock":"Python","intro":"Start hunt animals for coins."},{"img":"img/pokeMo.jpg","name":"pokeMo","techStock":"Python","intro":"Come and catch pokemon.","link":"https://github.com/barinaskennethSilva/Pokemo"},{"img":"img/DataAnalyst.jpg","name":"Analysis Data Company Expenses","techStock":"Excel","intro":"This project tracks and analyzes company expense data to uncover spending patterns and highlight areas for cost reduction.","link":"#"}]
const output = document.getElementById("output");
project.forEach(function(project){
output.innerHTML += `  <div class=" proj-card">      <img src='${project.img.trim()}'alt='${project.img}' class="mobile-view"><img src='${project.img.trim()}'alt='${project.img}'class="desktop-view"><div class="prof-title"><h3>${project.name}</h3><div class="proj-status"><label>In Progress</label></div></div><p>${project.intro}</p><span>${project.techStock}</span>      <div class="likeView"><button class="btnLike" data-btnprog_name='${project.name}'><i class="fa fa-thumbs-up"></i><p class="likeVal" id="like-${project.name}">0</p></button><button ><i class="fa fa-eye"></i><p id="numbView">0</p></button></div>
      <a href='${project.link}' class="play-btn">Sign In to Review</a></div>`;  
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
	

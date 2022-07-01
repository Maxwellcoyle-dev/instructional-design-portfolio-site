

/* PORTFOLIO PAGE SCROLLING */
const downTrigger = document.getElementById('project-page-down-trigger');

const downPoint = document.getElementById('down-point');


downTrigger.addEventListener('click', (ev)=>{
  downPoint.scrollIntoView({
    behavior: 'smooth' 
  });
});

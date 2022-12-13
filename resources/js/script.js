const mobileSideNav=document.getElementById('mobileSideNav');

function openSidebar(){
    let id = null;
  let pos = -50;
    mobileSideNav.style.display='block';
    clearInterval(id);
  id = setInterval(frame, 3);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos++; 
      mobileSideNav.style.right = pos + "%"; 
    }
  }
}


function closeSidebar(){
    let id = null;
  let pos = 0;
    clearInterval(id);
  id = setInterval(frame, 3);
  function frame() {
    if (pos == -50) {
      clearInterval(id);
      mobileSideNav.style.display='none';
    } else {
      pos--; 
      mobileSideNav.style.right = pos + "%"; 
    }
  }

}

function myFunction(element) {
  element.style.display='block';
  element.classList.add("fadeIn-animation");
}

function removeclassFunction(element) {
  element.classList.remove("fadeIn-animation");
}

const scrollElements = document.querySelectorAll(".fadeIn");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
const handleScrollAnimation = () => {
  
 scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      console.log("animateFadeIn")
      myFunction(el);
    } else if (elementOutofView(el)) {
      removeclassFunction(el)
    }
 })
}

window.addEventListener("scroll", () => { 
 handleScrollAnimation();
});

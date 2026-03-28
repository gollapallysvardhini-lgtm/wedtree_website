function getSublist(event,value){
    event.stopPropagation();


   
    const currentMenu = document.getElementById(value);
    // var display = windows.getComputedStyle(currentMenu).style;
    // if(display === 'none'){
    //   currentMenu.style.display = 'block'
    // }
    if(!currentMenu) return;

    

    const parentLi = currentMenu.parentElement;
    parentLi.style.color="white";
    parentLi.style.backgroundColor="#560835"
    parentLi.style.padding="0px"
    parentLi.style.top="10px"
    parentLi.style.borderRadius="15px";
    
    const siblingis = parentLi.parentElement.children;
     
    for(let li of siblingis){
        if(li !== parentLi){
            const ul = li.querySelector("ul");
            if (ul) ul.style.display = "none";
        }
    }

        const isVisible = currentMenu.style.display === "none";
       currentMenu.style.display = isVisible ? "none" : "block";

    
    
}


var navMenu = document.getElementById("nav-menu");
      var navbg = document.getElementById("dropdown-bg");
      navMenu.style.left = "-300px";
      // navMenu.style.right = "-300px"; //right side button dropdown
      var viewPortHeight = window.innerHeight;

      //  leftside button dropdown

      function toggleDropdown(value) {
        if (value === "dropdown") {
          if (navMenu.style.left === "0px") {
            navMenu.style.left = "-300px";
            navMenu.style.transitionDuration = "2s";
            navMenu.style.transitionProperty = "right";
            navbg.style.position = "static";
            navbg.style.backgroundColor = "transparent";
          } else {
            navMenu.style.left = "0px";
            navMenu.style.transitionDuration = "2s";
            navMenu.style.transitionProperty = "left";
            navMenu.style.backgroundColor = "white";
            navMenu.style.height = viewPortHeight + "px";
            navbg.style.position = "fixed";
            navbg.style.backgroundColor = "rgb(18,16,16,0.5)";
            navbg.style.display = "block";
          }
        }
      }

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myToggleFunction() {
  let navs = document.getElementsByTagName("nav");
  let firstNav = navs[0];
  
  firstNav.style.display === "flex" ? firstNav.style.display = "none" 
  : firstNav.style.display = "flex";
  } 
function dropdownMenu() {
   var x = document.getElementById("dropdownClick");
   if (x.className === "topnav") {
      x.className += " responsive";
      /*change topnav to topnov.responsive*/
   }
   else {
      x.className = "topnav";
   }
}
//Popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
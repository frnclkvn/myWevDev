function toggleDropDown() {
   let navBarToggle = document.getElementById("navbar-toggle");
   if (navBarToggle.className === 'topNav') {
      navBarToggle.className += ' responsive';
   }
   else
   {
      navBarToggle.className = 'topNav';
   }
}
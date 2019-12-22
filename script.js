/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  console.log("opening menu");
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("left").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  console.log("closing menu");
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("left").style.marginLeft = "0";
}

function toggleNav(bool) {
  if (bool) {
    openNav();
  } else {
    closeNav();
  }
}

$(document).ready( () => {
    console.log("hello");

    let menuShow = false;

    $("#aboutme").click( () => {
        console.log("clicked about me");
        window.location.href="AboutMe.html";
    })

    $("#hobbies").click( () => {
        console.log("clicked hobbies");
        window.location.href="Hobbies.html";
    })

    $("#travels").click( () => {
        console.log("clicked hobbies");
        window.location.href="Travels.html";
    })

  $(".menu-icon-container").click( () => {
      console.log("clicked menu");
      menuShow = !menuShow;
      $(".menu-icon-container").toggleClass("change");
      toggleNav(menuShow);
  })

});

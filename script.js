/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("left").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("left").style.marginLeft = "0";
}

$(document).ready( () => {
    console.log("hello");

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
      $(".menu-icon-container").toggleClass("change");
      // $(".left").css("animation", "menu-show 2s ease");
})

});

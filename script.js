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

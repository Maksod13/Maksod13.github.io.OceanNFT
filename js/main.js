$(function(){
    $('.slider__container').slick({
        arrows: false,
        dots: true
    });
});

$(function(){
    $('.slider__container2').slick({
        arrows: false,
        dots: true
    });
});


// function toggleDropdown() {
//   var dropdown = document.getElementById("myDropdown");
//   dropdown.classList.toggle("show");
// }

// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
function toggleDropdown(dropdownNum) {
  var dropdown = document.getElementById("myDropdown" + dropdownNum);
  dropdown.classList.toggle("show");
}

window.onclick = function(event) {
  var dropdowns = document.getElementsByClassName("down__arrow");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show') && !event.target.matches('.dropbtn, .close-btn')) {
      openDropdown.classList.remove('show');
    }
  }
}


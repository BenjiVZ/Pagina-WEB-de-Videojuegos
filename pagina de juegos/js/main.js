ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });

var menuItems = document.querySelectorAll("#menu li a");

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("mouseover", function() {
    this.style.fontSize = "20px";
  });

  menuItems[i].addEventListener("mouseout", function() {
    this.style.fontSize = "";
  });
}

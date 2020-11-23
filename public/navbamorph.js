function navmorph() {
  var dalink = document.getElementsByClassName('nav-link');
  var progress = document.getElementById("progress-container");
  var navbar = document.getElementById("navnav");
  var Y = window.pageYOffset;
  var W = window.innerWidth;
  var logo_image = document.getElementById("logo_sm");
  var bar = document.querySelector('.fixed-top');
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var scrolled = (winScroll / height) * 100;
  var downscroll = 150;
  var wscreen = 768;
  var i;

  // We set logic for when user is scrolling down
  if (Y >= downscroll && W >= wscreen) {

    //this loop  searches the DOM  for navigation links and changes the
    //the text color relative to the background color.
    for (i = 0; i < dalink.length; i++) {
      dalink[i].style.cssText += "color: #fff!important;"
    }
    navbar.style.cssText += "background-color: #323a6b!important;"
    document.getElementById("myBar").style.width = scrolled + "%";
    progress.style.cssText += "visibility: visible;"
    logo_image.src = '/Logo_white.webp';
    bar.style.top = '0';
  } else if (W < wscreen) {
    navbar.style.cssText += "background-color: #323a6b!important;"
    document.getElementById("myBar").style.width = scrolled + "%";
    progress.style.cssText += "visibility: visible;"
    logo_image.src = '/Logo_white.webp';
    bar.style.top = '0';
  } else {
    for (i = 0; i < dalink.length; i++) {
      dalink[i].style.cssText += "color: #fff!important;"
    }
    navbar.style.cssText += "background-color: #fff0!important;"
    document.getElementById("myBar").style.width = scrolled + "%";
    progress.style.cssText += "visibility: hidden;"
    logo_image.src = '/Logo.webp';

    bar.style.top = '1.5rem';
  }
}


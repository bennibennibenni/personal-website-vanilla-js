function redirectWebsite() {
  window.open("https://bennibennibenni.com");
}
function redirectFacebook() {
  window.open("https://www.facebook.com/BenniXie");
}
function redirectTwitter() {
  window.open("https://twitter.com/BenniXie");
}
function redirectGithub() {
  window.open("https://github.com/bennibennibenni/");
}
function redirectLinkedin() {
  window.open("https://www.linkedin.com/in/benni-xie-039145176");
}
function redirectInstagram() {
  window.open("https://www.instagram.com/benni_xie/");
}
function redirectWhatsapp() {
  window.open("https://api.whatsapp.com/send?phone=085765305666");
}
function redirectGmail() {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=bennixie98@gmail.com"
  );
}
mybutton = document.getElementById("gotoTop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

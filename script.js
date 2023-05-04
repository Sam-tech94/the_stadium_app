const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector('.navbar');
    // const close = document.querySelector(".fa-sharp");
const menuItems = document.querySelectorAll(".navbar a");    

    hamburger.addEventListener("click", () => {
      mobileNav.classList.add("mobile-nav");
      close.classList.toggle('fa-bars')
      close.classList.toggle("fa-xmark")
    });

    // close.addEventListener("click", () => {
    //   mobileNav.classList.remove("mobile-nav");
    //   close.classList.toggle("fa-bars");
    //   close.classList.toggle("fa-xmark")
    // })

menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault()

    menuItems.forEach((item) => item.classList.remove('active'));
    item.classList.add("active");
    const href = item.getAttribute('href');
    setTimeout(() => {
      window.location.href = href
    });
  });
});    


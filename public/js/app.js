// 1-Show-menu
let showMenu = function(navToggle, navMenu){
  let toggle = document.querySelector('#'+ navToggle);
  let menu = document.querySelector('#'+ navMenu);

  if (toggle && menu){
    toggle.addEventListener('click', function(){
      menu.classList.toggle('show-menu');
    })
  }
}

showMenu('nav-toggle', 'nav-menu');


// 2-Remove Menu When Link Clicked
let navLink = document.querySelectorAll('.nav-link');

function linkClicked(){
  let menu = document.querySelector('#nav-menu');
  menu.classList.remove('show-menu');
}

navLink.forEach(x => x.addEventListener('click', linkClicked ));


// 3-Active Link
let sections = document.querySelectorAll('section[id]')

function scrollActive(){
    let scrollY = window.pageYOffset;

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);



// 4-Change Background Header
function scrollHeader(){
  let header = document.querySelector('#header');

  if(this.scrollY >= 200){
    header.classList.add('scroll-header');
  }else{
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);


// 5-Scroll Top
function scrollTop(){
  let scrollTop = document.querySelector('#scrollTop');

  if ( this.scrollY >= 560){
    scrollTop.classList.add('show-arrow');
  }else{
    scrollTop.classList.remove('show-arrow');
  }
}
window.addEventListener('scroll', scrollTop);


// 6-DARK MODE
let themeButton = document.getElementById('theme-button')
let darkTheme = 'dark-theme'
let iconTheme = 'fa-toggle-on'


let selectedTheme = localStorage.getItem('selected-theme')
let selectedIcon = localStorage.getItem('selected-icon')


let getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
let getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-toggle-off' : 'fa-toggle-on'


if (selectedTheme) {

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-toggle-off' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// Scroll Reveal Animation
let SR =ScrollReveal({
  distance: '30px',
  duration: 1800,
  reset: true
});

SR.reveal('.home-content, .home-img, .decoration-content, .accessories-content, .f-content', {
  origin: 'top',
  interval: 200
})

SR.reveal('.share-img, .sg-content', {
  origin: 'left'
})
SR.reveal('.share-content, .sg-img', {
  origin: 'right'
})

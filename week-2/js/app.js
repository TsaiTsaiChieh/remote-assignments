const banner = document.getElementsByClassName('banner')[0];
var count_banner_click = 0;
const main_nav = document.getElementsByClassName('main-nav')[0];
const close_menu = document.getElementsByClassName('close-menu')[0];
const menu_btn = document.getElementsByClassName('menu-btn')[0];
const display_mask = document.getElementsByClassName('display-mask')[0];
var window_size = window.matchMedia("(min-width: 800px)");

/* 
// Request 1: Click to Change Text 
// When user click on "Welcome Message" block, change text to "Have a Good Time!".
*/

banner.addEventListener('click', () => {
    count_banner_click ++;
    if (count_banner_click % 2 == 1) banner.textContent = 'Have a Good Time!';
    else banner.textContent = 'Welcome!';
});


/* 
// Request 2: Click to Show/Close Menu.
// When user clicks the menu at the top-right corner, show the hidden mobile menu. 
// After that,the user can click the close button to hide it.
*/
menu_btn.addEventListener('click', () => {
    main_nav.style.right = '0';
    display_mask.style.display = 'block';
});

close_menu.addEventListener('click', () => {
    main_nav.style.right = '-100%';
    display_mask.style.display = 'none';
})

function close_display_mask(window_size) {
    if (window_size.matches) { // If media query matches
      display_mask.style.display = 'none';
  }
}
  close_display_mask(window_size) // Call listener function at run time
  window_size.addListener(close_display_mask) // Attach listener function on state changes
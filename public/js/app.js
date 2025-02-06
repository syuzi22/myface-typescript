document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
});

const colourChangeButton = document.getElementById('post-list-colour-change-button');
if (colourChangeButton) {
  colourChangeButton.onclick = () => {
    const posts = document.getElementsByClassName('post-container');

    for (const post of posts) {
      post.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
  };
}

const mobileMenuButton = document.getElementById("mobile-menu-button");
if(mobileMenuButton) {
    mobileMenuButton.addEventListener("click", function() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.add('mobile-menu-show');
      mobileMenuButton.classList.add('mobile-menu-button-hide');
  });
}

const mobileMenuClose = document.getElementById("mobile-menu-close");
if(mobileMenuClose) {
  mobileMenuClose.addEventListener("click", function() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-button');
    menu.classList.remove('mobile-menu-show');
    button.classList.remove('mobile-menu-button-hide');
  });
}



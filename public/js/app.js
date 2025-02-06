document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
});

document.getElementById('post-list-colour-change-button').onclick = () => {
  const posts = document.getElementsByClassName('post-container');

  for (const post of posts) {
    post.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }
};


function likePost(button) {
  if (!button.classList.contains("liked")) {
    button.innerText = "Liked ❤️";
    button.classList.add("liked");
  } else {
    button.innerText = "Like ❤️";
    button.classList.remove("liked");
  }
}

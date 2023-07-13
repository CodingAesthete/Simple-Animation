const el = document.getElementById('animated');

function scroll() {
  const rect = el.getBoundingClientRect();
  const isInView = rect.top >= 0 && rect.left >= 0 &&
    rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;

  if (isInView) {
    el.classList.add('animate');
  }
  else{
    el.classList.remove('animate');
  }
}

window.addEventListener('scroll', scroll);
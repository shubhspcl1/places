/* global places */

places({
  container: document.querySelector('#landing-demo')
});

// automatically darken the top menu when going down
document.addEventListener('scroll', scrollEvent => {
  const hero = document.querySelector('.hero-section');
  const navigation = document.querySelector('.navigation');

  const value = scrollEvent.target.scrollingElement.scrollTop;
  const height = hero.offsetHeight;
  const navHeight = navigation.offsetHeight;

  if (value > height) {
    navigation.classList.add('darken');
  } else if (value > (height - navHeight)) {
    navigation.classList.add('init');
    navigation.classList.remove('darken');
  } else {
    navigation.classList.remove('darken', 'init');
  }
});
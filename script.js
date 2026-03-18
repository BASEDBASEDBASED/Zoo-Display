// variable to track number of animals on screen
var animalsOnScreen = 0;

// show image of animal 
function revealAnimal(animal) {
  document.getElementById('card-' + animal).classList.add('visible');
  var btn = document.getElementById('btn-' + animal);
  btn.classList.add('active');
  btn.disabled = true;
  animalsOnScreen++;
  updateCounter();
}

// hide the animal image
function hideAnimal(animal) {
  document.getElementById('card-' + animal).classList.remove('visible');
  var btn = document.getElementById('btn-' + animal);
  btn.classList.remove('active');
  btn.disabled = false;
  animalsOnScreen--;
  updateCounter();
}

// reset everything back to original state
function resetZoo() {
  var animals = ['cat', 'dog', 'cow'];
  animals.forEach(function(animal) {
    document.getElementById('card-' + animal).classList.remove('visible');
    document.getElementById('btn-' + animal).classList.remove('active');
  });
  animalsOnScreen = 0;
  updateCounter();
}

// update the count
function updateCounter() {
  document.getElementById('counter').textContent = 'Animals on screen: ' + animalsOnScreen;
}

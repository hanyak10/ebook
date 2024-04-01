let totalPrice = 0;

function updatePrice(amount) {
  totalPrice += amount;
  document.getElementById('priceupdate').innerText = `₹${totalPrice}`;
  document.getElementById('priceupdate1').innerText = `₹${totalPrice}`;
  document.getElementById('total-amount').innerText = `₹${totalPrice}`;
  document.getElementById('total-amount1').innerText = `₹${totalPrice}`;
}

function toggleButtons(index) {
  var addButton = document.getElementsByClassName('herobut')[index];
  var removeButton = document.getElementsByClassName('herobut-remove')[index];
  var price = parseInt(addButton.dataset.price);

  if (addButton.classList.contains('hidden')) {
    addButton.classList.remove('hidden');
    removeButton.classList.add('hidden');
    updatePrice(-price);
  } else {
    addButton.classList.add('hidden');
    removeButton.classList.remove('hidden');
    updatePrice(price);
  }
  
    document.getElementById("check1").disabled=false;
    document.getElementById("check2").disabled=false;
  
}

const addButtonElements = document.getElementsByClassName('herobut');
const removeButtonElements = document.getElementsByClassName('herobut-remove');

for (let i = 0; i < addButtonElements.length; i++) {
  addButtonElements[i].addEventListener('click', function () {
    toggleButtons(i);
  });

  removeButtonElements[i].addEventListener('click', function () {
    toggleButtons(i);
  });
}


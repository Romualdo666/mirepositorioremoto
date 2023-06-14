function showAlert() 
{
    return alert('goodbye.');
}

const badbutton = document.getElementById("badbutton");
const gudbutton = document.getElementById("goodbutton");

badbutton.addEventListener("click", function(){
    alert("told ya to not click me mf.");
});
gudbutton.addEventListener("click", function(){
    alert("thank you~");
});

  const form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
}
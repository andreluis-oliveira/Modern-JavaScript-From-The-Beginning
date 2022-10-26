function validateName() {
  const name = document.getElementById('name')
  const re = /^[a-zA-Z]{2,10}$/

  if (!re.test(name.value)) {
    name.classList.remove('is-valid')
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
    name.classList.add('is-valid')
  }
}

function validateEmail() {
  const email = document.getElementById('email')
  const re = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/

  if (!re.test(email.value)) {
    email.classList.remove('is-valid')
    email.classList.add('is-invalid')
  } else {
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')
  }
}

// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName)
document.getElementById('email').addEventListener('blur', validateEmail)

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach((form) => {
  form.addEventListener(
    'submit',
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    },
    false
  )
})

// 1. get DOM element
const regForm = document.getElementById('registration-form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const usernameErr = username.nextElementSibling

// console.log(email)
// console.log(password)
// console.log(password2)


// 2. Add event / modification

regForm.addEventListener('click', function (e) {
  e.preventDefault()
  // console.log(username)

  // 2. Check if the value is empty
  if (username.value === '') {
    // 3. If empty, give user some feedback
    usernameErr.className = 'block bg-red-500 text-white'
  } else {
    console.log('sending to server')
  }

  //@TODO: add the validation for email

  //@TODO: add the validation for password

})

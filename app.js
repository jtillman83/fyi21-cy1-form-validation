// 1. get DOM element
const regForm = document.getElementById('registration-form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

const usernameErr = username.nextElementSibling
const emailErr = email.nextElementSibling
const passwordErr = password.nextElementSibling
const password2Err = password2.nextElementSibling

// console.log(emailErr)
// console.log(passwordErr)
// console.log(password2Err)


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


  // 2. Check if the value is empty
  if (email.value === '') {
    // 3. If empty, give user some feedback
    emailErr.className = 'block bg-red-500 text-white'
  } else {
    console.log('sending to server')
  }


  // 2. Check if the value is empty
  if (password.value === '') {
    // 3. If empty, give user some feedback
    passwordErr.className = 'block bg-red-500 text-white'
  } else {
    console.log('sending to server')
  }


  // 2. Check if the value is empty
  if (password2.value === '') {
    // 3. If empty, give user some feedback
    password2Err.className = 'block bg-red-500 text-white'
  } else {
    console.log('sending to server')
  }


  //@TODO: add the validation for email

  //@TODO: add the validation for password

})

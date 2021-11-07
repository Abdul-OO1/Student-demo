let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let firstname = id('firstname'),
  lastname = id('lastname'),
  email = id('email'),
  password = id('password'),
  cPassword = id('confirmPassword');
(form = id('form')),
  (errorMsg = classes('error')),
  (successIcon = classes('success-icon')),
  (failureIcon = classes('failure-icon'));

form.addEventListener('submit', (e) => {
  e.preventDefault();

  engine(firstname, 0, 'First name cannot be blank');
  engine(lastname, 1, 'Last name cannot be blank');
  engine(email, 2, 'Email cannot be blank');
  engine(password, 3, 'Password cannot be blank');
  pEngine(password, cPassword, 4, 'Passwords must match');
});

let engine = (id, serial, message) => {
  if (id.value.trim() === '') {
    errorMsg[serial].innerHTML = message;
    id.style.border = '2px solid red';

    // icons
    failureIcon[serial].style.opacity = '1';
    successIcon[serial].style.opacity = '0';
  } else {
    errorMsg[serial].innerHTML = '';
    id.style.border = '2px solid green';

    // icons
    failureIcon[serial].style.opacity = '0';
    successIcon[serial].style.opacity = '1';
  }
};

let pEngine = (id1, id2, serial, message) => {
  if (id1.value.trim() !== id2.value.trim()) {
    errorMsg[serial].innerHTML = message;
    id2.style.border = '2px solid red';

    // icons
    failureIcon[serial].style.opacity = '1';
    successIcon[serial].style.opacity = '0';
  } else if (id2.value.trim() === '') {
    errorMsg[serial].innerHTML = message;
    id2.style.border = '2px solid red';

    // icons
    failureIcon[serial].style.opacity = '1';
    successIcon[serial].style.opacity = '0';
  } else {
    errorMsg[serial].innerHTML = '';
    id2.style.border = '2px solid green';

    // icons
    failureIcon[serial].style.opacity = '0';
    successIcon[serial].style.opacity = '1';
  }
};

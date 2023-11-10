const users = [
  {
    username: 'Linus',
    password: 'abc123'
  }
];

document.querySelector('#loginForm').addEventListener('submit', handleLogin);

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log("Username - ", username);
  console.log("Password - ", password);

  const userExists = users.some(user =>
    user.username === username && user.password === password);
  console.log("Did user exist - ", userExists);


  // if (userExists) {
  //   // window.location.href = './homepage.html';
  //   alert('Du har loggat in!');
  // } else {
  //   alert('Fel användarnamn eller lösenord!');
  // }
}


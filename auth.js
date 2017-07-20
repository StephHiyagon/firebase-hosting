(function(){
  var config = {
    apiKey: "AIzaSyCh9rl2Y-9UdFitEoIdYp4oGkZsvAfk1tQ",
    authDomain: "realtime-db-c6c55.firebaseapp.com",
    databaseURL: "https://realtime-db-c6c55.firebaseio.com",
    projectId: "realtime-db-c6c55",
    storageBucket: "",
    messagingSenderId: "1047144603515"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword= document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSign = document.getElementById('btnSignUp');
  const btnLog = document.getElementById('btnLogout');

  //añadir evento login

  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //sign in

    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));

  });

  //signup

  btnSign.addEventListener('click', e => {
    //no comprobamos si el email y password es real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));

  });

  btnLog.addEventListener('click', e =>{
    firebase.auth().signOut();
  });

  //añadir un listener en tiempo real

  firebase.auth().onAuthStateChanged( firebaseUser =>{
    if(firebaseUser){
      console.log(firebaseUser);
      btnLog.classList.remove('hide');
    }else{
      console.log('no logeado');
      btnLog.classList.add('hide');
    }
  })

}());

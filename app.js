
(function(){
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCh9rl2Y-9UdFitEoIdYp4oGkZsvAfk1tQ",
      authDomain: "realtime-db-c6c55.firebaseapp.com",
      databaseURL: "https://realtime-db-c6c55.firebaseio.com",
      projectId: "realtime-db-c6c55",
      storageBucket: "",
      messagingSenderId: "1047144603515"
    };
    firebase.initializeApp(config);

    //obtener elementos
    const preObjeto = document.getElementById('objeto');
    const lista = document.getElementById('lista');

    //referenciar a la base de datos
    const db = firebase.database().ref().child('objetito');
    const dbLista = db.child('habilidades');

    db.on('value', snap => preObjeto.innerText = JSON.stringify(snap.val(),null,3));

    dbLista.on('child_added', snap => {
      const li = document.createElement('li');
      li.innerText = snap.val();
      li.id = snap.key;
      lista.appendChild(li);
    });

    dbLista.on('child_changed', snap =>{
      const liChanged = document.getElementById(snap.key);
      liChanged.innerText = snap.val();
    });

    dbLista.on('child_removed', snap =>{
      const litoRemove = document.getElementById(snap.key);
      litoRemove.remove();
    })
}());

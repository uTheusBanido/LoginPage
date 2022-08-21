let accounts = [
    {
        key: 222,
        password: 123456,
        user: 'uTheusBanido'
    },
    {
        key: 2222,
        password: 3456,
        user: 'Owner'
    },
    {
        key: 89234,
        password: 2342,
        user: 'Safadasso'
    },
];

function host() { // function Host index.html
   event.preventDefault()
    let user = document.getElementById("user").value // usuario
    let password = document.getElementById("password").value // senha
    let key = document.getElementById("key").value // chave

    if (!user || !password || !key) {
    return Swal.fire({
  title: 'Error',
  text: 'Preencha Todos os Campos!',
  icon: 'error',
  timer: 2000
})
        // return console.log("Preencha Todos os Campos!");
    }
    const accounts_list = accounts.find(account => account.user == user);
    if (!accounts_list){
    return Swal.fire({
  title: 'Error',
  text: 'Usuario inexistente.',
  icon: 'error',
  timer: 2000
})
        // return console.log("usuario inexistente.")
    }
    if (accounts_list.user != user) {
    return Swal.fire({
  title: 'Error',
  text: 'Usuario Errado!.',
  icon: 'error',
  timer: 2000
})
        // return console.log("Usuario Errado!")
    } 
    if (accounts_list.password != password){
    return Swal.fire({
  title: 'Error',
  text: 'Senha Incorreta!',
  icon: 'error',
  timer: 2000
})
        // return console.log("Senha Errada!")
    }
    if (accounts_list.key != key) {
    return Swal.fire({
  title: 'Error',
  text: 'Key Invalida!',
  icon: 'error',
  timer: 2000
})
        // return console.log("Key Invalida!")
    } 
    return Swal.fire({
  title: 'Success!',
  text: 'Logado com Sucesso!',
  icon: 'success',
  timer: 2000
})
    // return console.log(`Olá ${accounts_list.user}, Logado com sucesso! KEY: ${accounts_list.key}`);


        }



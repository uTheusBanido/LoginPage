let apikeys = [
    {
        key: 222,
        password: 123456,
        user: 'uTheusBanido'
    },
    {
        key: 222,
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
    let keys = apikeys

    for (let keys of apikeys) {
        if(key == keys.key && user == keys.user && password == keys.password){
            console.log(`Olá ${keys.user}, Seu Login Foi Aprovado! \nKEY: ${keys.key}`);
            break;
        } else if (user !== keys.user) {
            console.log('Usuario não existe!')
            break;
        } else if (password !== keys.password ) {
            console.log("Senha Invalida!")
            break;
        }
        }

        }



const button = document.querySelector("button")//declarar variavel
button.addEventListener("click", sendUser)//criar evento de clicar o butão

async function sendUser(event) {
    event.preventDefault()//serve para nao carregar a pagina
    const name = document.querySelector("#name").value// usar # pois é um id e .value para pegar o valor digitado
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const age = document.querySelector("#age").value

    if (name === "" || email === "" || password === "" || age === "") {
        alert("Preencha todas as informações")
        return
    }// so envia informaçoes se estiver tudo preenchido

    const user = { //criando um objeto
        name,
        email,
        age,
        password
    }
//toda vez que for guardar uma informação numa variavel que vem do banco de dados tem que usar async e await
    const response = await fetch("http://localhost:3333/cadastrar", { //isso é uma request
        method: "POST", //um objeto que esta enviando a informaçao pro backend / nessa linha esta sendo declarado o metodo
        headers: {//se coloca o tipo da informaçaõ
            "Content-Type": "application/json"//esta dizendo que o tipo de informaçao que esta sendo enviado é do tipo JSON
        },

        body: JSON.stringify({user})//transformar as informações em JSON
    }).then(response => response.json())//esta pegando a resposta e transformar para que a gente possa entender

    alert(response.message)

    window.location.href = "../index.html" //manda o usuario para home



}


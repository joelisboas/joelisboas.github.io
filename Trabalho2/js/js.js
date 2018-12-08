
function criarGrupos(){
    let grupos = document.querySelector(".ul_grupos");
    let grupo = document.createElement("li");
    grupos.appendChild(grupo);

    let foto_grupo = document.createElement("div");
    foto_grupo.classList.add("foto_grupo");
    grupo.appendChild(foto_grupo);

    let nome_grupo = document.createElement("span");
    let texto_nome = document.createTextNode("Nome do grupo");
    nome_grupo.appendChild(texto_nome);
    grupo.appendChild(nome_grupo);
}

criarGrupos();
criarGrupos();
criarGrupos();

let url = "http://rem-rest-api.herokuapp.com/api/joelisboas";

function getGrupos(){
    let xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function(){
    if(xhttp1.readyState==4){
        console.log("GET entrou");
        let body_parsed = JSON.parse(xhttp1.responseText);
        console.log(xhttp1.responseText);
        console.log(body_parsed);
        // console.log(body_parsed[0].data);
    }
}

xhttp1.open("GET", url, true);
xhttp1.send();
}
getGrupos();

function postGrupos(){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
      if(this.readyState == 4){
        console.log("POST entrou");
        JSON.parse(xhttp.responseText);
      }
    }

    let msg = [
        //GRUPO 1
        { 
        grupo: "Grupo da família!",
        mensagens: [{
            usuario: "joao03",
            texto: "Tudo bem?"
            },
            {
            usuario: "victor23",
            texto: "Tudo Tranqs"
            },
            {
            usuario: "joao03",
            texto: "Que bom"
            },
        ]
        },
        //GRUPO 2
        { 
        grupo: "Churrascão no domingão",
        mensagens: [{
            usuario: "maria2000",
            texto: "Na paz?"
            },
            {
            usuario: "victor23",
            texto: "Show"
            },
            {
            usuario: "maria2000",
            texto: "Que bom"
            },
        ]
        },
        //GRUPO 3
        { 
        grupo: "Só topzera",
        mensagens: [{
            usuario: "victor03",
            texto: "Bom?"
            },
            {
            usuario: "robson_alves",
            texto: "Bom"
            },
            {
            usuario: "victor03",
            texto: "Que bom"
            },
        ]
        },
        { 
        grupo: "aaaaaaaaaaaaaaaaaaaaaaa",
        mensagens: [{
            usuario: "victor03",
            texto: "Bom?"
            },
            {
            usuario: "robson_alves",
            texto: "Bom"
            },
            {
            usuario: "victor03",
            texto: "Que bom"
            },
        ]
        }
    ];

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.withCredentials = true;
    xhttp.send(JSON.stringify(msg));
}
postGrupos();
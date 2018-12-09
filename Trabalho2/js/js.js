let url = "http://rest.learncode.academy/api/joelisboas/lms";

function postGrupos(){
    let xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function(){
        if(xhttp1.readyState==4){
            console.log("POST");
            console.log(xhttp1.responseText);
        }
    }
    xhttp1.open("POST", url, true);
    xhttp1.onload = function(){
        criarGrupos();
      };
    xhttp1.setRequestHeader("Content-type","application/json");
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
        }
    ];
    xhttp1.send(JSON.stringify(msg));
}

function getGrupos(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState==4){
            console.log("GET");
            let body_parsed = JSON.parse(xhttp.responseText);
            console.log(xhttp.responseText);
            console.log(body_parsed);
            // console.log(body_parsed[0].nome);
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

function criarGrupos(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState==4){
            console.log("CRIANDO GRUPO");            
            function nome_do_grupo(nome){
                let grupos = document.querySelector(".ul_grupos");
                let grupo_linha = document.createElement("li");
                grupos.appendChild(grupo_linha);
            
                let foto_grupo = document.createElement("div");
                foto_grupo.classList.add("foto_grupo");
                grupo_linha.appendChild(foto_grupo);

                let nome_grupo = document.createElement("span");
                let texto_nome = document.createTextNode(nome);
                nome_grupo.appendChild(texto_nome);
                grupo_linha.appendChild(nome_grupo);
            }
            let body_parsed = JSON.parse(xhttp.responseText);
            let grupo0 = body_parsed[0][0].grupo;
            let grupo1 = body_parsed[0][1].grupo;
            nome_do_grupo(grupo0);
            nome_do_grupo(grupo1);
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

postGrupos();
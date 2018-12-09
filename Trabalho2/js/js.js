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
        grupo: "Grupo 1",
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
        grupo: "Grupo 2",
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
        //Grupo 3
        { 
        grupo: "Grupo 3",
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
            }
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
            function mensagenss(nome_user, msg_user){
                let lista_msg = document.querySelector(".lista_msg");
                let linha_msg = document.createElement("li");
                lista_msg.appendChild(linha_msg);
            
                let nome_usuario = document.createElement("span");
                nome_usuario.classList.add("nome_usuario");
                let texto_usuario = document.createTextNode(nome_user);
                nome_usuario.appendChild(texto_usuario);
                linha_msg.appendChild(nome_usuario);
            
                let msg_usuario = document.createElement("span");
                msg_usuario.classList.add("mensagem_usuario");
                let texto_msg = document.createTextNode(msg_user);
                msg_usuario.appendChild(texto_msg);
                linha_msg.appendChild(msg_usuario);
            }
            let body_parsed = JSON.parse(xhttp.responseText);
            // console.log(body_parsed);

            for(let i = 0; i < body_parsed[0].length; i++){
                let grupo0 = body_parsed[0][i].grupo;
                nome_do_grupo(grupo0);
            }  

            // let gruposALL = document.querySelector("li")
            // console.log(gruposALL);

            // for(let i = 0; i < gruposALL.length; i++){
            //     gruposALL[i].addEventListener("click", function())
            // }

            // let grupo0 = body_parsed[0][0].grupo;
            // let grupo1 = body_parsed[0][1].grupo;
            // let grupo2 = body_parsed[0][2].grupo;
            // nome_do_grupo(grupo0);
            // nome_do_grupo(grupo1);
            // nome_do_grupo(grupo2);

            function click_grupo(){
                let msg1 = body_parsed[0][0].mensagens[0].usuario;
                let msg2 = body_parsed[0][0].mensagens[0].texto;
                mensagenss(msg1, msg2);
            }
            let grupo_botao = document.querySelector(".ul_grupos li");
            grupo_botao.addEventListener("click", click_grupo);
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

postGrupos();
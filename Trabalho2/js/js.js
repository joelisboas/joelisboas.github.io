let url = "http://rest.learncode.academy/api/joelisboas/lms";

function postGrupos(){
    let xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function(){
        if(xhttp1.readyState==4){
            // console.log("POST");
            // console.log(xhttp1.responseText);
        }
    }
    xhttp1.open("POST", url, true);
    // xhttp1.withCredentials = true;
    xhttp1.onload = function(){
        criarGrupos();
      };
    xhttp1.setRequestHeader("Content-type","application/json");
    let msg = [
        //GRUPO 1
        { 
        grupo: "Grupo da Família",
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
        grupo: "Galera de DD",
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
        grupo: "Fundão",
        mensagens: [{
            usuario: "Pedrosa",
            texto: "Vocês são demais"
            },
            {
            usuario: "João",
            texto: "bla bla"
            },
            {
            usuario: "Antonio",
            texto: "KKKKK"
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
            // console.log("GET");
            let body_parsed = JSON.parse(xhttp.responseText);
            // console.log(xhttp.responseText);
            // console.log(body_parsed);
            // console.log(body_parsed[0].nome);
        }
    }
    xhttp.open("GET", url, true);
    xhttp.withCredentials = true;
    xhttp.send();
}

function criarGrupos(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState==4){
            // console.log("CRIANDO GRUPO");
            function nome_do_grupo(nome){
                let grupos = document.querySelector(".ul_grupos");
                let grupo_linha = document.createElement("li");                
                let foto_grupo = document.createElement("div");
                let nome_grupo = document.createElement("span");

                let texto_nome = document.createTextNode(nome);

                grupo_linha.classList.add("li_grupo");
                foto_grupo.classList.add("foto_grupo");

                grupos.appendChild(grupo_linha);
                grupo_linha.appendChild(foto_grupo);
                nome_grupo.appendChild(texto_nome);
                grupo_linha.appendChild(nome_grupo);
            }

            function titulo_grupo(nome){
                let titulo_grupo = document.querySelector(".titulo_grupo");
                titulo_grupo.innerHTML = nome;
            }

            function mensagenss(nome_user, msg_user){
                let lista_msg = document.querySelector(".lista_msg");

                let linha_msg = document.createElement("li");          
                let nome_usuario = document.createElement("span");
                let msg_usuario = document.createElement("span");

                let texto_usuario = document.createTextNode(nome_user);
                let texto_msg = document.createTextNode(msg_user);  

                nome_usuario.classList.add("nome_usuario");
                msg_usuario.classList.add("mensagem_usuario");


                lista_msg.appendChild(linha_msg);
                nome_usuario.appendChild(texto_usuario);
                linha_msg.appendChild(nome_usuario);
                msg_usuario.appendChild(texto_msg);
                linha_msg.appendChild(msg_usuario);
            }
            let body_parsed = JSON.parse(xhttp.responseText);
            // console.log(body_parsed);

            for(let i = 0; i < body_parsed[0].length; i++){
                let grupo0 = body_parsed[0][i].grupo;
                nome_do_grupo(grupo0);
                console.log(body_parsed[0][i].grupo);
            }  

            let gruposALL = document.querySelectorAll(".li_grupo");
            console.log("TODOS GRUPOS", gruposALL);

            for(let g = 0; g < gruposALL.length; g++){
                gruposALL[g].addEventListener("click", function(){
                    titulo_grupo(gruposALL[g].textContent);

                    let msgg = document.querySelector(".lista_msg");
                    msgg.innerHTML = "";

                    for(let j = 0; j < body_parsed[0][g].mensagens.length; j++){
                        mensagenss(body_parsed[0][g].mensagens[j].usuario, body_parsed[0][g].mensagens[j].texto);
                    }
                });
            }
        }
    }
    xhttp.open("GET", url, true);
    // xhttp.withCredentials = true;
    xhttp.send();
}

postGrupos();
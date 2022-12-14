import React from "react";

export  default function Home() {
    return(
        <div>
            <div className="title">
            <div>
                <h2>Olá! Meu nome é Italo Miranda</h2>
                <p>Programador Front-end</p>
            </div>

            <div>
                <img width={"100%"} src="https://cdn-icons.flaticon.com/png/512/6061/premium/6061291.png?token=exp=1659237383~hmac=23ee84addf070e5c2939716474237d0f" alt="imagem decorativa"/>
            </div>
            </div>

            <div className="title">
                <div>
                    <p>
                    O projeto foi feito com o intuito de treinar chamadas de API e mostrar na tela. 
                    </p>
                </div>

                <div>
                    <iframe id="animes" className="containerProjeto" src="https://italomirandasantiago.github.io/site_de_animes/"/>
                </div>
            </div>

            <div className="title">

                <div>
                    <iframe id="noticias" className="containerProjeto" src="https://italomirandasantiago.github.io/site_de_noticias/" />
                </div>

                <div>
                    <p>
                    Site de noticias curtas! Saiba o que acontece pelo mundo sem perder tempo!
                    </p>
                </div>
            </div>
        </div>
    )
}
import picture from './img/picture_maria.png';

function about (){
    return (
        <div className="row">
            <div className="sobre col-md-12">
                <div className='picture_principal md-6'>
                    <img className='picture_maria' src={picture}/>
                </div>
                <div className='title_about'>
                    <h1 className='title_big'> Olá, espero que você esteja bem! <br/></h1>
                    <p className='title_small'>
                        Meu nome é Maria Claudia e eu vou contar um pouco da minha carreira profissional.
                        <br/>
                        Atualmente tenho 21 anos, e estou quase me formando em Análise e Desenvolvimento de Sistemas (tecnólogo).
                        <br/>
                        Desde 2021, até hoje, já fui estagiária em três empresas, onde na primeira
                        <br/>
                        eu trabalhava com Power BI, e banco de dados, mas percebi que não era aquilo que eu
                        <br/>
                        queria seguir carreira.
                        <br/>
                        Após, fui trabalhar em uma empresa de sistemas aqui da minha cidade, e então entrei no setor de
                        <br/>
                        Desenvolvimento de Software, e foi mágico pra mim, aprendi a
                        <br/>
                        criar telas no modo <em>Full Stack</em>, e mexi com C#.
                    </p>
                    <p className='title_two'>
                        Por fim, fui para uma indústria, que vendia periféricos gamers, entre outros. Nesse estágio, pude aprender um pouco mais sobre ser <em>Full Stack</em>, aprendi a como lidar com os usuários e entender o que eles precisavam, participava de reuniões com a diretoria para apresentar meus projetos finais e discutir sobre futuras melhorias.
                        <br/>
                        Hoje, eu busco uma oportunidade de Desenvolvedora Web Júnior, para que eu possa enfim, dar início a minha carreira profissional como dev. Tenho certeza que quero seguir carreira com isso agora, e me sinto realizada pelas experiências que já obtive ao longo desses 2 anos...Sei que preciso aprender e aprimorar alguns de meus conhecimentos, por isso acredito fortemente que consigo ser uma júnior!
                        <br/>
                        <br/>
                        Desenvolvi essas telas que você está vendo agora, com React, e algumas funções em php,é bem básico, mas quando estava estruturando o escopo desse projeto, eu só pensei em mostrar para as pessoas que sei fazer um frontend básico, pois era mais rápido pra mim,
                        do que eu desenvolver toda a parte de backend, mas já estou com o projeto pessoal em mente para mostrar umas telas <em>Full Stack</em>.
                        Sempre estarei aberta para aprender novas linguagens e frameworks, procuro uma empresa que está sempre buscando trabalhar com tecnologias novas.
                        <br/>
                        <br/>
                        Agradeço imensamente por ter chegado até aqui.. :)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default about;
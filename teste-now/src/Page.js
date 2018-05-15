import React from 'react';
import manga from './img/manga.jpg';

const tituloReceita = ( titulo ) =>
  <h4 class='titulo-receita'>{titulo}</h4>

const subtituloReceita = ( titulo ) =>
  <div className="container-receita">
    <h3 className="subtitulo-receita"><span>&bull;</span>{ titulo }<span>&bull;</span></h3>
  </div>

const box = ( props ) =>
<div className="produtos">
    { props.map(( prop ) =>
      <div key={prop.id}>
        <img src="http://via.placeholder.com/150x150" />
        <h5>{prop.nome}</h5>
        <p className="descricao-produto">{prop.preco}</p>
        <p className="descricao-produto">{prop.quantidade}</p>
      </div>
    )}
  </div>


export default ( props ) =>
<div>
  <header>
    
  </header>
    <div className="container-header">
      <h1 className="titulo">Quitanda</h1>
      <h2 className="ofertas">Ofertas da Semana</h2>
      <p className="data">28/02 a 04/03/2018</p>
      <p className="manga-palmer">Manga Palmer | Kg | R$3,99</p>
    </div>
    <div className="opacidade"></div>
  <section className="container-receita-border">
    
    { subtituloReceita( 'Risoto de manga e Brie' ) }

        <h4>Ingredientes:</h4>
        <ul>
          <li>3/4 xícara (chá) de arroz arbóreo</li>
          <li>1 litro de água de caldo de legumes</li>
          <li>1 dente de alho amassado</li>
          <li>1/2 cebola picada</li>
          <li>1 colher (sopa) de manteiga</li>
        </ul>
        <ul>
          <li>1 colher (sopa) de azeite de oliva extra virgem</li>
          <li>Sal e pimenta do reino preta moída a gosto</li>
          <li>1 cálice de vinho branco seco</li>
          <li>1/2 unidade de manga palmer descascada e picada</li>
          <li>100g de queijo brie</li>
        </ul>

        <h4>Preparo:</h4>
        <ul>
          <li>Em uma panela, coloque o azeite e a manteiga, deixe aquecer e doure a cebola e o alho.</li>
          <li>Junte então o arroz arbóreo e refogue, acrescentando em seguida o cálide de vinho. Mexa bem até o vinho evaporar.</li>
          <li>Vá colocando o caldo de legumes aos poucos, mexendo sempre, até obter a consistência "al dente", ideal para o risoto.</li>
          <li>Junte o queijo brie cortado em cubinhos e mexa até esse derreter. Desligue o fogo, acrscente as mangas cortadas em cubos, mexa para incorporar sirva em seguida.</li>
        </ul>     
  </section>

  <section className="categoria">
    <h4 className="titulo-categoria">Hortifrúti</h4>
    <p className="descricao-categoria">Buscamos e selecionamos o que há de melhor na roça e no campo para que possamos oferecer frutas, legumes e verduras sempre fresquinhas, nutritivas e saborosas.</p>
    { box( props.hortifruti) }
  </section>

  <section className="categoria">
    <h4 className="titulo-categoria">Orgânicos e especiais</h4>
    <p className="descricao-categoria">Torna-se cada vez mais urgente e corriqueira a busca por produtos orgânicos integrais, sem glúten, sem lactose e sem açúcar. Temos um espaço totalmente dedicado a esse universo. Desfrute.</p>
    { box( props.organicos ) }
  </section>

  <div className="container-categoria">
    <section className="categoria2">
      <h4 className="titulo-categoria">Carnes e peixes</h4>
      <p className="descricao-categoria">Uma grande diversidade de cortes, manipulados sob rigoroso padrão de qualidade, para oferecer sempre o produto perfeito.</p>
      { box( props.carnes ) }
    </section>

    <section className="categoria2">
      <h4 className="titulo-categoria">Adega</h4>
      <p className="descricao-categoria">Nossa adega oferece rótulos de vinhos super especiais a preços convidativos. Pesquisamos e degustamos para oferecer verdadeiros achados a quem quiser experimentar.</p>
      { box( props.carnes ) }
     
    </section>
  </div>

  <section className="categoria">
    <h4 className="titulo-categoria">Da Quitanda</h4>
    <p className="descricao-categoria">Uma seleção de produtos desenvolvida com todo cuidado e carinho, utilizando as melhores matérias-primas, para facilitar seu dia-a-dia, seja no preparo de suas receitas ou desfrutando todo o sabor e praticidade de um de nossos pratos.</p>
    { box( props.quitanda ) }
  </section>


  <section className="categoria">
    <h4 className="titulo-categoria">Empório</h4>
    <p className="descricao-categoria">Uma seleção de ingredientes especiais e temperos, para dar vida às suas criações culinárias. Escolha entre grande variedade de itens como mel trufado, azeite extravirgem, massas italianas e especiarias, e deixe suas receitas ainda mais gostosas.</p>
     { box( props.emporio ) }
  </section>

  <section className="lancheira">
    { tituloReceita( 'Lancheira' ) }

    <p className='linha-fina'>Muitas vezes temos dificuldade para elaborar a lancheira para as crianças levarem para escola. Combinar algo que os pequenos gostem e que seja realmente saudável e nutritivo e, além de tudo prático para preparar e transportar, não é das tarefas mais simples!</p>
    <p className='linha-fina'>Mas prometemos que vamos te dar uma mão, com algumas sugestões de receitas e dicas, começando por este muffin da <a href="https://www.instagram.com/melskitchencafe/">@_melskitchen</a> que é um sucesso entre as crianças. Visitem o perfil do instagram para outras inspirações!</p>

    { subtituloReceita( 'Muffin de Banana com chocolate' ) }
     <div className="produtos2">
     { props.muffin.map (( muf ) =>
       <div key={muf.id}>
        <img src="http://via.placeholder.com/150x150" />
         <h5>{muf.nome}</h5>
         <p>{muf.preco}</p>
         <p>{muf.quantidade}</p>
       </div> 
     )}
     </div>

    <div className='container-receita-border'>
      <h4>Ingredientes:</h4>
      <ul>
        <li>2 ovos</li>
        <li>1 banana nanica amassada</li>
        <li>3 colheres (sopa) de farelo de aveia</li>
        <li>3 colheres (sopa) de @zaya_flour</li>
        <li>2 colheres (sopa) de farinha de linhaça</li>
      </ul>
      <ul>
        <li>1 colher (sopa) de açúcar de coco (opcional)</li>
        <li>1 colher (sopa) de óleo de coco</li>
        <li>1 colher (chá) de fermento químico</li>
        <li>3 colheres (sopa) de lascas de chocolate 70%</li>
      </ul>

      <h4>Preparo:</h4>
      <ul>
        <li>Pŕe-aqueça o forno a 180ºC.</li>
        <li>Em uma tigela, coloque o ovo e o óleo de coco e bata com a ajuda de um fouet. Acrescente então a banana nanica amassada e misture bem. Vá adicionando os ingredientes secos um a um, misturando a cada adição.</li>
        <li>Disponha a massa em forminhas para muffin e leve ao forno para assar até dourar.</li>
      </ul>
    </div>
    <div style={{"clear":"all"}}></div>
  </section>

  <section className='alem'>
    <div className="thin-border">
      <img src="http://via.placeholder.com/150x150" />
      <p>Além dos melhores e mais frescos peixes e frutos do mar, em nossa peixaria oferecemos diversos combinados de sushis e sashimis, prontos para o consumo, que você pode levar para casa e escritório, ou mesmo degustar em nossa área de convivência, no mezanino da loja. <br/> E agora temos também uma novidade incrível: ceviches deliciosos!</p>
    </div>
  </section>

  <footer>
    <div className="conteudo-esquerda">
      <p className="pagamento">Formas de Pagamento</p>
      <p className="formas-pagamento">Dinheiro, cheques mediante cadastro e todas as bandeiras dos cartões de crédito, débito e vale alimentação.</p>
    </div>
    <div className="conteudo-direita">  
      <p className="endereco">Rua Mateus Grou, 159 - Pinheiros</p>
      <p className="contato">3060-3230 - www.quitanda.com</p>
    </div>
  </footer>
</div>

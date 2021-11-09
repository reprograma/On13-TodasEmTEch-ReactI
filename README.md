# React I ❤️

Conteúdo da aula: 
>> vamos aprender um dos conteúdos mais queridinhos do mercado, o react. Vamos conhecer um pouco do universo dessa ferramenta incrível, os conceitos fundamentais e criar nossos primeiros projetinhos. 🚀

1) Apresentação e recadinho inicial da {Profa}
2) O que é e quem usa react?
3) Olá, Mundo! Criando e entendendo meu primeiro projeto react (npm/yarn, create react app, react.render, estrutura de pastas, apagando arquivos padrão)
4) Componentes em react e jsx
5) Props

## `Chamada, apresentação das monitoras e acordos`
<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

<br>
<br>

## {Profa} Simara Conceição

  <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

Desenvolvedora na ThoughtWorks e criadora do Podcast Quero Ser Dev.

## O que é e quem usa react?

Já imaginou se você pudesse aprender a programar com a tecnologia que o Facebook, Instagram, WhatsApp, Twitter, Netflix, Airbnb, Notion, Trello, Tiktok e muitas outras gigantes usam? O que mudaria de possibilidades e oportunidades para sua carreira? Já parou pra refletir sobre isso?

Pois bem, react é uma biblioteca JavaScript usada para criar interfaces para pessoas usuárias. 

Já quero abrir um parenteses aqui pra explicar que bibliotecas são conjuntos de funcionalidades criadas por outras pessoas desenvolvedoras que passaram por grandes problemas pra resolver e resolveram deixar a solução disponíveis em pacotes para que outras pessoas possam usar. Boazinhas, né? Eu amooo!rs 

E que interfaces de usuários são aquelas telas lindas e cheias de funções que as pessoas usuárias podem interagir. No Instagram por exemplo: a tela de login, o feed onde os posts aparecem, o explorar, os stories, cada pequeno botão de curtir, compartilhar, comentar enfim. 

Sim, react e á uma das tecnologias que essas empresas que eu falei e muitas outras do Brasil e do mundo usam. Eu mesma trabalho com essa tecnologia no meu dia a dia. :)

A grande vantagem é que trabalhar com React torna a vida da pessoa desenvolvedora mais fácil, pois a gente consegue criar soluções complexas de uma maneira mais simples e em menos tempo. 

Além disso tudo, é importante saber também que com React é possível criar SPA. Um acrônimo para Single Page Application que é uma única página web com super poderes para lidar com diferentes dados a partir das interações das pessoas usuárias.  

Na prática, quando alguém clica num botão para abrir uma página nova, o que acontece por debaixo dos panos é a atualização de uma pequena parte de nossa única tela, em vez de atualizar a página inteira para mostrar o esperado.

Eu sei que ainda tá muito abstrato pra visualizar, mas daqui a pouquinho vai fazer mais sentido. Confia em mim e vamos que vamos!

## Olá, Mundo!

Eu sou uma pessoa supersticiosa e me contaram que toda vez que a gente está aprendendo alguma tecnologia nova, dá sorte começar com um hello world! Então vamos nessa! rs

Para essas aulas, vamos usar o editor de códido, vs code. No meu computador eu tenho também o NodeJS instalado na versão LTS e  também o gerenciador de pacotes yarn.

Como saber se tenho o node e o yarn? Abra um terminal e digite os comandos abaixo:

`` yarn -v``

Seu retorno positivo será um número parecido com esse, que é a versão correspondente: 1.22.10

``node -v``

Seu retorno positivo será um número parecido com esse, que é a versão correspondente: v14.17.0

Se seus retornos não foram do modo acima, é porque você ainda não tem, pause esse vídeo agora e acesse os links abaixo para instalar.

Node: https://nodejs.org/en/

Yarn: https://yarnpkg.com/getting-started/install

Depois de instalar, rode os comandos novamente e tenha certeza que instalou direitinho.
Agora sim, vamos ao nosso hello world em React.

1) Lembra que eu falei que react é uma biblioteca e que a gente pode acessar? Vamos fazer isso, no terminal rode o comando yarn create-react-app. Ele vai criar uma pasta contendo algumas outras pastas e arquivos dentro. Não se assuste! Demora um pouco até ficar pronto, rs.

``yarn create react-app hello-world``

Terminou e deu tudo certo, quando aparecer no terminal: ``Happy hacking!``

2) Ainda no terminal, ele nos dá uma sugestão de entrar na pasta de nosso projeto ``cd hello-world``e depois startar com ``yarn start``
Vamos fazer isso! 

3) Ele irá abrir um navegador sozinho usando a porta localhost:3000 e é lá que você consegue ter uma pré de como sua SPA está ficando.

4) Perceba que ele rodou uma págima pronta. Tharam! A gente só precisou rodar alguns pequenos comandos no terminal, certo? Vamos trocar esse conteúdo pelo nosso hello world. Vá até src > App.js (Apague a div e tudo que está dentro dela e escreva no lugar <h1>Hello, World!</h1> Salve e volte para o navegador! Uhullllll, agora vamos começar com o pé direito a entender todas essas pastas, arquivos e como estamos escrevendo num arquivo javascript e fazendo aparecer no html. <3

5) 
> node_modules

> public
  >> index.html

> gitignore

> package.json

> src
  >> index.js
  >> app.js
  >> app.css


## Componentes em react e jsx

Em react tudo é componente!
Pequenas partes onde podemos encapsular/guardar códigos e reutilizar sempre que necessário.

Se liga aqui no Instagram. Deve existir lá no código deles um componente chamado perfil. Olha como todos são exatamente iguais. 
tem o nome, a imagem, a quantidade de seguidores, seguindo, publicações, a Bio. Só o conteúdo muda de uma usuária pra outra, certo?

Se alguma funcionalidade muda, então fica muito mais fácil fazer uma manutenção, você sabe exatamente onde o código vai estar. Basta ir no componente e mudar onde a lógica está encapsulada.

Vamos aprender a criar um componente react.

Existem duas formas de criar componentes: classes e funcões.

Aqui nos nossos vídeos, vamos focar somente em funções, pois em 2018 o time que criou o react introduziu uma forma de 
resolver problemas onde antes somente componentes com classes poderiam fazer. 

Eu chamo isso de React moderninho! haha
Você vai curtir!

Um componente é justamente uma função que retorna um HTML. e quando temos javascript misturado com html chamamos de jsx. 

Vamos à prática:
Crio um arquivo com extensão jsx ou js iniciando o nome com letra maiuscula.

Dentro do arquivo crio e exporto uma função. Que poderei importar e usar em qualquer outro componente no meu projeto.

```
function SayHello() {
  return(
    <h1>Hello</h1>
  )
}

export default SayHello
```

```
function Title() {
  return(
    <h1>Eu sou um título lindão</h1>
  )
}

export default Title
```

| Recurso | Descrição |
| --- | --- |
| `Relogio` |  Vamos criar um componente que retorna nosso horário local|

## Props

Lembra do componente de perfil que a gente tá supondo que o instagram deve ter?
Como será que eles fazem pra mudar os conteúdos sempre que identificam que estamos mudando de perfil ao acessar?

Uma das soluções para fazer isso seria usando as props, ou propriedades.

Vamos à prática.
Temos o componente Title que para cada página esse título irá mudar. A gente não precisa criar um h1 toda vez e criar todo estilo novamente. Vamos encapsular em um componente e permitir que por props ele receba conteúdos diferentes para o mesmo componente.

```
function Title(props) {
  return(
    <h1>{props.text}</h1>
  )
}

export default Title
```
Ao usar esse componente, por exemplo no App.js ficaria dessa forma:

```
import Title from "caminho para o arquivo Title"

function App() {
  return(
    <div>
      <Title text="Home"/>
    </div>
  )
}
```

Dentro das props também existem o children e basicamnete em vez de usar dentro de atributos em tags de autofechamento usaríamos como conteúdo em componentes de fechamento e de abertura. Assim:

```
function Name(props) {
  return(
    <p>{props.children}</p>
  )
}

export default Name
```
Ao usar esse componente, por exemplo no App.js ficaria dessa forma:

```
import Title from "caminho para o arquivo Name"

function App() {
  return(
    <div>
      <Name>Simara Conceição</Name>
    </div>
  )
}
```

**Exercícios:**

| 01 | Descrição |
| --- | --- |
| `UpperCase` |  Agora vamos criar um componente UpperCase que transforma em CapsLock qualquer texto passado por props. |

| 02 | Descrição |
| --- | --- |
| `LowerCase` |  Agora vamos criar um componente LowerCase que transforma em minúsculo qualquer texto passado por props.|

_______

**Exemplos:**


| Exemplo 1 | Descrição |
| --- | --- |
| `Imagem` |  Vamos aprender como trabalhar com imagens, criando um componente que recebe um nome e uma imagem. E depois renderizar na tela esse card.|

| Exemplo 2 | Descrição |
| --- | --- |
| `Cards` | Vamos usar dados de um arquivo interno que simula um JSON para renderizar alguns cards na tela|

| Exemplo 3 | Descrição |
| --- | --- |
| `Lista` | Vamos usar dados de um arquivo interno que simula um JSON para renderizar uma lista na tela|

---
**Desafio:**

#### Calma! É só mais uma TAREFINHA DE CASA pra chamar de sua! Já treinamos bastante com nossos exemplos na aula!

Vamos criar um projetinho react do zero com direito a componetização, consumo de dados internos e uso de props.


> Passo a passo:
1) Crie um projeto react
2) Apague as informações default
3) Crie e exporte um arquivo que simula um JSON
4) Crie um componente título que recebe o texto: "Meu Primeiro Projeto React do Zero", a ser renderizado por props ou children
5) Crie um outro componente que mapeia os dados do arquivo que simula o JSON e retorna em elementos que devem ser renderizados na tela. Os dados devem conter 3 chaves e valores: nome, descrição e imagem.
6) Import no App.js os componentes criados, perceba os erros/warnings que o terminal/console mostra, resolva e faça todos os componentes renderizar na tela 
7) Suba esse projeto no github, atualize o read me contando tudo o que você aprendeu e usou. E suba no classroom.
8) Tente fazer entre domingo e terça, para aproveitar a aula de quarta e as monitorias pra tirar dúvidas.
9) Arraseee! E qualquer coisa, me chama!


#### Vamos nos conectar!
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [tiktok](https://www.tiktok.com/@simaraconceicao?)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [blog](https://simaraconceicao.com)


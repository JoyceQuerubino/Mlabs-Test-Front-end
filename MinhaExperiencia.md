## Como foi a minha experiência durante a execução do projeto

Realizar esse desafio foi muito interessante, através dele eu consegui aprender diversas coisas e sinto que consegui aumentar ainda mais meus conhecimentos e independente do resultado do processo seletivo, fico muito feliz de ter participado e concluído o desafio.

Foi muito divertido e interessante transformar o design do figma em um site totalmente responsivo e interativo e por mais que tenham aparecido diversas dificuldades durante sua execução, muitas madrugadas codando e a contínua pressão para respeitar o prazo, me senti realizada após a conclusão.

E se possível com toda certeza gostaria de receber algumas dicas de melhorias e um feedback sobre o meu projeto. 😁

## Decisões Técnicas

Para o desenvolvimento do projeto eu optei por utilizar apenas o **HTML**, **CSS** e **JavaScript**, ao invés de usar o React, isso porque mesmo estando aprendendo esse framework, me senti mais confortável em efetuar o desafio sem ele, principalmente por conta do prazo apertado e do meu maior domínio das outras linguagens.

Além disso eu utilizei uma template engine chamada **Nunjucks** para possibilitar o reuso de parte do meu código, como o menu superior.

No início pensei ser obrigatório o uso de uma API para consumir alguns dados, por isso já iniciei criando um servidor, mas depois percebi que este não era um requisito obrigatório, porém decidi continuar com ela para aprimorar meu projeto.  
Essa API foi criada através do **Node.js** e utilizei o **Nodemon** para atualizar automaticamente meu projeto, eliminando o tempo de reiniciar o servidor a cada alteração.

### CSS

Para melhorar a organização do meu projeto, dividi o CSS em vários arquivos com o nome correspondente à sua respectiva página, além disso criei uma arquivo ‘global’ que apresentasse as configurações genéricas para todas as páginas, como botões, animações, e até variáveis de cor.

Optei por adicionar essas variáveis pensando no futuro ou crescimento deste projeto, dessa forma se for necessário uma alteração da paleta de cores, é muito mais simples sua implementação.

Na organização do código, tentei manter o máximo possível um padrão na declaração ordenada e hierárquica dos parâmetros do CSS, desta forma a leitura e alteração dos dados

Já na escolha do layout, por conta da responsividade e do modelo das páginas do projeto, decidi utilizar muito mais o display flex, sendo utilizado apenas na página da listagem de agendamento o display grid.

### JavaScript

Para melhorar a organização do projeto, assim como no CSS eu dividi os arquivos JS criando um para cada página. E além disso, separei as variáveis e constantes no início do código, e segui a ordem hierárquica das ações para criar as funções.

### Animações

Para que o projeto tivesse uma interação mais fluída e fornecesse ao usuário uma melhor experiência, decidi adicionar algumas animações através do CSS. E quase adicionei uma animação no vetor da carinha do Modal de agendamento através do After Effects, porém o tempo não me permitiu.

### Responsividade

Para que a responsividade fosse fluída de sua versão web até a mobile, dividi o projeto em 4 principais valores para quebra no Media Queries, sendo:

- 1200px: O card de visualização do post é quebrado e enviado para baixo;
- 670px: O card de visualização é removido e o botão para visualizar o post aparece;
- 560px: O botão do rodapé ‘Salvar Rascunho’, é reduzido para ‘Salvar’;
- 420px: Os botões do rodapé tem o tamanho de font e largura reduzidos.

## Linhas de comentários

Para o desenvolvimento desse projeto escolhi adicionar algumas linhas de comentário apenas no arquivo do JavaScript, para facilitar a compreensão do objetivo de cada função, não sei qual o padrão de Design Patterns aplicado pela empresa e espero não ter atrapalhado o código com eles.

## Dificuldades enfrentadas

Durante a realização desse projeto eu listei 6 dificuldades principais que acabaram ocupando bastante tempo de desenvolvimento.

**1 - Definição do layout da página de agendamento**

Inicialmente eu pensei em criar o layout através do display grid, dividindo o conteúdo em partes, sendo: menu, configurações do post, visualização do post e rodapé. Porém, quando testei a responsividade, percebi que não estava tendo o efeito que eu gostaria. Então refiz o layout substituindo para ‘display flex’, mas seguindo a mesma divisão do conteúdo. Esse retrabalho acabou consumindo mais tempo tempo.

**2 - Estilização do botão de upload de imagem**
Durante meu aprendizado com desenvolvimento front-end, eu ainda não havia tido a oportunidade de trabalhar com campos do tipo “file”, e percebi da pior maneira que eles costumam ser campos bem restritos há estilizações.

Então após algumas pesquisas, descobri que era possível alterar esse input utilizando o JQuery, porém eu nunca havia trabalhado com essa biblioteca. Mas mesmo assim não desisti, e encontrei com a ajuda de alguns fóruns uma solução para o problema.

Como nunca trabalhei com o JQuery, decidi colocar os códigos neste formato separado em outro arquivo, chamado ‘actions-jquery.js’.

**3 - Estilização do input do tipo data**

Para estilização de campos input como data e hora, eu normalmente utilizava Material Design, porém como nesse projeto não foi permitida a utilização, procurei outras formas de fazer na internet e descobri o Query UI. E através de um pouco de aprendizagem e tempo, consegui com facilidade estilizar o calendário conforme solicitado no Design, porém não consegui remover as ‘bolinhas’ para troca de mês.

<h1 align = center>
    <img src="https://ik.imagekit.io/joyceQuerubino/Mlabs/Calendario_ij-ljbqjU.png">
</h1>

**4 - Problemas ao usar o Query UI**
Ao utilizar o Query UI, descobri que a entrada de dados, não é contabilizada por ‘inputs’, o que acabou me confundido já que para habilitar o botão de ‘Agendar’, eu criei um requisito que um botão de rede social, uma data e a hora estivessem inseridos, e esse requisito eram validados após os inputs.

O que fez com que os requisitos só fossem validados após o input da hora, sendo assim se o usuário fizesse na seguinte ordem: ‘Botão de rede social – data – hora’, iria funcionar, porém se o usuário esquecesse de colocar a data e quisesse adicionar depois da hora, não iria funcionar.

Para resolver isso, eu criei uma função chamada ‘check’, responsável por efetuar a validação, e adicionei ela em todos os requisitos (nos botões de redes sociais, data e hora) E no final efetuei a ação no input do formulário.

Assim, independente da ordem que o usuário seguir, se os requisitos forem compridos a validação acontece.

**5 - Adição de emojis**
Para adicionar o botão de emojis na Textarea, eu utilizei uma biblioteca chamada **EmojioneArea**, porém fiz algumas modificações no arquivo para deixar mais próximo do layout do projeto.

<h1 align = center>
    <img src="https://ik.imagekit.io/joyceQuerubino/Mlabs/EmojiAntesDepois_6O0FrDbvR.png">
</h1>

A utilização dessa biblioteca acabou gerando um problema, porque o botão do emoji, sobrescrevia o calendário quando acionado e os modais.

<h1 align = center>
    <img src="https://ik.imagekit.io/joyceQuerubino/Mlabs/Problema_hiwhBUxoV.png">
</h1>

**6 - Problema na leitura da arvore de elementos**
Na página de agendamento existe um botão de 'fechar' quando o modal é aberto, essa ação é bem simples de ser implementada. Porém, quando adicionei o código, ele não funcionava, mas ao movimentar essa função para o inicio do código em js, ela funcionava.

Para solucionar esse problema de leitura da arvore de elementos, eu coloquei o código, no topo do javaScript, logo abaixo da função check. Desta forma, ocorrendo um funcionamento correto e não desabilitando os outros botões.

```js
btnCloseModal.onclick = function () {
  modalOverlay.classList.remove("active");
  linkedinModal.classList.remove("post-on");
  instagramModal.classList.remove("post-on");
};
```

**7 - A página de listagem exibe apenas a rede social selecionada**
Esse com toda a certeza foi um dos maiores desafios no desenvolvimento deste código e que me rendeu longas horas de tentativa, erros, muito drama e pesquisas.

A página de listagem, deve exibir apenas o ícone da rede social anteriormente selecionada, porém quando ocorre a troca de url, a pagina recebe um refresh e todos os dados são recarregados, desta forma eu não poderia utilizar nenhuma variável, porque seu valor seria zerado.

Após algumas pesquisas, decidi utilizar a url da página, adicionando o código abaixo que abriria a página correta para cada rede social.

Porém, obviamente não seria interessante criar uma página para cada tipo, e quanto mais eu pesquisava, mais interações complexas que eu nunca havia feito, eu tentava, como por exemplo a utilização de requisições AJAX, API Fatch, e muitas outras coisas. Porém nenhuma delas me ajudou a conseguir o resultado esperado.

Então pesquisei formas de ‘ao carregar a página’, um evento ocorrer, porém na maioria dos fóruns e documentações era citado apenas o ‘window.location.href’, mas ele não faz exatamente isso.

Mas para minha alegria, finalmente descobri através de um amigo a existência do ‘window.location.search.split’, que me permitiu pegar o valor da url, e comparar a qual rede social o final da url correspondia.

** 8 - Publicação do site através do Netfly**

Para a publicação do teste, optei por realizar através do Netfly que é hoje a forma mais simples. Porém, após algumas tentativas, descobri que ele não consegue ler arquivos que contenham ‘Nunjucks’, assim o site não era publicado e era exibido apenas uma mensagem de erro.

Para tentar contornar esse problema, procurei outros sites de hospedagem gratuita. Porém não obtive sucesso. Então decidi copiar todo o site para um outro arquivo e remover o ‘Nunjucks’ e o servidor de todas as páginas, para que dessa forma a publicação pudesse ser possível.

## Requisitos

Todos os requisitos gerais e do nível junior foram cumpridos. O único detalhe não cumprido foi a estilização do input de hora. Onde o ícone ficou para o lado direito, e por conta do tempo curto acabei não conseguindo estilizar.

---

Ao final desse projeto, posso dizer que adquiri inúmeros novos conhecimentos e me desenvolvi ainda mais como programadora, fico muito grata de ter participado e espero ter apresentado um ótimo resultado final. 😁🚀

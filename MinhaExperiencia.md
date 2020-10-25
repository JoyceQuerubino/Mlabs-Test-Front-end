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

(IMAGEM DO BOTÃO)

**3 - Estilização do input do tipo data**

Para estilização de campos input como data e hora, eu normalmente utilizava Material Design, porém como nesse projeto não foi permitida a utilização, procurei outras formas de fazer na internet e descobri o Query UI. E através de um pouco de aprendizagem e tempo, consegui com facilidade estilizar o calendário conforme solicitado no Design, porém não consegui remover as ‘bolinhas’ para troca de mês.

(IMAGEM DO CALENDARIO E BOLINHAS)

**4 - Problemas ao usar o Query UI**
Ao utilizar o Query UI, descobri que a entrada de dados, não é contabilizada por ‘inputs’, o que acabou me confundido já que para habilitar o botão de ‘Agendar’, eu criei um requisito que um botão de rede social, uma data e a hora estivessem inseridos, e esse requisito eram validados após os inputs.

O que fez com que os requisitos só fossem validados após o input da hora, sendo assim se o usuário fizesse na seguinte ordem: ‘Botão de rede social – data – hora’, iria funcionar, porém se o usuário esquecesse de colocar a data e quisesse adicionar depois da hora, não iria funcionar.

Para resolver isso, eu criei uma função chamada ‘check’, responsável por efetuar a validação, e adicionei ela em todos os requisitos (nos botões de redes sociais, data e hora) E no final efetuei a ação no input do formulário.

Assim, independente da ordem que o usuário seguir, se os requisitos forem compridos a validação acontece.

**5 - Adição de emojis**

**6 - Preview da rede social na página de listagem**
Na página de listagem existe um botão para o preview da rede social, e por mais que essa interação seja simples, durante a execução do código a ação do click não funcionava. Isso porque na declaração da ação no JS eu estava colocando no final do arquivo, e percebi que ao colocar no topo do arquivo, logo depois da declaração as variáveis o mesmo funcionava, porém desabilitava a ação do click dos botões de redes sociais.

Para solucionar esse problema de leitura da arvore de elementos, eu coloquei o código, no topo do javaScript, logo abaixo da função check e adicionei um ‘if’. Desta forma, ocorrendo um funcionamento correto e não desabilitando os outros botões.
O mesmo aconteceu com o botão de fechar do modal de exibição, e para solucionar o problema, efetuei a mesma ação, movendo as linhas de códigos para o topo do arquivo js.

(CODIGO DESSA PARTE)

**7- A página de listagem exibe apenas a rede social selecionada**
Essa com toda a certeza foi um dos maiores desafios no desenvolvimento deste código.

## Requisitos

Todos os requisitos gerais e do nível junior foram cumpridos. O único detalhe não cumprido foi a estilização do input de hora. Onde o ícone ficou para o lado direito, e por conta do tempo curto acabei não conseguindo estilizar.

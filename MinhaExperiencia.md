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

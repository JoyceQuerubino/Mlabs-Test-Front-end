# Teste front-end Junior da Mlabs

O projeto desenvolvido é um teste do processo seletivo para desenvolvedor Front-end Junior da empresa **[mLabs](https://www.mlabs.com.br//)**, cujo objetivo é criar interfaces responsivas que possibilitem o usuário agendar uma publicação em algumas redes sociais, além de permitir que ele possa visualizar uma lista com os agendamentos por status de publicação.

O layout do projeto foi disponibilizado através do Figma, pelo **[link](https://www.figma.com/file/JYNYnwyXKa0N3m7myjF8Y4/v1)**.

E é possível ver a versão através do link:

## 📱 Preview Mobile

<h1 align = center>
    <img src="/public/images/imagem.png">
</h1>

## 🖥 Preview Web

<h1 align = center>
    <img src="public/images/imagem.png">
</h1>

## 📄 Páginas

O site é composto por 3 diferentes páginas:

- **Página de Home**: okokok
- **Página de agendamento**: okokokoko
- **Página de listagem de agendamento**: okokokok

## 🛠 Tecnologias

- HTML
- CSS
- JavaScript
- JQuery
- Node.js
- Gerenciador de pacotes npm
- Nunjucks

### 📚 Bibliotecas utilizadas

- Para adicionar os emoticons, utilizei a biblioteca **[Emoji Picker](https://github.com/OneSignal/emoji-picker)**
- Para estilizar os campos de calendário e data, utilizei a biblioteca **[JQuery UI](https://jqueryui.com/)**

## 🚀 Como executar o projeto

```bash

# Clone o repositório
git clone https://github.com/JoyceQuerubino/Mlabs-Test-Front-end

# Instale as dependências
npm init -y
npm install express
npm install -D nodemon
npm install nunjucks

# Executando o servidor
npm start

# O projeto inciará na porta: 5000 - acesse http://localhost:5000

```

No projeto, eu utilizei a template engine Nunjucks para reutilização de códigos do layout. E para melhorar a visualização do código é interessante adicionar a extenção do Visual Studio Code **[Nunjucks Template Formatter](https://marketplace.visualstudio.com/items?itemName=okitavera.vscode-nunjucks-formatter)** e adicionar a seguinte configuração:

1.  comand + shift + p
2.  pesquise pela opção: "Open Settings (JASON)"
3.  Adicione a seguinte linha de códigos:

```js
"emmet.includeLanguages": {
        "njk" : "html"
    }
```

---

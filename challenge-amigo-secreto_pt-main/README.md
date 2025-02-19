# Amigo Secreto

Este projeto consiste em uma aplicação web simples para organizar um sorteio de amigo secreto. Ele permite que os usuários adicionem nomes de participantes, visualizem a lista de amigos e realizem o sorteio aleatório de um participante.

## 📌 Funcionalidades

1. **Adicionar amigos**: O usuário pode inserir nomes de participantes na lista.
2. **Visualizar a lista de amigos**: Todos os nomes adicionados são exibidos dinamicamente na tela.
3. **Sortear um amigo secreto**: Um nome aleatório é escolhido entre os participantes cadastrados.

## 📁 Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: Contém a estrutura HTML da aplicação.
- `style.css`: Define os estilos visuais da interface.
- `app.js`: Contém a lógica de funcionamento da aplicação.

## 🖼️ Interface

A interface é simples e responsiva, contando com:

- Um cabeçalho com o título "Amigo Secreto" e uma imagem ilustrativa.
- Um campo de entrada para adicionar os nomes dos participantes.
- Um botão para adicionar os nomes.
- Uma lista onde os nomes adicionados aparecem.
- Um botão para realizar o sorteio do amigo secreto.
- Um espaço onde o nome sorteado será exibido.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação da página.
- **CSS3**: Estilização e responsividade.
- **JavaScript (ES6)**: Lógica do funcionamento.

## 🚀 Como Usar

1. **Abrir o arquivo `index.html` em um navegador**.
2. **Inserir nomes no campo de entrada** e clicar no botão "Adicionar".
3. **Ver a lista de amigos** sendo atualizada.
4. **Clicar no botão "Sortear amigo"** para realizar o sorteio.
5. **O nome sorteado será exibido na tela**.

## 📝 Explicação do Código

### 📌 HTML

- Estrutura da página contendo os elementos principais como título, campo de entrada, botões e lista de amigos.
- O botão "Sortear amigo" chama a função `sortearAmigo()` ao ser clicado.

### 🎨 CSS

- Define um layout responsivo com cores harmônicas.
- Usa variáveis CSS para facilitar a personalização do tema.
- Aplica estilos interativos aos botões e entradas.

### ⚙️ JavaScript

- **`adicionarAmigo()`**: Adiciona um nome à lista, garantindo que o campo não fique vazio.
- **`atualizarAmigos()`**: Atualiza a lista exibida na tela conforme os nomes são adicionados.
- **`sortearAmigo()`**: Realiza um sorteio aleatório entre os nomes cadastrados e exibe o resultado na tela.

## 📌 Melhorias Futuras

- Opção para remover participantes da lista.


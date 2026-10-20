# Catálogo de Pokémons

Catálogo interativo da primeira geração de Pokémon, feito com React, Vite e Tailwind CSS. A aplicação consome a PokeAPI, mostra os 151 primeiros pokémons em cards e filtra a lista em tempo real conforme o usuário digita.

## Funcionalidades

- Listagem dos 151 primeiros pokémons, com imagem e nome
- Busca por nome em tempo real, sem diferenciar maiúsculas de minúsculas
- Indicador de carregamento enquanto os dados são buscados
- Mensagem de erro caso a requisição falhe
- Layout responsivo: de 1 a 4 colunas, conforme a largura da tela

## Tecnologias utilizadas

- [React](https://react.dev/) (hooks `useState` e `useEffect`)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript (ES6+)
- [PokeAPI](https://pokeapi.co/)

## Destaques do código

- **Custom hook reutilizável:** o `useFetch` recebe qualquer função assíncrona e devolve `{ data, loading, error }`, então os componentes não repetem a lógica de requisição.
- **Camada de serviço:** o `api.js` busca os dados e converte o formato da API (`{ name, url }`) no formato que a interface usa (`{ id, name, image }`). Se a API mudar, só esse arquivo precisa mudar.
- **Filtro calculado, não armazenado:** a lista exibida é calculada a cada renderização a partir da lista completa e do texto da busca, sem estado duplicado que pudesse sair de sincronia.
- **Formulário controlado:** o valor do campo de busca vem do estado do React e é atualizado a cada tecla. O estado fica na `Home` e desce por props, porque a busca e a lista dependem dele.
- **Componentes pequenos, com uma responsabilidade cada:** card, lista, busca e indicador de carregamento são arquivos separados, ligados por props.
- **Estados da interface tratados:** carregamento, erro e lista têm tratamento próprio, em vez de a tela ficar em branco.

## Como instalar e executar

Pré-requisito: ter o [Node.js](https://nodejs.org/) (que já inclui o npm) instalado.

1. Baixe ou clone o projeto e abra a pasta dele no terminal.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço que aparece no terminal (normalmente `http://localhost:5173`).

## API utilizada

**PokeAPI** (https://pokeapi.co/), uma API pública que não exige chave de acesso.

Endpoint usado:

```
GET https://pokeapi.co/api/v2/pokemon?limit=151
```

A resposta traz um objeto com a lista dentro de `results`, e cada item tem apenas `name` e `url`. Por padrão, a PokeAPI devolve só 20 itens por página, por isso o parâmetro `limit=151` é usado para trazer a primeira geração inteira.

O `id` de cada pokémon não vem pronto: ele é extraído da `url` (por exemplo, `https://pokeapi.co/api/v2/pokemon/1/`). Com o `id`, a função monta o endereço da imagem, que fica no repositório de sprites mantido pelo projeto PokeAPI:

```
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png
```

## Estrutura do projeto

```
src/
├── components/
│   ├── ItemCard.jsx        # Card de um pokémon (recebe o item por props)
│   ├── ItemList.jsx        # Grid responsivo que renderiza um ItemCard por item
│   ├── SearchForm.jsx      # Campo de busca (input controlado)
│   └── LoadingSpinner.jsx  # Indicador de carregamento
├── hooks/
│   └── useFetch.js         # Custom hook: controla data, loading e error
├── pages/
│   └── Home.jsx            # Página principal: junta busca, filtro e lista
├── services/
│   └── api.js              # Busca na PokeAPI e formata os dados
├── App.jsx
├── main.jsx
└── index.css               # Configuração do Tailwind
```

## Próximos passos

- Página de detalhes do pokémon (tipos, altura, peso)
- Favoritos salvos no `localStorage`, com um hook `useLocalStorage`
- Paginação ou rolagem infinita no lugar do limite fixo de 151

## Aviso

Projeto sem fins comerciais, feito para estudo. Os nomes e as imagens dos Pokémon pertencem à Nintendo, à Game Freak e à The Pokémon Company, e os dados vêm da PokeAPI.

Desenvolvido durante a disciplina de aplicações front-end.

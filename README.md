# Menu Web - NewWay Pro

Interface web para o menu do NewWay Pro, um sistema de mod menu para GTA V.

## 🚀 Funcionalidades

- **Navegação por Categorias**: Self, Teleport, Vehicles, Network, World, Recovery, Settings
- **Interface Dinâmica**: Conteúdo que muda baseado na categoria selecionada
- **Breadcrumbs Inteligentes**: Navegação contextual
- **Design Responsivo**: Interface moderna e adaptável

## 🛠️ Tecnologias

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Vite** - Build tool e dev server

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/newway-xyz/menu-web.git
cd menu-web

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

## 🏗️ Build

```bash
# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy no GitHub Pages

### Método 1: Automático (Recomendado)

1. Faça push das mudanças para a branch `main`
2. O GitHub Actions irá automaticamente fazer o build e deploy
3. Acesse: `https://newway-xyz.github.io/menu-web/`

### Método 2: Manual

```bash
# Deploy manual
npm run deploy
```

### Configuração do GitHub Pages

1. Vá para Settings > Pages no seu repositório
2. Source: Deploy from a branch
3. Branch: `gh-pages`
4. Folder: `/ (root)`
5. Save

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── content/          # Componentes de conteúdo por categoria
│   ├── Menu.tsx          # Componente principal
│   ├── DynamicContent.tsx # Roteamento dinâmico
│   └── ...
├── data/
│   └── categories.ts     # Dados das categorias
├── utils/
│   ├── breadcrumbs.ts    # Geração de breadcrumbs
│   └── categoryUtils.ts  # Utilitários de categoria
└── ...
```

## 🔧 Configuração

### Base Path

O projeto está configurado para rodar em `/menu-web/`. Se você mudar o nome do repositório, atualize:

1. `vite.config.ts` - linha `base: "/novo-nome/"`
2. `package.json` - script deploy

## 📝 Licença

Este projeto é privado e proprietário.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🔗 Links

- **Repositório**: https://github.com/newway-xyz/menu-web
- **Site**: https://newway-xyz.github.io/menu-web/
- **Issues**: https://github.com/newway-xyz/menu-web/issues

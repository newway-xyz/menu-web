# 🚀 Guia de Deploy - GitHub Pages

## Configuração Inicial

### 1. Configuração do Repositório

O projeto já está configurado para GitHub Pages com:

- ✅ Base path configurado em `vite.config.ts`
- ✅ GitHub Actions workflow em `.github/workflows/deploy.yml`
- ✅ Script de deploy no `package.json`

### 2. Ativar GitHub Pages

1. Vá para o repositório: https://github.com/newway-xyz/menu-web
2. Clique em **Settings**
3. Role para baixo até **Pages**
4. Em **Source**, selecione **Deploy from a branch**
5. Em **Branch**, selecione **gh-pages**
6. Em **Folder**, selecione **/ (root)**
7. Clique **Save**

### 3. Primeiro Deploy

Após fazer push para a branch `main`, o GitHub Actions irá:

1. Fazer build do projeto
2. Criar a branch `gh-pages`
3. Fazer deploy dos arquivos

## URLs de Acesso

- **Desenvolvimento**: `http://localhost:5173/`
- **Produção**: `https://newway-xyz.github.io/menu-web/`

## Comandos Úteis

```bash
# Build local
npm run build

# Preview do build
npm run preview

# Deploy manual (se necessário)
npm run deploy
```

## Troubleshooting

### Problema: Página não carrega

- Verifique se o base path está correto em `vite.config.ts`
- Confirme se a branch `gh-pages` foi criada
- Verifique os logs do GitHub Actions

### Problema: Assets não carregam

- Certifique-se de que o base path está configurado corretamente
- Verifique se os caminhos dos assets estão relativos

### Problema: Build falha

- Verifique se todas as dependências estão instaladas
- Confirme se não há erros de TypeScript
- Verifique os logs do GitHub Actions

## Personalização

### Mudar Nome do Repositório

Se você mudar o nome do repositório, atualize:

1. `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/novo-nome/", // ← Atualizar aqui
});
```

2. `package.json` - script deploy:

```json
"deploy": "npm run build && git add dist -f && git commit -m 'deploy' && git subtree push --prefix dist origin gh-pages"
```

### Configurações Avançadas

Para configurações mais avançadas, consulte:

- [Vite Base Path](https://vitejs.dev/config/shared-options.html#base)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions](https://docs.github.com/en/actions)

## 🔗 Links Importantes

- **Repositório**: https://github.com/newway-xyz/menu-web
- **Site**: https://newway-xyz.github.io/menu-web/
- **Actions**: https://github.com/newway-xyz/menu-web/actions
- **Issues**: https://github.com/newway-xyz/menu-web/issues

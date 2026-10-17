# Lavanderia Dr. Sabão 🫧👕

<p align="center">
  <img src="public/logo-oficial.png" alt="Lavanderia Dr. Sabão - Logo Oficial" width="600" />
</p>

<p align="center">
  <strong>Lavanderia Especializada em Curitiba desde 2011 • Alto da XV</strong>
</p>

---

## 🎨 Identidade Visual e Arquivos de Logo no Repositório

Todas as versões em alta definição (PNG e SVG vetorial) estão versionadas na pasta [**`public/`**](./public):

| Arquivo | Formato / Resolução | Descrição |
| :--- | :--- | :--- |
| [**`public/logo-oficial.png`**](./public/logo-oficial.png) | PNG 600×300 px | Logo oficial completa (Mascote + Tipografia Dr. Sabão + Lavanderia) |
| [**`public/logo-hd.png`**](./public/logo-hd.png) | PNG Alta Resolução 1200×600 px | Versão em altíssima definição para materiais gráficos |
| [**`public/logo-oficial.svg`**](./public/logo-oficial.svg) | Vetor SVG Infinito | Vetor oficial escalável sem perda de qualidade |
| [**`public/logo-mascote.svg`**](./public/logo-mascote.svg) | Vetor SVG 500×500 px | Emblema circular oficial com mascote e bolhas |
| [**`public/adesivo-banner.svg`**](./public/adesivo-banner.svg) | Vetor SVG 2:1 | Adesivo de fachada / banner institucional |
| [**`public/logo-horizontal.svg`**](./public/logo-horizontal.svg) | Vetor SVG | Versão horizontal para headers e assinaturas |

---

## 🚀 Como Executar o Projeto Localmente

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Gerar build de produção**:
   ```bash
   npm run build
   ```

---

## 🌐 Publicação no GitHub Pages ou Vercel

- **GitHub Pages**: Configurado via GitHub Actions em [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). Ele compila o projeto React/Vite com Node.js 20 e publica automaticamente a pasta `dist`.
- **Vercel / Netlify**: Conecte o repositório diretamente para deploy contínuo em menos de 1 minuto.
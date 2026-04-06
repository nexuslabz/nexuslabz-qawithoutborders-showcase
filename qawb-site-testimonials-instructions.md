# Instrução: Seção de Depoimentos para o Site da QAWB

## Objetivo

Criar uma seção de depoimentos/resultados no site da QA Without Borders Mentory para funcionar como prova social. A seção mostra resultados concretos de mentorados com foto, nome, cargo, métrica principal e tempo.

---

## Conteúdo dos Depoimentos

### 1. Bernardo Meine
- **Foto**: `bernardo.png`
- **LinkedIn**: https://www.linkedin.com/in/bernardodemoraesmeine/
- **Cargo**: QA Engineer — Junior
- **Resultado principal**: 3 entrevistas com budget em dólar
- **Tempo**: Em menos de 1 mês
- **Contexto**: Entrou como QA Junior, com experiência em Playwright e TypeScript. Em menos de 1 mês de mentoria já estava em 3 processos seletivos internacionais com budget em dólar.

### 2. Marcio Ximenes
- **Foto**: `marcio-ximenes.jpeg`
- **LinkedIn**: https://www.linkedin.com/in/marcio-ximenes/
- **Cargo**: QA Automation — Senior (+15 anos de experiência)
- **Resultado principal**: Proposta de quase R$ 20 mil
- **Tempo**: Reposicionamento de carreira
- **Contexto**: QA Senior com larga experiência, usou a mentoria pra se reposicionar no mercado e recebeu proposta de quase R$ 20K.

### 3. João André Anunciação
- **Foto**: `joao-andre.jpeg`
- **LinkedIn**: https://www.linkedin.com/in/joaoandreanunciacao/
- **Cargo**: QA Analyst — Senior (+15 anos de experiência)
- **Resultado principal**: 2 entrevistas com budget em dólar
- **Tempo**: Em 2 semanas
- **Contexto**: QA Senior experiente que em apenas 2 semanas de mentoria já tinha 2 entrevistas agendadas com empresas internacionais pagando em dólar.

---

## Estrutura Visual da Seção

### Título
- Tag/label: "Resultados Reais"
- Título principal: "O Que Nossos Mentorados Estão Conquistando"

### Cards (3 colunas em desktop, empilhados em mobile)
Cada card contém:
1. **Foto** (circular, 72px, borda colorida sutil)
2. **Nome** (destaque, branco)
3. **Cargo/nível** (texto secundário)
4. **Métrica principal** (número grande, cor de destaque, fonte bold 800)
5. **Detalhe da métrica** (texto complementar menor)
6. **Badge de tempo** (pill/tag pequena com o prazo)

### Frase de fechamento
"Resultados em semanas, não em anos. Acesso a oportunidades em dólar com aplicação prática."

---

## Paleta de Cores (identidade QAWB)

Cada card usa uma cor de destaque da marca:

| Card | Cor | CSS Variable | Hex |
|------|-----|-------------|-----|
| Bernardo | Cyan | `--cyan` | `#7ddcf0` |
| Marcio | Purple | `--neon-purple` | `#6245bc` |
| João André | Pink | `--neon-pink` | `#ce4be5` |

### Variáveis de cor completas da QAWB
```css
--cyan: #7ddcf0;
--cyan-dim: #5bc4d8;
--neon-pink: #ce4be5;
--neon-purple: #6245bc;
--neon-purple-glow: #7b5ed6;
--pure-black: #000000;
--dark-surface: #0a0a14;
```

A cor aparece em:
- Barra de 3px no topo do card
- Borda da foto (30% opacity)
- Número/métrica principal
- Gradient no título da seção: `linear-gradient(135deg, var(--cyan), var(--neon-purple))`

---

## Diretrizes de Design

- Layout limpo, fundo escuro (`#000` ou `#0a0a14`)
- Números grandes e em destaque (é o que o olho pega primeiro)
- Pouco texto, alta legibilidade
- Contraste forte nos números coloridos contra fundo escuro
- Cards com borda sutil (`rgba(255,255,255,0.08)`) e background `#0a0a14`
- Badge de tempo em pill com background `rgba(255,255,255,0.05)`
- Fonte: Inter (mesma do site)
- Responsivo: 3 colunas em desktop, 1 coluna em mobile

---

## Onde posicionar no site

A seção funciona bem em dois lugares:
1. **Logo após a descrição da mentoria** (hook de prova social antes do detalhamento)
2. **Antes do CTA principal** (empurrão final antes da ação)

---

## Mensagem central a ser transmitida

- Funciona rápido (semanas, não anos)
- Funciona pra Junior e Senior
- Gera resultado financeiro concreto
- Abre portas internacionais (oportunidades em dólar)

---

## Referência visual

A implementação de referência está no showcase da QAWB:
- Repositório: `nexuslabz-qawithoutborders-showcase`
- Componente: `presentations/info/src/sections/SocialProofSection.vue`
- Dados: `presentations/info/src/i18n/pt-BR.js` (chave `socialProof`)
- Fotos: `shared/assets/photos/` (bernardo.png, marcio-ximenes.jpeg, joao-andre.jpeg)

---

## Evoluções Futuras

- Adicionar mais depoimentos conforme novos resultados surgirem
- Incluir prints de LinkedIn / propostas reais (quanto mais "cru", melhor)
- Criar seção "Antes vs Depois" com timeline de evolução
- Adicionar vídeo-depoimento (via QR code ou embed)

# ALM – LUXURY DESIGN SYSTEM

Laboratório de Palavras | Ideias em Texto
Estúdio Digital de Comunicação e Escrita Profissional

*Sistema de Design Editorial para Comunicação Profissional*

Alma · limpa · profissional · forte

<p align="center">
  <a href="https://textxto.github.io/alm/"><strong>Tema Oficial</strong></a> ·
  <a href="docs/"><strong>Documentação</strong></a> ·
  <a href="https://github.com/textxto/alm"><strong>Repositório</strong></a>
</p>

<p align="center">
  <img alt="Design System" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230055A4' stroke-width='1.5'%3E%3Crect x='3' y='3' width='18' height='18' rx='2'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E"> UIkit ·
  <img alt="JavaScript" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230055A4' stroke-width='1.5'%3E%3Cpath d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/%3E%3Cpolyline points='14 2 14 8 20 8'/%3E%3C/svg%3E"> JavaScript ·
  <img alt="Acessível" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230055A4' stroke-width='1.5'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 8v4M12 16h.01'/%3E%3C/svg%3E"> Acessível ·
  <img alt="Responsivo" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230055A4' stroke-width='1.5'%3E%3Crect x='4' y='4' width='16' height='16' rx='2'/%3E%3Cline x1='8' y1='2' x2='8' y2='6'/%3E%3Cline x1='16' y1='2' x2='16' y2='6'/%3E%3C/svg%3E"> Responsivo
</p>

---

## Índice

- [Visão Geral](#visão-geral)
- [Características Principais](#características-principais)
- [Arquitetura](#arquitetura)
- [Estrutura do Repositório](#estrutura-do-repositório)
- [Como Utilizar](#como-utilizar)
- [Deploy via GitHub Pages](#deploy-via-github-pages)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contacto](#contacto)

---

## Visão Geral

O **ALM – Luxury Design System** é a identidade visual e estrutural do Laboratório de Palavras. Um ecossistema editorial digital desenhado para transmitir elegância silenciosa, rigor técnico e clareza absoluta.

**Tema oficial:** [https://textxto.github.io/alm/](https://textxto.github.io/alm/)

### O Problema

Num mercado saturado de ruído visual e conteúdo genérico, a maioria das interfaces falha em comunicar com clareza e intenção. Cores excessivas, animações desnecessárias e hierarquias confusas dificultam a experiência do utilizador.

### A Solução

O ALM nasce para devolver **intenção** à comunicação digital. Cada componente, cada cor, cada transição é pensada para servir a mensagem — não para competir com ela. O sistema é construído sobre três pilares: Clareza, Rigor e Elegância.

---

## Características Principais

| Característica | Abordagem ALM |
| :--- | :--- |
| **Paleta** | Azul Profundo, Ouro Sofisticado, Cinzas Elegantes — contraste controlado. |
| **Tipografia** | Inter (corpo), Cormorant (títulos). |
| **UX** | Scroll horizontal com snap, barra de progresso, modo foco. |
| **Micro-interações** | Ripple effects, transições cinemáticas, hover com deslocamento subtil. |
| **Tema dinâmico** | Modo claro/escuro automático (baseado na hora) e manual. |
| **Acessibilidade** | Atributos ARIA, foco visível, navegação por teclado. |

---

## Arquitetura

O ALM é construído sobre uma base técnica sólida e modular:

| Tecnologia | Propósito |
| :--- | :--- |
| **UIkit 3.21.13** | Framework CSS para componentes base. |
| **Google Fonts** | Inter e Cormorant Garamond. |
| **CSS Grid + Flexbox** | Layouts responsivos. |
| **JavaScript (vanilla)** | Micro-interações e lógica de tema. |

A identidade visual é gerida por **variáveis CSS** (`--blue-corporate`, `--gold-premium`, etc.), permitindo consistência global e fácil manutenção.

---


> O código completo do tema está disponível no site publicado. Este repositório é o contentor de governance e documentação.

---

## Como Utilizar

### 1. Visualizar o tema

Aceda diretamente ao site publicado: [https://textxto.github.io/alm/](https://textxto.github.io/alm/)

### 2. Integrar num projeto próprio

O ALM foi construído sobre UIkit 3.21.13 e utiliza Google Fonts (Inter, Cormorant). Para integrar:

1. Inclua os ficheiros CSS e JS do UIkit no seu projeto.
2. Aplique as variáveis CSS do sistema (consulte `PALETA.md` e `DESIGN_SYSTEM.md`).
3. Estruture o HTML seguindo as classes e componentes documentados.

> O tema é fornecido como referência de design. A reprodução não autorizada para fins comerciais está sujeita à licença MIT e aos direitos de marca do Laboratório de Palavras.

---

## Deploy via GitHub Pages

1. Crie uma branch `gh-pages` no seu repositório.
2. Envie o conteúdo da pasta `src/` para essa branch.
3. Ative o GitHub Pages nas definições do repositório, apontando para a branch `gh-pages`.
4. O tema estará disponível em `https://<seu-usuario>.github.io/<seu-repositorio>/`.

---

## Contribuição

Contribuições são bem-vindas. Consulte os templates de issues em `.github/ISSUE_TEMPLATE/` para reportar bugs, sugerir funcionalidades ou melhorias na documentação.

### Diretrizes

- Utilize português europeu em toda a comunicação.
- Respeite a identidade visual ALM (zero emojis, SVGs inline).
- Documente qualquer alteração nos ficheiros `docs/` correspondentes.

---

## Licença

MIT © Laboratório de Palavras | Ideias em Texto

Consulte o ficheiro [`LICENSE`](LICENSE) para mais informações.

---

## Contacto

- **Email:** hello@laboratoriopalavras.estudio
- **Site oficial:** [https://textxto.github.io/alm/](https://textxto.github.io/alm/)
- **Repositório:** [https://github.com/textxto/alm](https://github.com/textxto/alm)

---

<div align="center">
  <sub>© 2026 Laboratório de Palavras — Alma · limpa · profissional · forte</sub>
</div>

---

<p align="center">
  <a href="#alm--luxury-design-system">⬆️ Voltar ao topo</a>
</p>

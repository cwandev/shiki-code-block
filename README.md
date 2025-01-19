 <p align="center">
<img align="center" src="https://raw.githubusercontent.com/selemondev/shiki-code-block/master/assets/logo/shiki-logo.svg" />
<h1 align="center">
Shiki Code Block ✨
</h1>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/shiki-code-block">
    <img alt="npm-version-src" src="https://img.shields.io/npm/v/shiki-code-block/latest.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
  <a href="https://npmjs.com/package/shiki-code-block">
    <img alt="npm-downloads-src" src="https://img.shields.io/npm/dm/shiki-code-block.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
</p>

Shiki Code Block is a Shiki based component that allows you to render code in any language and theme. It is highly customizable and supports both light and dark themes.

## Installation

You can use Shiki Code Block with your favourite framework or library. Install it as shown below

```bash
pnpm add shiki-code-block-react
```

```bash
pnpm add shiki-code-block-vue
```

```bash
pnpm add shiki-code-block-svelte
```

## Svelte Usage

```js
import CodeBlock from 'shiki-code-block-svelte'
const code = `pnpm add shiki-code-block-svelte`
```
```js
<div style="display: grid; place-items: center; height: 100vh; width: 100vw">
  <CodeBlock
    lang="typescript"
    theme={{
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    }}
    code={code}
  />
</div>
```

```css
:global(.shiki--code--block) {
    width: 100%;
    max-width: fit-content;
}
:global(pre) {
    z-index: 1;
    padding: 24px;
    border-radius: 10px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: relative;
    background-color: #F9F9F9 !important;
  }
:global(code) {
    display: block;
    line-height: 1.7;
    font-size: 15px;
}
```

## React Usage

```js
import CodeBlock from 'shiki-code-block-react'
const code = `pnpm add shiki-code-block-react`
```

```js
<CodeBlock
  lang="bash"
  theme={{
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  }}
  code={code}
/>
```

<script lang="ts">
  import type { BuiltinTheme, BundledLanguage, ShikiTransformer } from "shiki";
  import { convertCodeToHtml } from "../utils/codeToHtml.js";

  let codeToHtml = $state("");

  let {
    code,
    lang,
    theme,
    transformers,
  }: {
    code: string;
    lang: BundledLanguage;
    theme: { light: BuiltinTheme; dark?: BuiltinTheme };
    transformers?: ShikiTransformer[];
  } = $props();

  const handleConvertCodeToHTML = async () => {
    return (codeToHtml = await convertCodeToHtml(
      code?.trim(),
      lang,
      { light: theme.light, dark: theme.dark || "vitesse-dark" },
      transformers || []
    ));
  };

  $effect(() => {
    handleConvertCodeToHTML();
  });
</script>

<div
  role="region"
  aria-labelledby="codeLabel"
  tabIndex={0}
  aria-live="polite"
  aria-roledescription="code block"
  lang="en"
  class="shiki--code--block"
>
  {@html codeToHtml}
</div>

<style>
  :global(.shiki--code--block) {
    width: 100%;
    max-width: max-content;
  }

  :global(pre) {
    z-index: 1;
    padding: 24px;
    border-radius: 10px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: relative;
    background-color: #f9f9f9 !important;
  }

  :global(code) {
    display: block;
    line-height: 1.9;
  }
</style>

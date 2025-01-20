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
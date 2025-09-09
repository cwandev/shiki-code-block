import { useEffect, useState } from "react";
import type { BuiltinTheme, BundledLanguage, ShikiTransformer } from "shiki";
import { convertCodeToHtml } from "@/lib/utils/codeToHtml";

function CodeBlock({
	code,
	lang,
	theme,
	transformers,
}: {
	code: string;
	lang: BundledLanguage;
	theme: {
		light: BuiltinTheme;
		dark?: BuiltinTheme;
	};
	transformers?: ShikiTransformer[];
}) {
	const [codeToHtml, setCodeToHtml] = useState("");

	const handleConvertCodeToHTML = async () => {
		const codeToHtml = await convertCodeToHtml(
			code?.trim(),
			lang,
			{ light: theme.light, dark: theme.dark || "vitesse-dark" },
			transformers || [],
		);
		return setCodeToHtml(codeToHtml);
	};

	const setInnerHTML = () => {
		return { __html: codeToHtml };
	};
	useEffect(() => {
		handleConvertCodeToHTML();
	}, [code, lang, theme, transformers]);
	return (
		<>
			<div
				role="region"
				aria-labelledby="codeLabel"
				tabIndex={0}
				aria-live="polite"
				aria-roledescription="code block"
				lang="en"
				className="shiki--code--block"
				dangerouslySetInnerHTML={setInnerHTML()}
			></div>
		</>
	);
}

export default CodeBlock;

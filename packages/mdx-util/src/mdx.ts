import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import markdown from "refractor/lang/markdown";
import rehypePrismGenerator from "rehype-prism-plus/generator";
import { refractor } from "refractor";

type MDX = string;

refractor.register(markdown);

function processer() {
  const prism = rehypePrismGenerator(refractor);
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(prism, { showLineNumbers: true });
}

/**
 * @function parseAsync
 * @description translate markdown content to html
 *
 * @example
 * ```
 * # hello
 *
 * -> <h1>Hello</h1>
 * ```
 *
 * @returns Promise<string>
 **/
export async function parseAsync(mdx: MDX) {
  const file = await processer().process(mdx);
  return file.toString();
}

/**
 * @function parse
 * @description translate markdown content to html
 *
 * @example
 * ```
 * # hello
 *
 * -> <h1>Hello</h1>
 * ```
 *
 * @returns string
 **/
export function parse(mdx: MDX) {
  return processer().processSync(mdx).toString();
}

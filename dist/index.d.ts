type MDX = string;
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
declare function parseAsync(mdx: MDX): Promise<string>;

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
declare function parse(mdx: MDX): string;

export { parse, parseAsync };

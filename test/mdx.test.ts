import { expect, it } from "vitest";
import { describe } from "vitest";
import { parseAsync } from "mdx-util";

describe("--- Headings ---", () => {
  it("expect # to be h1", async () => {
    const htmlTree = await parseAsync("# hello");
    const str = htmlTree.replace(/\s+/g, "");
    expect(str).toEqual("<h1>hello</h1>");
  });

  it("expect ## to be h2", async () => {
    const htmlTree = await parseAsync("## hello");
    const str = htmlTree.replace(/\s+/g, "");
    expect(str).toEqual("<h2>hello</h2>");
  });

  it("expect ### to be h3", async () => {
    const htmlTree = await parseAsync("### hello");
    const str = htmlTree.replace(/\s+/g, "");
    expect(str).toEqual("<h3>hello</h3>");
  });

  it("expect #### to be h4", async () => {
    const htmlTree = await parseAsync("#### hello");
    const str = htmlTree.replace(/\s+/g, "");
    expect(str).toEqual("<h4>hello</h4>");
  });

  it("expect ##### to be h5", async () => {
    const htmlTree = await parseAsync("##### hello");
    const str = htmlTree.replace(/\s+/g, "");
    expect(str).toEqual("<h5>hello</h5>");
  });

  it("expect ###### to be h6", async () => {
    const htmlTree = await parseAsync("###### hello");
    const str = htmlTree.replace(/\s+/g, "");
    expect(str).toEqual("<h6>hello</h6>");
  });
});

describe("--- Link ---", () => {
  const a = `[hello](https://hello.com)`;
  it(`expect ${a} <p><a /></p>`, async () => {
    const html = await parseAsync(a);
    const str = html.replace(/\s+/g, "");
    expect(str).toEqual('<p><ahref="https://hello.com">hello</a></p>');
  });
});

describe("--- Coding ---", () => {
  const ts = '```ts\nconst hello = "world"\n```';
  it(`expect ${ts} to be code block`, async () => {
    const html = await parseAsync(ts);
    expect(html.includes("language-ts")).toBeTruthy();
    expect(html.includes("pre")).toBeTruthy();
    expect(html.includes("line-number")).toBeTruthy();
    expect(html.includes("token")).toBeTruthy();
  });
});

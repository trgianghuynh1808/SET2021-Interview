import React from "react";
import { ServerStyleSheet } from "styled-components";
import App from "client/app";
import { renderToString } from "react-dom/server";
import fs from "fs";
import { HTML_TEMPLATE_PATH } from "../configuration";

export async function renderReactAsync(url: string) {
  // read the html template file

  const staticHtmlContent = await fs.promises.readFile(HTML_TEMPLATE_PATH, {
    encoding: "utf-8",
  });

  const WrappedApp = <App />;
  const [reactContent, styleTags] = renderToStringWithStyles(WrappedApp);

  const renderedHtml = buildHtml(staticHtmlContent, reactContent, styleTags);

  return renderedHtml;
}

function buildHtml(templateHtml: string, reactHtml: string, styleTags: string) {
  const pattern = /(?<head><head>)|(?<root><div\sid="root">)/g;

  return templateHtml.replace(pattern, (match, ...params: any[]) => {
    const groups = params.pop();

    if (groups.head) return groups.head + styleTags;
    if (groups.root) return groups.root + reactHtml;

    return match;
  });
}

function renderToStringWithStyles(component: JSX.Element) {
  const sheet = new ServerStyleSheet();
  try {
    const reactHtml = renderToString(sheet.collectStyles(component));
    const styleTags = sheet.getStyleTags();
    return [reactHtml, styleTags];
  } finally {
    sheet.seal();
  }
}

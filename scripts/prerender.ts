import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const routes = ["/", "/communities", "/media"];
const distDir = path.resolve("dist/public");
const serverEntry = path.resolve("dist/server/entry-server.js");

async function prerender() {
  const template = await fs.readFile(path.join(distDir, "index.html"), "utf-8");
  const { render } = await import(pathToFileURL(serverEntry).href);

  for (const route of routes) {
    const appHtml = render(route);
    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    const filePath =
      route === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, route.replace(/^\//, ""), "index.html");

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, html, "utf-8");
  }
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});

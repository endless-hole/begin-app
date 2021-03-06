import ReactDOMServer from "https://dev.jspm.io/react-dom/server";
import { React } from "https://unpkg.com/es-react";
import { App } from "./app.tsx";

export async function render() {
  let body = ReactDOMServer.renderToString(<App />);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset=utf-8>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>myg0t</title>
  <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
  <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
</head>
<body>
  <div class="center-text">
    <img src="https://static.begin.app/starter/begin-logo.svg" style="max-width: 250px" class="center-text">
    <div style="margin-bottom: 24px">
      <h1 style="margin-bottom: 24px" class="center-text">
        www.myg0t.gg
      </h1>
      <div id="app">${body}</div>
      <p style="margin-bottom: 8px">
        Get ready to get owned newb!
      </p>
    </div>
  </div>
  </div>
  <script type="module" src="/_static/browser.js"></script>
</body>
</html>
`;
}

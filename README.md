# Typst Preview VSCode

Preview your Typst files in vscode instantly!

Install this extension from [marketplace](https://marketplace.visualstudio.com/items?itemName=mgt19937.typst-preview), open command palette (Ctrl+Shift+P), and type `>Typst Preview:`.

https://github.com/Enter-tainer/typst-preview-vscode/assets/25521218/600529ce-8f42-4c2f-a224-b6b73e6ad017

This repo contains:
- the native part of the extension, in rust
- a vscode extension, in typescript

## How it works?

The extension watches for file changes, and sends the compiled framebuffers to the client. Framebuffers are used here because they are faster than pdf.

- The server is started, watching file changes, and listening to a websocket port.
- The webview client connects to the websocket port.
- The client sends the current visible range whenever the user scrolls/resizes the preview panel.
- The server sends rendered framebuffers to the client whenever the typst document is updated.

## Acknowledgements

- [typst](https://github.com/typst/typst): The rust part of this repo is a thin wrapper around typst.
- [typst-lsp](https://github.com/nvarner/typst-lsp): The CI and the vscode extension are heavily inspired by typst-lsp.


interface Window {
  initTypstSvg(docRoot: SVGElement, srcMapping?: HTMLDivElement): void;
  handleTypstLocation(elem: Element, page: number, x: number, y: number);
  typstWebsocket: WebSocket;
}

export default {
  attachStyle : (root, style) => {
    const styleCSS = document.createElement('style');
    styleCSS.appendChild(document.createTextNode(style));
    root.appendChild(styleCSS);
  }
};
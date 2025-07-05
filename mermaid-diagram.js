// mermaid-diagram.js
class MermaidDiagram extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.container = document.createElement('div');
    this.container.style.background = "#fff";
    this.container.style.borderRadius = "10px";
    this.container.style.boxShadow = "0 2px 16px #0002";
    this.container.style.padding = "20px 24px";
    this.shadowRoot.appendChild(this.container);
  }

  static get observedAttributes() { return ['diagram']; }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'diagram') this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const diagramText = this.getAttribute('diagram') || '';
    if (!diagramText.trim()) { this.container.innerHTML = ''; return; }
    if (!window.mermaid) {
      // Mermaid laden, falls noch nicht da:
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/mermaid@8.13.10/dist/mermaid.min.js";
      script.onload = () => this.drawDiagram(diagramText);
      document.head.appendChild(script);
    } else {
      this.drawDiagram(diagramText);
    }
  }

  drawDiagram(text) {
    window.mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' });
    window.mermaid.render('diagram'+Date.now(), text, svg => {
      this.container.innerHTML = svg;
    });
  }
}

customElements.define('mermaid-diagram', MermaidDiagram);

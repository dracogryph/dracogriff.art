class Nav extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
      <style>
        a:link {
          color: white;
        }
      </style>
      
      <br>
      <a href="/skyward/world"><b>World</b></a>
      <br><br>
      <a href="/skyward/sophonts"><b>Sophonts</b></a>
      <br><br>
		`;
	}
}
customElements.define('nav-component', Nav);
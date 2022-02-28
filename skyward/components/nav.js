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
        a:visited {
          color: lightcyan;
        }
        a:hover {
          color: royalblue;
        }
        a:active {
          color: lightcyan;
        }
      </style>
      
      <br>
      <a href="/skyward/atmosphere"><b>Atmosphere</b></a>
      <br><br>
      <a href="/skyward/sophonts"><b>sophonts</b></a>
      <br><br>
		`;
	}
}
customElements.define('nav-component', Nav);
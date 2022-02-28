class Nav extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
      <br>
      <a href="/skyward/atmosphere" class="button"><b>Atmosphere</b></a>
      <br><br>
      <a href="/skyward/sophonts" class="button"><b>sophonts</b></a>
      <br><br>
		`;
	}
}
customElements.define('nav-component', Nav);
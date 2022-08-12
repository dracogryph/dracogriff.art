class Navbar extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
    <link rel="stylesheet" href="/styles/navbar-home.css" type="text/css"/>

			<div id="topbar" onclick="toggleNavbar();"><img src="/icons/protostar.svg" id="hamburger-helper"/></div>
			<div class="navbar" id="hidden" onclick="toggleNavbar();">
				<ul id="buttons">`
		+ this.innerHTML+
		`
				</ul>
			</div>
		`;
	}
}
customElements.define('navbar-component', Navbar);

function toggleNavbar() {
  // if navbar isn't hidden, show nav.
  if (document.getElementById("hidden") !== null) {
    document.getElementById("hidden").id = "shown";
  }
  // else, hide navbar.
  else {
    document.getElementById("shown").id = "hidden";
  }
}

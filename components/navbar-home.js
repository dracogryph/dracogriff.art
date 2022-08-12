class Navbar extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
    <link rel="stylesheet" href="/styles/navbar-home.css" type="text/css"/>

			<div id="topbar" onclick="toggleNavbar();"><img src="/icons/protostar.svg" id="hamburger-helper"/></div>
			<div class="navbar" id="hidden">
				<ul id="buttons">
					<a href="javascript:void(0);" onclick="scrollto(id);">About</a>
					<a href="javascript:void(0);" onclick="scrollto(id);">Projects</a>
					<a href="javascript:void(0);" onclick="scrollto(id);">Socials</a>
					<a href="javascript:void(0);" onclick="scrollto(id);">Contact</a>
					<a href="javascript:void(0);" onclick="scrollto(id);">Commissions</a>
					<a href="javascript:void(0);" onclick="scrollto(id);">Friends</a>
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

function scrollto(id) {
	toggleNavbar();
	document.getElementById(id).scrollIntoView();
}
class Navbar extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
    <link rel="stylesheet" href="/styles/navbar-home.css" type="text/css"/>

			<div id="topbar" onclick="toggleNavbar();"><img src="/icons/protostar.svg" id="hamburger-helper"/></div>
			<div class="navbar" id="hidden" onclick="toggleNavbar();">
				<ul id="buttons">
					<a href="#about" onclick="scrollto('about');">About</a>
					<a href="#projects" onclick="scrollto('projects');">Projects</a>
					<a href="#socials" onclick="scrollto('socials');">Socials</a>
					<a href="#contact" onclick="scrollto('contact');">Contact</a>
					<a href="#commissions" onclick="scrollto('commissions');">Commissions</a>
					<a href="#friends" onclick="scrollto('friends');">Friends</a>
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
	document.getElementById(id).scrollIntoView(true);
}
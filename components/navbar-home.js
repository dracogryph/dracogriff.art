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
					<a href="javascript:void(0);" onclick="scrollto('about');">About</a>
					<a href="javascript:void(0);" onclick="scrollto('projects');">Projects</a>
					<a href="javascript:void(0);" onclick="scrollto('socials');">Socials</a>
					<a href="javascript:void(0);" onclick="scrollto('contact');">Contact</a>
					<a href="javascript:void(0);" onclick="scrollto('commissions');">Commissions</a>
					<a href="javascript:void(0);" onclick="scrollto('friends');">Friends</a>
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
	window.scrollBy(0,"-5rem");
}
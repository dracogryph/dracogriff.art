class Navbar extends HTMLElement {
	constructor() {
		super();
	}
}
customElements.define('navbar-component', Navbar);
function toggleNavbar() {
  // if navbar isn't hidden, show nav.
  if (document.getElementById("nav-hidden") !== null) {
    document.getElementById("nav-hidden").id = "nav-shown";
  }
  // else, hide navbar.
  else {
    document.getElementById("nav-shown").id = "nav-hidden";
  }
}

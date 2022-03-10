class Nav extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
      <p id="hamburger-helper" onclick="toggleNav();"><img src="/skyward/icons/skyward-logo.svg" class="hamburger-helper"/></p>
      <div class="nav" id="hidden">
        <ul>
          <li><a href="/skyward/"><b>home</b></a></li>
          <li class="dropdown">
            <a href="/skyward/sophonts"><b>sophonts</b></a>
            <ul class="dropdown-content" id="sophonts">
              <li><a href="/skyward/griffin">griffin</a></li>
              <li><a href="/skyward/tree-of-life">tree-of-life</a></li>
              <li><a href="/skyward/siren">siren</a></li>
              <li><a href="/skyward/dragon">dragon</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="/skyward/world"><b>world</b></a>
            <ul class="dropdown-content" id="world">

            </ul>
          </li>
          <li class="dropdown">
            <a href="/skyward/compendium"><b>compendium</b></a>
            <ul class="dropdown-content" id="compendium">
              <li><a href="/skyward/bestiary">bestiary</a></li>
            </ul>
          </li>
        </ul>
      </div>
		`;
	}
}
customElements.define('nav-component', Nav);

function toggleNav() {
  // if nav isn't hidden, show nav.
  if (document.getElementById("hidden") !== null) {
    document.getElementById("hidden").id = "shown";
  }
  // else, hide nav.
  else {
    document.getElementById("shown").id = "hidden";
  }
}
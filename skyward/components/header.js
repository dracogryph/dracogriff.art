class Header extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
	<style>
		.header {
			background-image:
				linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.9)),
				url("/skyward/img/DSC_0141.png");
			background-position: center top;
			background-repeat: no-repeat;
			background-size: cover;
		}
		.main-logo {
			width: 5rem;
			display:block;
			margin:auto;
		}
		@media only screen and (min-width: 48rem) {
			.main-logo {
				width: min(15rem, 50%);
			}
		}
	</style>
		
	<header>
		<div class="header">
    <br>
			<img src="icons/skyward-logo.svg" class="main-logo"/>`
	+ this.innerHTML +
			`</br>
		</div>
	</header>
	`;
	}
}
customElements.define('header-component', Header);
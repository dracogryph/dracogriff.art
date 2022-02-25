class Footer extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
			<style>
				footer {
					color: snow;
					font-size: .8rem;
				}
			</style>

			<footer>
				<div id="footer">
					<br/><hr>
					<p>©Dracogriff 2021-2022</p>
				</div>
			</footer>
		`;
	}
}
customElements.define('footer-component', Footer);
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
					width: 100%;
				}
				#footer-text {
					text-align: right;
					margin-right: 2rem;
				}
			</style>

			<footer>
				<div class="footer">
					<p id="footer-text">©Dracogriff 2021-2022</p>
				</div>
			</footer>
		`;
	}
}
customElements.define('footer-component', Footer);
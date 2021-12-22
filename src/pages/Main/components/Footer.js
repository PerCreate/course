const Footer = (props) => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="footer_text">
							<p>© 2021 RoasUP, Inc. <br />All Rights Reserved.</p>
							<a rel="noreferrer" className="footer_copyrights" href="https://roasup.com/privacy.html" target="_blank">
								Privacy Policy
							</a>
						</div>
					</div>
					<div className="col-12">
						<div className="footer_text">
							RoasUp, Inc. <br /> 8270 Woodland Center Blvd <br /> Tampa, Florida
						</div>
					</div>
					<div className="col-13">
						<a rel="noreferrer" href="https://t.me/RoasUp_Creative_Studio/" target="_blank" className="mdi_facebook">
							<div>
								<img width="35" height="35" src="assets/telegram.svg" alt="facebook" />
							</div>
						</a>
						<a rel="noreferrer" href="https://www.facebook.com/roasup/" target="_blank" className="mdi_facebook">
							<div>
								<img width="35" height="35" src="assets/facebook.svg" alt="facebook" />
							</div>
						</a>
						<a rel="noreferrer" href="https://www.linkedin.com/company/roasup/about/" target="_blank" className="mdi_facebook">
							<div>
								<img width="35" height="35" src="assets/linkedIn.svg" alt="facebook" />
							</div>
						</a>
						<a rel="noreferrer" href="https://www.roasup.com/" target="_blank" className="mdi_facebook">
							<div>
								<img width="35" height="35" src="assets/website.svg" alt="facebook" />
							</div>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
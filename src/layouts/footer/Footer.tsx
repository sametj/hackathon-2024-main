import styles from "./footer.module.scss";
import FacebookIcon from "@assets/icons/facebook.svg?react";
import InstagramIcon from "@assets/icons/instagram.svg?react";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "@root/utils/constants";

function Footer() {
	const currentYear = new Date().getFullYear();
	const footerItems = [
		{
			href: INSTAGRAM_LINK,
			icon: <InstagramIcon />,
		},
		{
			href: FACEBOOK_LINK,
			icon: <FacebookIcon />,
		},
	];

	const footerButtons = [
		{
			btnText: "Press",
			link: "/press",
		},
		{
			btnText: "Gift Cards",
			link: "/gift-cards",
		},
		{
			btnText: "Location",
			link: "https://maps.app.goo.gl/GtBcS3c6yVzphnsr7",
		},
	];

	return (
		<div className={styles["footer-container"]}>
			<div className={styles["footer-content"]}>
				<p className={styles["footer-text"]}>&copy; Sip & Play {currentYear}</p>
				<div className={styles["footer-content-right"]}>
					{footerButtons.map((btn, i) =>
						btn.btnText === "Location" ? (
							<a
								className={styles["footer-link"]}
								key={i}
								href={btn.link}
								target='_blank'
								rel='noopener noreferrer'>
								{btn.btnText}
							</a>
						) : (
							<a
								className={styles["footer-link"]}
								key={i}
								href={btn.link}>
								{btn.btnText}
							</a>
						)
					)}

					<div className={styles["social-icons"]}>
						{footerItems.map((item, i) => (
							<div key={i}>
								<a
									className='button-link-tooltip'
									href={item.href}
									target='_blank'
									rel='noopener noreferrer'>
									{item.icon}
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;

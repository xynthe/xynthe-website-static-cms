import React from "react";
import "./how-it-works.sass";
import Layout from "../components/layout";
import "./how-it-works.sass";
import icoPlay from "../resources/ico-play.svg";
import icoPlayDark from "../resources/ico-play-dark.svg";
import icoLock from "../resources/ico-lock.svg";
import icoCoins from "../resources/ico-coins.svg";
import icoHandout from "../resources/ico-handout.svg";
import Modal from "../components/Modal";
import Player from "@vimeo/player";

export default class HowItWorksPage extends React.Component {
	state = {
		isOpen: false
	};

	player = null;

	startVideo() {
		this.player = new Player("video-how-it-works", {
			id: 254987969,
			width: 640
		});

		this.player.play();
	}

	pauseVideo() {
		if (this.player) this.player.pause();
	}

	render() {
		let { isOpen } = this.state;
		return (
			<Layout>
				<div className="how-it-works-page">
					<section className="section header-section">
						<div className="container">
							<h1 className="page-title">How It Works</h1>
							<div className="page-subtitle">
								There are two tokens in the Havven payment network: HAV, the collateral token, and
								nomins, our stablecoin.
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-narrow has-text-centered">
								<a
									href="javascript:void(0)"
									className="is-button is-blue is-subtle-alt"
									onClick={() => {
										this.setState({ isOpen: true });
										this.startVideo();
									}}
								>
									<img src={icoPlay} className="is-icon" alt="How it works" /> Intro
								</a>
							</div>
							<div className="column is-narrow has-text-centered">
								<a to="#how-nomins-are-minted" className="is-button is-white is-subtle-alt">
									<img src={icoPlayDark} className="is-icon" alt="How nomins are minted" /> How
									nomins are minted
								</a>
							</div>
						</div>
					</section>
					<section className="section is-white steps-section">
						<div className="container step-1 pb-90">
							<div className="pt-80">
								<div className="step-number-title pb-40">STEP ONE</div>
								<div className="step-title pb-40">Lock HAV as collateral</div>
								<div className="step-desc pb-50">
									HAV holders lock their HAV as collateral to back nomins, our stablecoin.
								</div>
								<img src={icoLock} alt="Step One" />
							</div>
						</div>
						<div className="container step-2 pb-90">
							<div className="pt-80">
								<div className="step-number-title pb-40">STEP TWO</div>
								<div className="step-title pb-40">Mint stablecoins</div>
								<div className="step-desc pb-50">
									Nomins are minted into the market, where they can be used as a stable medium of
									exchange.
								</div>
								<img src={icoCoins} alt="Step Two" />
							</div>
						</div>
						<div className="container step-3 pb-90">
							<div className="pt-80">
								<div className="step-number-title pb-40">STEP THREE</div>
								<div className="step-title pb-40">Receive reward as HAV holder</div>
								<div className="step-desc pb-50">
									Circulating nomins generate transaction fees that are distributed to HAV holders,
									rewarding them for providing stability.
								</div>
								<img src={icoHandout} alt="Step Three" />
							</div>
						</div>
					</section>
				</div>
				<Modal
					isOpen={isOpen}
					onRequestClose={() => {
						this.setState({ isOpen: false });
						this.pauseVideo();
					}}
					className="is-video"
				>
					<div data-vimeo-id="254987969" data-vimeo-width="840" id="video-how-it-works" />
				</Modal>
			</Layout>
		);
	}
}

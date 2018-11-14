import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "../styles/bulma/bulma.sass";
import "../styles/main.sass";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						keywords
						description
						title
						twitterUrl
						mediumUrl
						discordUrl
						redditUrl
					}
				}
			}
		`}
		render={data => {
			let { title, keywords, description } = data.site.siteMetadata;
			return (
				<>
					<Helmet
						title={title}
						meta={[
							{ name: "description", content: description },
							{ name: "keywords", content: keywords }
						]}
					>
						<html lang="en" />
					</Helmet>
					<Header siteTitle={title} />
					<>{children}</>
					<Footer {...data.site.siteMetadata} />
				</>
			);
		}}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

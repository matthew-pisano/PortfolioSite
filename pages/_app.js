import PropTypes from "prop-types";
import React from "react";

function Portfolio({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
Portfolio.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.func
};

export default Portfolio;
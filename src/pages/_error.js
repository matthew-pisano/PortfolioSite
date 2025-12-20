import React from "react";

import Head from "next/head";
import PropTypes from "prop-types";

import tileStyles from "@/styles/pageTiles.module.css";
import styles from "@/styles/Wrapper.module.css";



function Error({ statusCode }) {
    return (
        <div>
            <Head>
                <title>error.html</title>
                <meta name="description" content="Something has gone terribly wrong" />

                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link href="/css/variables.css" rel="stylesheet" type="text/css" />
                <link href="/css/common.css" rel="stylesheet" type="text/css" />
            </Head>

            <div className={`w3-display-container ${styles.wrapper}`}>
                <div className={`${styles.page} container w3-rest`} style={{ marginLeft: "10%", marginRight: "10%" }}>
                    <div className={styles.titleCard}>
                        <h1>
                            <b>Server Error</b>
                        </h1>
                        <br />
                        <h3>Something has prevented the site from loading!</h3>
                    </div>
                    <div
                        className={`${tileStyles.tileHolder} w3-display-container`}
                        style={{ backgroundColor: "#3b934a", minHeight: "auto", paddingTop: "10px" }}>
                        <div className={`${tileStyles.displayTile} w3-container w3-row`}>
                            <h3>
                                <b>Something's Not Right</b>
                            </h3>
                            <p>
                                The site <code>'matthewpisano.com'</code> could not load (error{" "}
                                <code>{statusCode}</code>). This is likely an issue with the server and not the client.
                                This is hopefully a temporary issue, try checking back in on the site later.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
Error.propTypes = { statusCode: PropTypes.string.isRequired };

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;

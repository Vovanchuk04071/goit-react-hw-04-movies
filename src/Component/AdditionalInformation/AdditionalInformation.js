import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Cast from "../../views/Cast";
import Reviews from "../../views/Reviews";
import styles from "./AdditionalInformation.module.css";

const AdditionalInformation = ({ match, location }) => {
  return (
    <>
      <div className={styles.wraper}>
        <h2 className={styles.additional}>Additional information</h2>
        <Link
          className={styles.cast}
          to={{
            pathname: `${match.url}/cast`,
            state: {
              from: location,
            },
          }}
        >
          Cast
        </Link>
        <Link
          className={styles.reviews}
          to={{
            pathname: `${match.url}/reviews`,
            state: {
              from: location,
            },
          }}
        >
          Reviews
        </Link>
      </div>
      <Route path={`${match.path}/cast`} component={Cast} />
      <Route path={`${match.path}/reviews`} component={Reviews} />
    </>
  );
};

export default withRouter(AdditionalInformation);

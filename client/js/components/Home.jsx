import React from "react";
import { Link } from "react-router-dom";

const Home = () => <div className="jumbotron">
    <div className="container">
        <h1>Digital Brain</h1>
        <p>Short description should be here</p>
        <p><Link className="btn btn-primary btn-lg" to="/about" role="button">Learn more</Link></p>
    </div>
</div>;

export default Home;
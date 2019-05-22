import React from "react";

import Loader from "../common/loader";

const LoaderWrapper = (WrappedComponent) => {
    return (props) => {
        if (props.isLoading)
            return <Loader />;
        else
            return <div className="container"><WrappedComponent {...props} /></div>;
    };
};

export default LoaderWrapper;
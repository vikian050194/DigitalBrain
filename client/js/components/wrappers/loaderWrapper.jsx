import React from "react";

import Loader from "../common/Loader";

export default (WrappedComponent) => {
    return class WrappedComponentWithLoader extends React.Component {
        render() {
            if (this.props.isLoading)
                return <Loader />;
            else
                return <WrappedComponent {...this.props} />;
        }
    };
};
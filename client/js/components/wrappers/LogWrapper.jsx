import React from "react";

export default (WrappedComponent) => {
    return class WrappedComponentWithLoader extends React.Component {
        componentWillReceiveProps(nextProps) {
            console.info("Current props: ", this.props);
            console.info("Next props: ", nextProps);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};
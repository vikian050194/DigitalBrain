import React from "react";

const LayoutWrapper = (WrappedComponent) => {
    const WrappedComponentWithLayout = (props) => <div className="container"><WrappedComponent {...props} /></div>;
    
    return WrappedComponentWithLayout;

};

export default LayoutWrapper;
import logger from "./LogWrapper";
import loader from "./LoaderWrapper";

export default (WrappedComponent) => logger(loader(WrappedComponent));
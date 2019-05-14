import Logger from "./LogWrapper";
import Loader from "./LoaderWrapper";

export default (WrappedComponent) => Logger(Loader(WrappedComponent));
import Loader from "react-loader-spinner";

const LoadingView = (props) => {
  let { td } = props;
  if (td === null || td === undefined) {
    td = "";
  }
  return (
    <div className="loader-container" testid={td}>
      <Loader type="ThreeDots" color="green" height="50" width="50" />
    </div>
  );
};

export default LoadingView;

import LoadingLogo from "../assets/logo.png";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <img
        src={LoadingLogo}
        alt="Loading..."
        className="w-16 h-16 animate-spin"
      />
    </div>
  );
};

export default Loading;

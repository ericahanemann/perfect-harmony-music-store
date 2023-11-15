import logo from "../assets/ph-icon.png";

function LoadingScreen() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-primary text-secondary z-50">
      <img
        src={logo}
        alt="logo perfect harmony"
        className="motion-reduce:animate-spin"
        width={150}
      />
    </div>
  );
}

export default LoadingScreen;

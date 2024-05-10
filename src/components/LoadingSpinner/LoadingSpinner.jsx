import { ScaleLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-neutral-200 flex justify-center items-center">
            <ScaleLoader color="#36d7b7" />
        </div>
    );
};

export default LoadingSpinner;
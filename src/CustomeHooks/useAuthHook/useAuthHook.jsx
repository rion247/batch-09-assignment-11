import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const useAuthHook = () => {
    const fireBaseAuth = useContext(AuthContext);
    return fireBaseAuth;
};

export default useAuthHook;
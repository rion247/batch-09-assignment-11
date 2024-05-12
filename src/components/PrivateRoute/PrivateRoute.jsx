import { Navigate } from "react-router-dom";
import useAuthHook from "../../CustomeHooks/useAuthHook/useAuthHook";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { PropTypes } from 'prop-types';
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuthHook();

    if (loading) {
        <LoadingSpinner />
    }

    if (user) {
        return children;
    }

    return <Navigate to='/logIn' state={location.pathname} replace />
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;
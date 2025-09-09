import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="flex justify-center min-h-screen items-center flex-col" id="error-page">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-5 mx-5">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
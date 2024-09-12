import React from "react";
import Form from "../Components/Form";



function Login() {
    return (
        <div className="container">

            <Form route="/api/token/" method="login" />

        </div>

    )
};


export default Login;
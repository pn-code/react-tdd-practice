import React, { useState } from "react";

const Login = () => {
    const [error, setError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container">
            <form>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    type="text"
                    value={username}
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    type="password"
                    value={password}
                />
                <button disabled={true}>Login</button>
                <span
                    data-testid="error"
                    style={{ visibility: error ? "visible" : "hidden" }}
                >
                    Something went wrong!
                </span>
            </form>
        </div>
    );
};

export default Login;

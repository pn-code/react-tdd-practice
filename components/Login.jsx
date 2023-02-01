import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            setUser(data);
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    return (
        <div className="container">
            <span>{user.name}</span>
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
                <button
                    onClick={handleClick}
                    disabled={!username || !password ? true : false}
                >
                    {loading ? "Please Wait..." : "Login"}
                </button>
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

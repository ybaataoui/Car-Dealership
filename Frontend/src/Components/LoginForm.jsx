import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../Components/LoadingIndicator";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";
import logo from "../assets/logo-dark.png";

function LoginForm({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light p-5">
      <div className="contact-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="form-section card p-4 shadow-sm">
                <div className="text-center mb-3">
                  <a href="/">
                    <img src={logo} alt="logo" className="img-fluid" />
                  </a>
                </div>
                <h3 className="text-center mb-4">Customer Login Panel</h3>

                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter username"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group text-center">
                    {loading && <LoadingIndicator />}
                    <button type="submit" className="btn btn-success btn-block">
                      Login
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <p>
                      Don't have an account?{" "}
                      <a href="/register" className="text-primary">
                        Register here
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

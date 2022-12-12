import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">BigStore</a>

                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/">
                                Loja
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/sobre">
                                Sobre
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
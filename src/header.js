import React from "react";
import { Link, NavLink } from "react-router-dom";

function header () {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/sobre-maria-claudia">Sobre</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contatos-de-maria">Contatos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default header;
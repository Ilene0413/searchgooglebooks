import React from "react";

function Nav() {
    return (
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header nav navbar-nav" role="group bg-white border-info">
                    <h1><bold>Google Books</bold>
                    <div>
                        <button type="button" class="btn bg-info">
                            <a class="text-light" href="/">Search</a>
                        </button>
                        <button type="button" class="btn bg-info">
                            <a class="text-white" href="/books/:id">Saved</a>
                        </button>
                        </div>
                    </h1>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
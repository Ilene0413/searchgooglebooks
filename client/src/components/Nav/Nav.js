import React from "react";

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <div class="navbar-header navbar-expand-lg nav navbar-nav">
                    <h1><bold>Google Books</bold></h1>
                    <button type="button" class="btn btn-primary">
                        <a class="text-light" href="/">Search</a>
                    </button>
                    <button type="button" class="btn btn-primary  ">
                        <a class="text-white" href="/saved">Saved</a>
                    </button>
                </div>
            </div>

        </nav >
    );
}
export default Nav;
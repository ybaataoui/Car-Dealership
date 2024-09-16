import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Header.css"



function Searchbar() {
    return (

        <div className="  pt-3">
            <div class="btn-group m-2 btn-search">
                <button class="btn btn-secondary btn-lg dropdown-toggle float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Make
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Acura</a></li>
                    <li><a class="dropdown-item" href="#">Honda</a></li>
                </ul>
            </div>

            <div class="btn-group m-2 btn-search">
                <button class="btn btn-secondary btn-lg dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Model
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    ...
                </ul>
            </div>
            <div class="btn-group m-2 btn-search">
                <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Distance
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    ...
                </ul>
            </div>
            <div class="btn-group m-2 ">
                <input type="text" class="form-control form-control-lg " placeholder="Zip Code" />
            </div>
            <div className="btn-group m-2">
                <button class="btn btn-danger btn-lg btn-search" type="button" aria-expanded="false">
                    Show Result
                </button>
            </div>


        </div>

    )
};

export default Searchbar;
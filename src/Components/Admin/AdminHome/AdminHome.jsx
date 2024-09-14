import React from "react";
// import Bred from "../../Partials/Bred";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

export default function AdminHome() {
    return (
        <>
            {/* <Bred title="Admin" /> */}

            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-xl-2 col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-xl-10 col-md-9">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/img/noimage.jpg" height={350} width="90%" alt="admin profile pic"></img>
                            </div>
                            <div className="col-md-6">
                                <h5 className="bg-primary text-center text-light p-2">Admin Home Pages</h5>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                           <th>Name</th>
                                           <td>Raja kumar</td>
                                        </tr>
                                        <tr>
                                           <th>Users Name</th>
                                           <td>Raja kumar</td>
                                        </tr>
                                        <tr>
                                           <th>Email</th>
                                           <td>Rajakumar@gmail.com</td>
                                        </tr>
                                        <tr>
                                           <th>Phone</th>
                                           <td>2356974585</td>
                                        </tr>
                                        <tr>
                                           <td colSpan={2}><Link to="/update-profile" className="btn btn-primary w-100">Update-Profile</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
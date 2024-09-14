import React, { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import $ from "jquery"
import "datatables.net"
import 'datatables.net-dt/css/dataTables.dataTables.css';

// import Bred from "../../Partials/Bred";

import Sidebar from "../Sidebar";
import { getMaincetegory, deleteMaincetegory } from "../../../Redux/Actioncreators/MaincetegoryActionCreators"

export default function AdminMaincetegory() {
    const tableRef = useRef()

    let [data, setData] = useState([])

    let dispatch = useDispatch()
    let MaincetegoryStateData = useSelector(state => state.MaincetegoryStateData)

    function deleteItem(id) {
        if (window.confirm("Did you really want to delete that item")) {
            dispatch(deleteMaincetegory({ id: id }))
            getAPIData()
        }
    }
    function getAPIData() {
        dispatch(getMaincetegory())
        if (MaincetegoryStateData.length) {
            setData(MaincetegoryStateData)
          
        }
        else
            setData([])
    }
   
    useEffect(()=>{
        getAPIData()
    },[MaincetegoryStateData.length])

    useEffect(()=>{
        $(tableRef.current).DataTable()
    },[MaincetegoryStateData.length])
    return (
        <>
            {/* <Bred title="Admin" /> */}

            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-xl-2 col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-xl-10 col-md-9">
                        <h5 className="bg-primary text-center text-light p-2">maincetegory<Link to="/admin/maincetegory/create"><i className="fa fa-plus text-light float-end"></i></Link></h5>
                        <div className="table-responsive">
                            <table className="table table-bordered display" ref={tableRef}  style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>active</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td className={`${item.active ? "text-success" : "text-danger"}`}>{item.active ? "Yes" : "No"}</td>
                                                <td><Link to={`/admin/maincetegory/update${item.id}`} className="btn"><i className="fa fa-edit text-primary"></i></Link></td>
                                                <td><button className="btn" onClick={() => deleteItem(item.id)}><i className="fa fa-trash text-danger"></i></button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


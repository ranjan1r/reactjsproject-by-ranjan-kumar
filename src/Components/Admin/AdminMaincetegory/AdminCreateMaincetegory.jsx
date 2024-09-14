import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar";
import { Link, useNavigate, } from "react-router-dom";
import FromValidator from "../../FromValidator/FromValidator";

import { getMaincetegory, createMaincetegory } from "../../../Redux/Actioncreators/MaincetegoryActionCreators"

export default function AdminCreateMaincetegory() {
    let [allData, setAllData] = useState([])
    let [data, setData] = useState({
        name: "",
        active: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "Name is Mendatory"
    })
    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    let dispatch = useDispatch()
    let MaincetegoryStateData = useSelector(state => state.MaincetegoryStateData)


    function getInputData(e) {
        var { name, value } = e.target
        if (name !== "active") {
            setErrorMessage((old) => {
                return {
                    ...old,
                    [name]: FromValidator(e)
                }
            })
        }
        setData((old) => {
            return {
                ...old,
                [name]: name === "active" ? (value === "1" ? true : false) : value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find((x) => x !== "")
        if (error)
            setShow(true)
        else {
            let item = allData.find((x) => x.name?.toLocaleLowerCase() === data.name.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage((old) => {
                    return {
                        ...old,
                        'name': "maincetegory Name is Already Exist"
                    }
                })
            }
            else {
                dispatch(createMaincetegory({ ...data }))
                navigate("admin/maincetegory")
            }
        }
    }
    useEffect(() => {
        dispatch(getMaincetegory());
    }, [dispatch]);
    
    useEffect(() => {
        setAllData(MaincetegoryStateData);
    }, [MaincetegoryStateData]);
    

    // useEffect(() => {
    //     (() => {
    //         dispatch(getMaincetegory())
    //         if (MaincetegoryStateData.length)
    //             setAllData(MaincetegoryStateData)
    //         else
    //             setAllData([])
    //     })()
    // }, [MaincetegoryStateData.length])
    return (
        <>

            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-xl-2 col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-xl-10 col-md-9">
                        <h5 className="bg-primary text-center text-light p-2">maincetegory<Link to="/admin/maincetegory"><i className="fa fa-arrow-left text-light float-end"></i></Link></h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Name*</label>
                                    <input type="text" name="name" onChange={getInputData} placeholder="maincetegory Name" className={`form-control ${show && errorMessage.name ? "border-danger" : "border-primary"} border-2`} />
                                    {show && errorMessage.name ? <p className="text-danger text-capitalize">{errorMessage.name}</p> : ""}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Active*</label>
                                    <select name="active" onChange={getInputData} className="form-control border-primary border-2" >
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary w-100">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
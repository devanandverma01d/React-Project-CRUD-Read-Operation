import { useEffect, useState } from "react";

let Teacher =()=>{
    //1. Hooks area
    const[teacher,SetTeacher]=useState([])
    // I want to call api just after the component render.so i will use fetch() method.
    useEffect(()=>{
        fetch(`http://localhost:1337/api/teachers`)
        .then((res)=>{
            return res.json()  // It makes json data readable & return the data
        })
        .then((data)=>{
            console.log('Old data:',data.data)
            let newData=data.data.map((cv)=>{
                return{
                    id:cv.id,
                    name:cv.attributes.name
                }
            })
            console.log('New data:',newData)
            SetTeacher(newData)
        })
        .catch();
    },[])
    //2. Function definition area
    //3. Return statement
    return(
        <>
            <div className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br />
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First_Name</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            teacher.map((cv,idx)=>{
                                return <tr key={idx}>
                                            <td>{cv.id}</td>
                                            <td>{cv.name}</td>
                                        </tr>
                            })
                        }
                    </tbody>
            </table>
            </div>
            
        </>
    )
}
export default Teacher;
import React, {useEffect} from 'react';
//redux
import {fetchAllUsers} from "../store/slices/users";
import {useDispatch, useSelector} from 'react-redux'
import UserCard from "./UserCard";

const UserLIst = (props) => {

    const dispatch = useDispatch();

    const {list: users} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    return(
        <div className="container mt-4">
            <div className="row">
                {
                    users.map( (user,index) => (
                        <div key={index} className="col-md-3 mb-4">

                            {/*card con material UI*/}
                            <UserCard firstName={user.first_name} lastName={user.last_name} email={user.email} image={user.avatar} />

                            {/*CARD CON bootstrap*/}
                            {/*<div className="card">*/}
                            {/*    <img src={user.avatar} alt="avatar"/>*/}
                            {/*    <div className="card-body">*/}
                            {/*        <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>*/}
                            {/*        <p className="card-text">{user.email}</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default UserLIst;


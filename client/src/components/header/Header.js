import React, {useEffect, useState} from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import axios from 'axios';
import * as action from './../../constants/ActionTypes';

// images
import Logo from './../../images/logo-henry3.png';

// css
import './Header.css';
function Header(props) {

    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [tabUser, setTabUser] = useState(true);

    useEffect(() => {
        async function getDataUser() {
            try {
                let config = {
                    headers: {
                        'Authorization': localStorage.getItem('user')
                    }
                }
                const res = await axios.get(`${action.URL}/users`, config);
                console.log(res);
                setName(res.data.name);
                setAddress(res.data.address);
                setPhone(res.data.phone);
                setImage(res.data.image);
            } catch (error) {
                console.log(error);
            }
        }
        getDataUser();
    }, []);
    const toggleProfile = (e) =>{
        e.preventDefault();
        setModal(!modal);
    }
    const signOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        window.location.reload(true);
    }
    const handleSaveUser = async (e) => {
        e.preventDefault();
        try {
            let config = {
                headers: {
                    'Authorization': localStorage.getItem('user')
                }
            }
            //console.log({ name, address, phone });
            const res = await axios.post(`${action.URL}/users/update`, { name, address, phone }, config);
            if (res.data.success) {
                alert('update information success');
                setName(res.data.name);
                setAddress(res.data.address);
                setPhone(res.data.phone);
                toggleProfile(e);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleSavePass = async (e) => {
        e.preventDefault();
        try {
            let config = {
                headers: {
                    'Authorization': localStorage.getItem('user')
                }
            }
            //console.log({ name, address, phone });
            const res = await axios.post(`${action.URL}/users/updatePass`, { newPass }, config);
            if (res.data.success) {
                alert('update password success');
                toggleProfile(e);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    const showTabUser = () => setTabUser(true);
    const showTabPass = () => setTabUser(false);
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark secondary-color">
            <a class="navbar-brand mr-4" href="/games">
                <img src={Logo} width="200px" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/games">Games</a>
                    </li>
                </ul>
                <div class="nav-item dropdown text-white">
                    <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button"
                        data-toggle="dropdown" style={{ color: "#fff" }}>
                        Tài khoản
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="" onClick={toggleProfile}>
                            <i class="fa fa-user"></i>
                            Information
                        </a>
                        <a class="dropdown-item" href="" onClick={signOut}>
                            <i class="fa fa-sign-out"></i>
                            Log out
                        </a>
                        <div class="dropdown-divider"></div>

                    </div>
                </div>
            </div>
            <div className="profile">
                <Modal isOpen={modal} toggle={toggleProfile}>
                    <ModalHeader toggle={toggleProfile}>User Infomation</ModalHeader>
                    <ModalBody>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={tabUser ? "nav-link active" : "nav-link"} href="#" onClick={showTabUser}>User</a>
                            </li>
                            <li className="nav-item">
                                <a className={!tabUser ? "nav-link active" : "nav-link"} href="#" onClick={showTabPass}>Setup Password</a>
                            </li>
                        </ul>
                        {
                            tabUser ?
                                <div className="container tab">
                                    <div className="user-img text-center mb-5">
                                        <img src={image} className="tab-user-img mb-15" alt="avatar" />
                                        <input type="file" className="form-control-file border w-50 m-auto " />
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="user-title">Name:</div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </li>
                                        <li>
                                            <div className="user-title">Address:</div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                value={address}
                                                onChange={e => setAddress(e.target.value)}
                                            />
                                        </li>
                                        <li>
                                            <div className="user-title">Phone:</div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="phone"
                                                value={phone}
                                                onChange={e => setPhone(e.target.value)}
                                            />
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary tab-btn" onClick={handleSaveUser}>Save</button>
                                </div>
                                :
                                <div className="container tab tab-pass">
                                    <div className="tab-title">Update password</div>
                                    <ul>
                                        <li>
                                            <div className="user-title">Current password</div>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="currentPass"
                                                value={currentPass}
                                                onChange={e => setCurrentPass(e.target.value)}

                                            />
                                        </li>
                                        <li>
                                            <div className="user-title">New password</div>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="newPass"
                                                value={newPass}
                                                onChange={e => setNewPass(e.target.value)}
                                            />
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary tab-btn" onClick={handleSavePass}>Save</button>
                                </div>
                        }
                    </ModalBody>
                </Modal>
            </div>
        </nav>
    );
}
export default Header;
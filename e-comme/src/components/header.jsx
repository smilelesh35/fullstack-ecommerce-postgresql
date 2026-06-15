import React, {useEffect, useState} from 'react';
import { FaMoon } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import { FaSun } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import store from "../redux/store.jsx";
import {setSearch} from "../redux/slices/productSlice.jsx";
import {deleteBasket, getBasket} from "../redux/slices/basketSlice.jsx";
import { Menu, MenuItem } from "@mui/material";


const Header = () => {

    const [light,setlight] = useState(false);
    const [open ,setOpen] = useState(false);
    const [isLogin,setisLogin] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const basket  = useSelector((store) => store.basket.baskets || []);

    const total = basket.reduce((t, item) => {
        return t + item.count * item.price;
    }, 0);

    const dispatch = useDispatch();

const navigate = useNavigate();
    const changeTheme = ()=>{
            const root = document.getElementById('root');

        if (light) {
            root.style.backgroundColor = "white";
            root.style.color = "black";


        }else{
            root.style.backgroundColor = "black";
            root.style.color = "white";

        }
        setlight(!light);

    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        setisLogin(!!token);

        if (token) {
            dispatch(getBasket());
        }
    }, [dispatch]);



    const logout = ()=>{
        localStorage.removeItem("token");
        setisLogin(false);
        navigate("/login");
    }

    const openMenu = (e) => setAnchorEl(e.currentTarget);
    const closeMenu = () => setAnchorEl(null);
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div className='header-left' style={{display:'flex',alignItems: 'center'}}>
                <img onClick={()=>{navigate("/")}} src="https://www.logoai.com/oss/icons/2021/12/02/u8tXD2V7rro6bok.png" style={{cursor:'pointer', width:'120px',height:'120px'}} alt=""/>
                <h3>Ticaret a.ş</h3>
            </div>
            <div className='header-right' style={{display:'flex',alignItems: 'center'}}>

                <input onChange={(e)=>{dispatch(setSearch(e.target.value))}} type="text" placeholder="bir şeyler arayınız" />

                <FaShoppingBasket

                    onClick={() => {
                        dispatch(getBasket());
                        setOpen(true);
                    }}
                    style={{ marginLeft: '30px', fontSize: '25px', cursor: 'pointer' }}
                />


            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                slotProps={{
                    paper: {
                        style: {
                            width: '400px',
                            maxWidth: '400px',
                        },
                    },
                }}
                anchor="right"
            >

                <div style={{ width: 300, padding: 15 }}>
                    <h3>Sepetim</h3>

                    {basket.length === 0 ? (
                        <p>Sepet boş</p>
                    ) : (
                        basket.map((item) => (
                            <div key={item.id} style={{ marginBottom: 10 }}>
                                <img style={{width:'70px',height:'100px'}} src={item.image} alt=""/>
                                <p>{item.title}</p>
                                <p>({item.price})</p>
                                <p>{item.count}</p>
                                <button onClick={()=>{dispatch(deleteBasket(item.id))}}>Sil</button>
                                <hr />

                            </div>


                        ))
                    )}
                    <h4>
                        {total}
                    </h4>

                </div>

            </Drawer>



                {
                     light ? (<FaSun onClick={changeTheme} />  ): ( <FaMoon onClick={changeTheme} />)

                }

                <p
                    onClick={openMenu}
                    style={{
                        border: "2px solid",
                        cursor: "pointer",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <img
                        style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                        alt=""
                    />
                </p>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={closeMenu}
                >
                    <MenuItem onClick={closeMenu}>Profil</MenuItem>
                    <MenuItem onClick={closeMenu}>Ayarlar</MenuItem>
                    <MenuItem onClick={logout}>Çıkış yap</MenuItem>
                </Menu>


            </div>

        </div>

    );
};

export default Header;


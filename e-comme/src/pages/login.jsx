import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [light, setLight] = useState(true);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const changeTheme = () => {
        setLight(!light)

    };

    const login = async () => {
        try {
            const response = await axios.post("http://localhost:3000/users/login", {
                name:name,
                password:password
            })



            const token = response.data.token;

            if (!token) {
                setMessage("Token gelmedi");
                return;
            }
            localStorage.setItem("token", token);

            navigate("/");

        } catch (err){
            console.log(err)
            setMessage("İsim veya şifre hatalı")
        }

    }


    const bgColor = light ? "white" : "black";
    const textColor = light ? "black" : "white";
    const cardBg = light ? "white" : "#111";
    const borderColor = light ? "black" : "white";
    const inputBg = light ? "white" : "#222";
    const inputTextColor = light ? "black" : "white";
    const buttonBg = light ? "#f0f0f0" : "#333";

const navigate = useNavigate();



    return (
        <div
            style={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: bgColor,
                color: textColor,
                transition: "0.3s"
            }}
        >

            <div
                style={{
                    width: "75%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 0"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px"
                    }}
                >
                    <img
                        src="https://www.logoai.com/oss/icons/2021/12/02/u8tXD2V7rro6bok.png"
                        alt="logo"
                        style={{
                            width: "140px",
                            height: "110px",
                            objectFit: "contain"
                        }}
                    />

                    <h2
                        style={{
                            fontSize: "22px",
                            color: textColor
                        }}
                    >
                        Ticaret a.ş
                    </h2>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px"
                    }}
                >
                    {light ? (
                        <FaMoon
                            onClick={changeTheme}
                            style={{
                                fontSize: "22px",
                                cursor: "pointer",
                                color: textColor
                            }}
                        />
                    ) : (
                        <CiSun
                            onClick={changeTheme}
                            style={{
                                fontSize: "26px",
                                cursor: "pointer",
                                color: textColor
                            }}
                        />
                    )}
                </div>
            </div>


            <div
                style={{
                    width: "75%",
                    margin: "30px auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div
                    style={{
                        width: "380px",
                        minHeight: "420px",
                        border: `1px solid ${borderColor}`,
                        backgroundColor: cardBg,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "35px 25px",
                        boxSizing: "border-box",
                        transition: "0.3s"
                    }}
                >
                    <h1
                        style={{
                            fontSize: "28px",
                            marginBottom: "10px",
                            color: textColor
                        }}
                    >
                        Login
                    </h1>

                    <p
                        style={{
                            fontSize: "16px",
                            marginBottom: "35px",
                            color: textColor
                        }}
                    >
                        Hesabınıza giriş yapınız
                    </p>

                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "20px"
                        }}
                    >
                        <label
                            style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                marginBottom: "8px",
                                color: textColor
                            }}
                        >
                            Kullanıcı adı
                        </label>

                        <input
                            value={name}
                            onChange={(e)=>{setName(e.target.value.trim())}}
                            type="text"
                            placeholder="Kullanıcı adınızı giriniz"

                            style={{
                                height: "35px",
                                border: `1px solid ${borderColor}`,
                                backgroundColor: inputBg,
                                color: inputTextColor,
                                paddingLeft: "10px",
                                fontSize: "15px",
                                outline: "none"
                            }}
                        />
                    </div>

                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "25px"
                        }}
                    >
                        <label
                            style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                marginBottom: "8px",
                                color: textColor
                            }}
                        >
                            Şifre
                        </label>

                        <input
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            type="password"
                            placeholder="Şifrenizi giriniz"


                            style={{
                                height: "35px",
                                border: `1px solid ${borderColor}`,
                                backgroundColor: inputBg,
                                color: inputTextColor,
                                paddingLeft: "10px",
                                fontSize: "15px",
                                outline: "none"
                            }}
                        />
                    </div>

                    <button
                        onClick={login}
                        style={{
                            width: "130px",
                            height: "35px",
                            border: `1px solid ${borderColor}`,
                            backgroundColor: buttonBg,
                            color: textColor,
                            fontSize: "16px",
                            cursor: "pointer"
                        }}
                    >
                        Giriş yap
                    </button>
                    <p style={{ color: textColor, marginTop: "15px" }}>
                        {message}
                    </p>

                    <p
                        style={{
                            marginTop: "25px",
                            fontSize: "15px",
                            color: textColor
                        }}
                    >
                        Hesabın yok mu?{" "}
                        <span
                            onClick={() => navigate("/register")}
                            style={{
                                fontWeight: "bold",
                                cursor: "pointer",
                                color: textColor
                            }}
                        >
                            Kayıt ol
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
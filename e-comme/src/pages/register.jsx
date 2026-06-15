import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [light, setLight] = useState(true);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [surname, setsurname] = useState("");
    const [password, setPassword] = useState("");
const [message,setMessage] = useState("");

    const changeTheme = () => {
        setLight(!light);
    };

    const register = async () => {
        try {
            const response = await axios.post("http://localhost:3000/users", {
                name:name,
                surname:surname,
                password:password,
            })
            console.log(response.data);
            navigate("/login");

        } catch (error) {
            console.log(error);
            setMessage("Yukarıdaki alanlar boş kalamaz.");
        }
    }


    const bgColor = light ? "white" : "black";
    const textColor = light ? "black" : "white";
    const cardBg = light ? "white" : "#111";
    const borderColor = light ? "black" : "white";
    const inputBg = light ? "white" : "#222";
    const inputTextColor = light ? "black" : "white";
    const buttonBg = light ? "#f0f0f0" : "#333";

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
            {/* HEADER */}
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

                <div>
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

            {/* REGISTER ALANI */}
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
                        width: "400px",
                        minHeight: "500px",
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
                        Kayıt ol
                    </h1>

                    <p
                        style={{
                            fontSize: "16px",
                            marginBottom: "30px",
                            color: textColor
                        }}
                    >
                        Yeni hesap oluştur
                    </p>

                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "18px"
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
                            marginBottom: "18px"
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
                            Soyad
                        </label>

                        <input
                            value={surname}
                            onChange={(e)=>{setsurname(e.target.value)}}
                            type="text"
                            placeholder="Soyadınızı giriniz"
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
                        onClick={register}
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
                        Kayıt ol
                    </button>
                    <p>{message}</p>
                    <p
                        style={{
                            marginTop: "25px",
                            fontSize: "15px",
                            color: textColor
                        }}
                    >
                        Hesabın var mı?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            style={{
                                fontWeight: "bold",
                                cursor: "pointer",
                                color: textColor
                            }}
                        >
                            Giriş yap
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
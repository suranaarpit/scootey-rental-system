import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <>
      {token ? (
        <section className="border border-black p-[10px] bg-black">
          <div className="flex justify-center gap-[20px] p-[5px]">
            <Link to={"/"}>
              <div
                className="border border-black p-[10px] cursor-pointer font-bold text-white"
                style={{ border: "none", borderBottom: "1px solid yellow" }}
              >
                HOME
              </div>
            </Link>

            <div
              onClick={handleLogout}
              className="border border-black p-[10px] cursor-pointer font-bold text-white"
              style={{ border: "none", borderBottom: "1px solid yellow" }}
            >
              LOGOUT
            </div>
            <div
              className="border border-black p-[10px] font-bold text-white ml-[800px]"
              style={{
                border: "none",
                borderBottom: "1px solid yellow",
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}
            >
              Welcome: {token.name} 👋
            </div>
          </div>
        </section>
      ) : (
        <section className="border border-black p-[10px] bg-black">
          <div className="flex justify-center gap-[20px] p-[5px]">
            <Link to={"/"}>
              <div
                className="border border-black p-[10px] cursor-pointer font-bold text-white"
                style={{ border: "none", borderBottom: "1px solid yellow" }}
              >
                HOME
              </div>
            </Link>

            <Link to={"/login"}>
              <div
                className="border border-black p-[10px] cursor-pointer font-bold text-white"
                style={{ border: "none", borderBottom: "1px solid yellow" }}
              >
                LOGIN
              </div>
            </Link>
            <Link to={"/register"}>
              {" "}
              <div
                className="border border-black p-[10px] cursor-pointer font-bold text-white"
                style={{ border: "none", borderBottom: "1px solid yellow" }}
              >
                REGISTER
              </div>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Header;

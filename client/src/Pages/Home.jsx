import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/details")
      .then(({ data }) => {
        setLoading(false);
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);
  return (
    <>
      <section className="border border-red-600 p-[10px] flex">
        <div className="border border-black h-[50vh] w-[500px]"></div>
        {loading ? (
          <div className="loading">
            <img
              className="h-[100px] w-[100px]"
              src="https://flevix.com/wp-content/uploads/2019/07/Comp-2.gif"
              alt="loader"
            />
          </div>
        ) : error ? (
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/03/08/92/49/360_F_308924911_jsWAfFOqdSGglzvF7zcNcXIo06eS7Wch.jpg"
              alt="img"
            />
          </div>
        ) : (
          <div className=" h-fit w-full appendBox p-[20px]">
            {data.map((el) => {
              return (
                <div key={el.id}>
                  <div className="h-[190px]">
                    <img className="h-[190px]" src={el.img} alt="img" />
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold p-[5px] text-[14px]">{el.name}</p>
                    <p className="font-bold p-[5px] text-[14px] bg-green-600 text-[white]">
                      {el.left} Left
                    </p>
                  </div>
                  <div className="p-[5px] text-gray-400"><p>Excess ₹{el.excess}</p></div>
                  <div className="flex h-[40px]">
                    <div className="h-full w-full">
                        <button className="h-full w-full bg-gray-200">₹{el.amt}</button>
                    </div>
                    <div className="h-full w-full">
                        <button className="h-full w-full bg-[#1e2d51] text-white">BOOK NOW</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;

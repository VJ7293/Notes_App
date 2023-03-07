import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className=" white-glassmorphism border-8  mx-8 my-4   shadow-3xl  font-signature9 drop-shadow-2xl md:filter-no text-center text-lg  rounded-md bg-slate-600 shadow-2xl shadow-black">
      <p className=" text-slate-400 font-extrabold text-sm ">
        Made with 🧑🏿‍💻💻 by Vijay
      </p>
      <p className="text-slate-400  font-extrabold text-base ">
        Copyright ⓒ {year}
      </p>
    </div>
  );
}

export default Footer;

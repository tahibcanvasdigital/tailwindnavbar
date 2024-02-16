import img from "./assets/banner (2).webp";
import "./App.css";
import { useState } from "react";

function App() {
  const [open, setopen] = useState(false);
  return (
    <div className=" ">
      <nav className=" bg-white border   md:flex justify-between md:px-4 md:w-full min-h-16 items-center">
        
          <div className="text-2xl text-blue-700 font-semibold">Skills</div>
          <div
            onClick={() => setopen(!open)}
            className="md:hidden absolute top-0  cursor-pointer right-8 text-2xl"
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        
          <ul
            className={`md:flex transition-all  w-[50%] border ease-in duration-500 h-screen md:h-12 md:py-0 py-4 md:items-center bg-slate-100 md:static fixed pb-12  gap-10  ${
              open ? "right-0 " : "-right-[270px] "
            } mx-auto pb-12 mt-9 md:mt-0 md:bg-transparent md:w-auto md:pl-0 pl-9`}
          >
            <li className="my-7">Home</li>
            <li className="my-7">about</li>
            <li className="my-7">Contact </li>
            <button className="bg-indigo-400 p-2 text-white rounded-md  md:block">
            Login / Signup
          </button>
          </ul>
      
       
      </nav>

      <div className="container mx-auto grid lg:grid-flow-row  gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-flow-row  sm:grid-cols-2">
        <div className="card border border-black">
          <div className=" border border-black">
            <img className="w-full h-50 " src={img} alt="lgo"/>
          </div>
          <div>
            <h1 className="lg:text-3xl md:text-2xl font-bold font-serif">Honestty is the best </h1>
            <p>
              Sint ipsum officia nulla id anim. Sint laborum nulla sint laboris
              cupidatat officia officia. Ullamco incididunt qui commodo aute
              culpa labore aliquip ipsum nulla nisi proident exercitation id.
              Occaecat consequat incididunt ut pariatur occaecat cupidatat
      
            </p>
          </div>
        </div>
        <div className="card border border-black">
          <div className=" border border-black">
            <img className="w-full h-50 " src={img} alt="lgo"/>
          </div>
          <div>
            <h1 className="lg:text-3xl md:text-2xl font-bold font-serif">Honestty is the best </h1>
            <p>
              Sint ipsum officia nulla id anim. Sint laborum nulla sint laboris
              cupidatat officia officia. Ullamco incididunt qui commodo aute
              culpa labore aliquip ipsum nulla nisi proident exercitation id.
              Occaecat consequat incididunt ut pariatur occaecat cupidatat
      
            </p>
          </div>
        </div>
        <div className="card border border-black">
          <div className=" border border-black">
            <img className="w-full h-50 " src={img} alt="lgo"/>
          </div>
          <div>
            <h1 className="lg:text-3xl md:text-2xl font-bold font-serif">Honestty is the best </h1>
            <p>
              Sint ipsum officia nulla id anim. Sint laborum nulla sint laboris
              cupidatat officia officia. Ullamco incididunt qui commodo aute
              culpa labore aliquip ipsum nulla nisi proident exercitation id.
              Occaecat consequat incididunt ut pariatur occaecat cupidatat
      
            </p>
          </div>
        </div>
        <div className="card border border-black">
          <div className=" border border-black">
            <img className="w-full h-50 " src={img} alt="lgo"/>
          </div>
          <div>
            <h1 className="lg:text-3xl md:text-2xl font-bold font-serif">Honestty is the best </h1>
            <p>
              Sint ipsum officia nulla id anim. Sint laborum nulla sint laboris
              cupidatat officia officia. Ullamco incididunt qui commodo aute
              culpa labore aliquip ipsum nulla nisi proident exercitation id.
              Occaecat consequat incididunt ut pariatur occaecat cupidatat
      
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

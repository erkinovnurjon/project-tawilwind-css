/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Exit, IconHeader } from "../assets/Icon";
import { NavigationLinks } from "../util/constants";
import { styles } from '../util/style';

const Navbar = () => {
      const [ toggleNav , setToggleNav] =useState(false)
      const [active , setActive] =useState('home')

      const toggleHandler = () => {setToggleNav(prev => !prev)}
      const activeHandler =(id) => setActive(id)
  return (
    <div className="flex justify-between items-center xs:px-16 px-4 py-6">
      <div className={`${styles.heading}`}>
        <img src={'https://i.pinimg.com/564x/99/fb/25/99fb258a9983020b200611898b538e31.jpg'} alt="" className="w-[100px] m-0 py-2 bg-none" />
      </div>
      <ul className="sm:flex hidden list-none justify-end items-center flex-1">
        {
          NavigationLinks.map((nav, idx) => (
            <li
              className={
                `font-montserrat font-normal text-[16px] text-white cursor-pointer hover:text-white ${
                idx === NavigationLinks.length - 1 ? 'mr-0' : 'mr-10'
              } ${active === nav.id ? 'text-white' : 'text-lighWhite'} `}
              onClick={() => activeHandler(nav.id)}
              key={nav.id}
            >
              {nav.title}
            </li>
          ))
        }
      </ul>

      {/* navigation bar */}
      <div>
        <div className=" sm:hidden flex flex-1 justify-end items-center" onClick={toggleHandler}>
       {
        !toggleNav ? <IconHeader/>: <Exit />
       }
        </div>
        <div className={`${!toggleNav ? 'hidden' : 'flex'}  absolute w-full top-30 py-8 my-10 left-0 right-0 bg-black-gradient sidebar`}>
             <ul className="flex  list-none justify-center items-center flex-1 ">
        {
          NavigationLinks.map((nav, idx) => (
            <li
              className={
                `font-montserrat font-normal text-[16px] text-white cursor-pointer hover:text-white ${
                idx === NavigationLinks.length - 1 ? 'mr-0' : 'mr-10'
              } ${active === nav.id ? 'text-white' : 'text-lighWhite'} `}
              onClick={() => activeHandler(nav.id)}
              key={nav.id}
            >
              {nav.title}
            </li>
          ))
        }
      </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

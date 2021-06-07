import React from 'react'
import './flex.scss'

import { AiFillMessage } from 'react-icons/ai';
import { BsFillBellFill } from 'react-icons/bs';
import { BsCommand } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';

const flex = () => (
   <div>
      <div className="header">
         <div className="header__brand-name">
            <BsCommand/>
         </div>

         <div className="header__search-box">
            <input type="text" className="header__search-box__search" />
            <BsSearch/>
         </div>

         <div className="header__user-section">
            <div className="header__user-section__message">
               <AiFillMessage/>
            </div>
            <div className="header__user-section__notification">
               <BsFillBellFill/>
            </div>

            <div className="header__user-section__user">
               <img src="https://unsplash.com/photos/ZHvM3XIOHoE/download?force=true&w=640" alt="user" className="header__user-section__user__photo" />
               <span className="header__user-section__user__name" >User</span>
            </div>
         </div>
      </div>

      <div className="container">
         <div className="container__box ">box1</div>
         <div className="container__box container__box--big">box2 Lorem, ipsum dolorLorem, ipsum dolor.</div>
         {/* <div className="container__box">box3</div>
         <div className="container__box">box4</div> */}
      </div>
   </div>
)

export default flex;
import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./Frends.module.css"

const Frends = (props) => {
    let path = '/frends' + props.id;

    return (
        <div className={s.sidebar + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )


}

export default Frends;
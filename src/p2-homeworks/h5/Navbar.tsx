import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './RoutesList'
import { isMobile } from 'react-device-detect';
import s from './Navbar.module.css'

const Navbar = () => {

    let linksData = [
        {path: PATH.PRE_JUNIOR, descr: 'Pre Junior', title: 0},
        {path: PATH.JUNIOR, descr: 'Junior', title: 1},
        {path: PATH.JUNIOR_PLUS, descr: 'Junior Plus', title: 2}
    ]

    const [isListActive, setListActiveStatus] = useState(false);

    useEffect(() => {
        if (isMobile) setListActiveStatus(true);
    }, [])

    const menuItems = linksData.map(el => <MenuItem key={el.title} path={el.path} title={el.title} descr={el.descr} />)

    const menuListCN = isListActive ? `${s.menu__list} ${s.active}` : s.menu__list

    const onBtnClickHandler = () => {
        if (!isMobile) setListActiveStatus(!isListActive)
    }

    return (
        <nav onClick={onBtnClickHandler} className={s.menu}>

            <div className={s.menu__title}>Select homework level</div>
            
            <ul className={menuListCN}>
                {menuItems}
            </ul>

        </nav>
    )
}

const MenuItem: React.FC<MenuItemPropsType> = ({path, title, descr}) => {

    const activeLinkClass = ({isActive}:{isActive:boolean}) => isActive 
        ? `${s.selected_page} ${s.menu__item_link}` 
        : s.menu__item_link

    return (
        <li className={s.menu__item} title={descr}>
            <NavLink to={path} className={activeLinkClass}>{title}</NavLink>
        </li>
    )
}

export default Navbar


type MenuItemPropsType = {
    path: string
    descr: string
    title: number
}
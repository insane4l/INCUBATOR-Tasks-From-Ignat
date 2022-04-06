import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../h10/bll/store';
import { changeThemeAC, ThemeType } from '../h12/bll/themeReducer';
import { themesRadio } from '../h12/HW12';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import s from './Themebar.module.css';



const Themebar = () => {
    const [isOptionsCollapsed, setOptionsCollapsed] = useState(true);

    const theme = useSelector((state: AppStateType) => state.theme.currentTheme);
    const dispatch = useDispatch();

    const onThemeChanged = (option: string) => {
        dispatch(changeThemeAC(option as ThemeType));
        setOptionsCollapsed(true);        
    }

    const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement | HTMLSelectElement
        if (target.tagName !== "SELECT") {
            setOptionsCollapsed(!isOptionsCollapsed);
        }   
    }

    const optionsListCN = !isOptionsCollapsed ? `${s.options__list} ${s.active}` : s.options__list;

    
    return (
        <div className={s.menu}>
            <div onClick={onClickHandler} className={s.menu__title}>Select color theme</div>

            <div onClick={onClickHandler} className={optionsListCN}>
                <SuperSelect value={theme} options={themesRadio} onChangeOption={onThemeChanged}/>
            </div>
        </div>
    )
}

export default Themebar;
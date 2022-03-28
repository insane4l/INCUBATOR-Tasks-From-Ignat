import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeAC, ThemeType } from "./bll/themeReducer";
import s from './HW12.module.css';

const radio = [
    {label: 'Main', value: 'main', disabled: false},
    {label: 'Dark', value: 'dark', disabled: false},
    {label: 'JS', value: 'js', disabled: false},
    {label: 'React', value: 'react', disabled: false},
    {label: 'Purple Liquid', value: 'purple_liquid', disabled: false}
]

function HW12() {

    const dispatch = useDispatch();
    const theme = useSelector((state: AppStateType) => state.theme.currentTheme);

    const onThemeChanged = (option: string) => {
        dispatch(changeThemeAC(option as ThemeType))        
    }

    return (
        <div>
            <hr/>
            <section className="hw_section">
                <h3>Homework #11</h3>

                <div style={{marginBottom: '10px'}} className="sub_header">App Color Theme:</div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <SuperRadio 
                        onChangeOption={onThemeChanged}
                        value={theme}
                        name="color_theme"
                        activeLabelClass="item_selected"
                        options={radio}/>
                </div>
            </section>
            <hr/>
        </div>
    );
}

export default HW12;

import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        let savedValue = restoreState<string>('editable-span-value', 'Double click to edit text');
        setValue(savedValue);
    }

    return (
        <div>
            <hr/>
            <section className={`hw_section ${s.hw6_section}`}>
                <h3>Homework #6</h3>
            
            
                <div className={s.text_fields}>
                    {/* Поле без валидации(error не задан), тк если пустая строка, в spanProps children будет сетаться "дефолтное значение нетронутого спана" */}
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'Double click to enter text'}}
                    />
                </div>

                <div className={s.buttons__wrapper}>
                    <SuperButton btnStyle="success" disabled={!value} onClick={save}>Save</SuperButton>

                    {/* Не дизейблится, тк если нет значения в локал сторадж, то будет сетаться строка-подстраховка из функции restoreState (второй параметр) */}
                    <SuperButton btnStyle="dark" onClick={restore}>Restore</SuperButton>
                </div>
               
            </section>
        </div>
    )
}

export default HW6

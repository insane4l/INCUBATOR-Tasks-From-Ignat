import React, {useState} from 'react'
import SuperSelect, { OptionType } from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './HW7.module.css'

// const arr = ['x', 'y', 'z']
const arr: Array<OptionType> = [
    {label: 'HTML&CSS', value:'html_css', disabled: false},
    {label: 'React.js', value:'react', disabled: false},
    {label: 'Redux', value:'redux', disabled: false},
    {label: 'GraphQL', value:'graphql', disabled: false},
    {label: '1С', value:'1с', disabled: true}
]

function HW7() {
    const [value, onChangeOption] = useState(arr[3].value)
    
    return (
        <div>
            <hr/>
            <section className="hw_section">
                <h3>Homework #7</h3>

                <div className="sub_header">Currently studying:</div>
                <div className={s.options__wrapper}>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
            
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                        activeLabelClass="item_selected"
                    />
                </div>

            </section>
        </div>
    )
}

export default HW7

import React, { ChangeEvent } from 'react'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number
    disable?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min = 0, max = 100, step = 1, disable = false 
    }
) => {

    // const onChangeCallback = (valueObj: [number, number]) => {
    //     onChangeRange && onChangeRange(valueObj) 
    // }
    
    // const onMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const minValue = +e.currentTarget.value;
    //     if (value && value.length === 2) {
    //         onChangeCallback([minValue, value[1]])
    //     }
    // }
    // const onMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const maxValue = +e.currentTarget.value;
    //     if (value && value.length === 2) {
    //         onChangeCallback([value[0], maxValue])
    //     }
    // }
    type onChangeCallbackArgsType = [value1: number, value2: undefined] | [value1: undefined, value2: number]
    
    const onChangeCallback = ([value1, value2]: onChangeCallbackArgsType) => {
        if (value && value.length === 2) {

            if (onChangeRange && value1) onChangeRange([value1, value[1]]) // todo: need to fix when value === 0
            if (onChangeRange && value2) onChangeRange([value[0], value2]) // todo: need to fix when value === 0
        }
    }

    const onFirstInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeCallback([+e.currentTarget.value, undefined])
    }
    const onSecondInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeCallback([undefined, +e.currentTarget.value])
    }

    // todo: code refactoring
    const rangeSelectedLineWidth = (value && value.length === 2) ? ( +max / 100 ) * (Math.abs(value[0] - value[1])) + '%' : '0px'
    const startPosition = (value && value.length === 2) ? value[0] < value[1] ? max / 100 * value[0] + '%' : max / 100 * value[1] + '%' : '0'
    const rangeSelectedLineStyle = (value && value.length === 2) ? {left: startPosition, width: rangeSelectedLineWidth} : {}

    const commonProps = {min, max, step, disabled: disable, className: s.range__input, type: "range"}
    
    return (
        <div className={s.slider__wrapper}>
            <div style={rangeSelectedLineStyle} className={s.range__selected_line}></div>
            <input value={value && value[0]} onChange={onFirstInputChange}  {...commonProps}/>
            <input value={value && value[1]} onChange={onSecondInputChange} {...commonProps} />
        </div>
    )
}

export default SuperDoubleRange

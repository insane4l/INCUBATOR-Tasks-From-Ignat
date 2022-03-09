import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

export type OptionType = {
    label: string
    value: string
    disabled: boolean
}

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: OptionType[]
    onChangeOption?: (value: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    
    const mappedOptions = options ? options.map(el => (
        <option key={el.label} value={el.value} label={el.label} disabled={el.disabled}></option>
    )) : [] // if options did not come from the server

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect

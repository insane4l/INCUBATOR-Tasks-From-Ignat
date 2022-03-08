import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type OptionType = {
    label: string
    value: string
    disabled: boolean
}

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: OptionType[]
    labelClassName?: string
    activeLabelClass?: string
    onChangeOption?: (value: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption, labelClassName = '',
        activeLabelClass,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    

    const mappedOptions = options ? options.map((o, i) => {

        const disabledLabelClass = o.disabled ? s.label_disabled : ''
        const selectedLabelClass = value === o.value ? activeLabelClass : ''
        const finalLabelCN = `${disabledLabelClass} ${selectedLabelClass} ${labelClassName}`
        
        return (
            <label key={name + '-' + i} className={finalLabelCN}>
                <input
                    type={'radio'}
                    name={name}
                    value={o.value}
                    checked={value === o.value}
                    disabled={o.disabled}
                    onChange={onChangeCallback}
                    {...restProps}
                />
                {o.label}
            </label>
        )
    }) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio

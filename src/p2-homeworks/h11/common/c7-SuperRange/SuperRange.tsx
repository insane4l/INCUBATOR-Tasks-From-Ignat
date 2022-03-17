import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'

// default input props types
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    withValueIndicator?: boolean // works only with controlled value prop
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // not to be redefined
        onChange, onChangeRange,
        className, withValueIndicator,
        max = 100,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range__input} ${className ? className : ''}`


    return (
        <div className={s.slider__wrapper}>
            {/* Hide SelectedRangeLine if SuperRange value uncontrolled */}
            {typeof restProps.value === 'number' && <SelectedRangeLine currentValue={restProps.value} maxValue={+max} />}

            {/* ATTENTION: ValueIndicator must be as next sibling of input (next sibling selector used in css styles) */}
            <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}
                max={max}

                {...restProps}
            />
            {/* Hide ValueIndicator if SuperRange value uncontrolled */}
            {withValueIndicator && (restProps.value || restProps.value === 0) && <ValueIndicator currentValue={+restProps.value} maxValue={+max} />}        
        </div>
    )
}



const SelectedRangeLine: React.FC<{currentValue: number, maxValue: number}> = ({currentValue, maxValue}) => {

    const lineWidth = currentValue / (maxValue / 100 ) + '%'
    const style = {width: lineWidth}

    return (
        <div style={style} className={s.range__selected_line}></div>
    )
}



const ValueIndicator: React.FC<{currentValue: number, maxValue: number}> = ({currentValue, maxValue}) => {

    const valueIndicatorPosition = currentValue / (maxValue / 100) + '%' 

    return (
        <div style={{left: valueIndicatorPosition}} className={s.range__value_indicator} >
            <div>
                {currentValue}
            </div>
        </div>
    )
}

export default SuperRange

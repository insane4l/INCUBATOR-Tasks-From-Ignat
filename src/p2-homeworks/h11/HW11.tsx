import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeDoubleRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            <section className="hw_section">
                <h3>Homework #11</h3>
                
                <div>
                    <span>{value1}</span>
                    <SuperRange
                        min={0}
                        max={100}
                        value={value1}
                        onChangeRange={setValue1}
                    />
                </div>

                <div>
                    <div>{value1}</div>
                        <SuperDoubleRange value={[value1, value2]} onChangeRange={onChangeDoubleRange} min={0} max={100}/>
                    <div>{value2}</div>
                </div>
            </section>
        </div>
    )
}

export default HW11

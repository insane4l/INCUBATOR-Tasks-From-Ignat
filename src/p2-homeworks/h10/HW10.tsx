import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import { AppStateType } from './bll/store';
import Spinner from './Spinner';

function HW10() {

    const isLoading = useSelector((state: AppStateType) => state.loading.isLoading )
    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch( loadingAC(true) )
        
        setTimeout(() => {
            dispatch( loadingAC(false) )
        }, 3000)
    };

    let wrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '120px',
        border: '3px solid #000',
        borderRadius: '4px',
        backgroundColor: '#222'
    }

    return (
        <div>
            <hr/>
            <section className="hw_section">
                <h3>Homework #10</h3>
                
                <div style={wrapperStyle}>
                    {isLoading
                        ? <Spinner /> 
                        : <SuperButton btnStyle="success" upperCase onClick={setLoading}>Go into space</SuperButton>
                    }
                </div>
                
            </section>

        </div>
    )
}

export default HW10

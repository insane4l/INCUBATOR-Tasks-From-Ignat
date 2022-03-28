import React, { useState } from 'react'
import Spinner from '../h10/Spinner';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox'
import { testRequest } from './services/testAPI'

type ResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}

function Request() {

    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [spinnerDisplay, setDisplaySpinner] = useState(false)

    const sendRequest = (value: boolean) => {
        setError('');
        setResponse('');
        setDisplaySpinner(true);

        testRequest<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', value)
        .then(data => {
            setDisplaySpinner(false);
            setResponse(data.info);
        })
        .catch(error => {
            setDisplaySpinner(false);
            setError(error.message);							
        })
    }

    const responseSectionStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '600px',
        height: '120px', padding: '10px',  border: '2px solid #000', borderRadius: '4px',
        fontWeight: '600', backgroundColor: '#222', color: '#fff'
    }

    return (
        <div>
            <SuperCheckbox onChangeChecked={sendRequest} >Click to send a test request to the server</SuperCheckbox>

            <div style={{margin: '20px 0 5px 0'}}className="sub_header">Response:</div> 
            <div style={responseSectionStyle}>
                {response && <span style={{fontWeight: '900'}}>{response}</span>}
                {error && <span style={{color: 'red'}}>{error}</span>}

                {spinnerDisplay && <Spinner/>}
            </div>
        </div>
    )
}

export default Request
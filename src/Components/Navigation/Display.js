import React from 'react'
import ReactDOM from 'react-dom'
const Display = () => {
    const ModalOverlay = ()=>{
        return(
            <div>
                <Stay/>
            </div>
        )
    }
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<ModalOverlay/>,document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default Display
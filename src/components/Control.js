import React from 'react'
import { connect } from 'react-redux'

const Control = props => {
    return(
        <div>
            <button className={'btn btn-primary'} onClick={ () => props.add()}> + Increase</button>
            <span style={{paddingLeft: '20px'}}></span>
            <button className={'btn btn-danger'} onClick={ () => props.sub()}> - Decrease</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        add: () => {
            dispatch( {type: 'ADD'} )
        },
        sub: () => {
            dispatch( {type: 'SUB'} )
        }
    }
}

export default connect(null, mapDispatchToProps)(Control)
import React from 'react'
import { Card} from 'react-bootstrap'

const Box = (props) => {
    return (
        <>
            <Card className='mt-5' style={{opacity: 0.8}}>
                <Card.Header className="bg-dark text-white">{props.title}</Card.Header>
                <Card.Body >
                    {props.children}
                </Card.Body>
            </Card>           
            
        </>
    )
}

export default Box

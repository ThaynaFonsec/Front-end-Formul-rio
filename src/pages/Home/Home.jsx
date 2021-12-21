import React, {useEffect, useState } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiRickandMorty from '../../services/apiRickandMorty'

const Home = () => {

    const [personagens, setPersonagens] = useState([]);

    useEffect (() => {
        apiRickandMorty.get('/character?language=pt-BR').then(resultado => {
            setPersonagens(resultado.data.results);
        })
    }, []) 


    return (
        <>
                <div>
                    <Image style={{width: 1349, height: 559 }} 
                    src='http://s2.glbimg.com/VBAKYT6J38LGWcVLixJGLm6sjwQ=/e.glbimg.com/og/ed/f/original/2017/10/23/rick-and-morty.gif'/>

                </div>
                <div style={{backgroundColor: '#1C1C1C'}} className="align-items-center">
                    <Container>
                        <Row > 
                            {
                                personagens.map(personagem => ( 
                                    <Col md = {3} key= {personagem.id} className='mt-5 mb-3'>
                                        <Card className='btn btn-dark'>
                                            <Link><Card.Img variant="top" src={personagem.image}/></Link>   
                                            <Card.Header>{personagem.name}</Card.Header>                            
                                        </Card>
                                    </Col>
                                ))
                            }

                        </Row>
                    </Container>
                    
                </div>
        </>
    )
}

export default Home
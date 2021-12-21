import React, { useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import EpisodioService from '../../services/Backend/EpisodioService'
import {mask, unMask} from 'remask'
import validadorepisodios from '../../validadores/validadorepisodios'

const FormEpisodios = (props) => {

    const {register, handleSubmit, setValue, formState: {errors} } = useForm([])

    useEffect(()=> {
        const id = props.match.params.id

        if(id) {
            
            const alien = EpisodioService.get(id)
    
            for(let campo in alien) {
                setValue(campo, alien[campo])
            }
        }

    }, [props, setValue]) 

    function handleChange(event){
        const nome = event.target.name
        const mascara = event.target.getAttribute('mask')

        let valor = unMask(event.target.value)
        valor = mask (valor, mascara)

        setValue(nome, valor)
    }

    function enviarDados(dados) {
        const id = props.match.params.id

        id ? EpisodioService.update(dados, id) : EpisodioService.create(dados)
       
        props.history.push('/episodios')
    }
    
    return (
        <>

            <Box title='Formulário dos Episódios'>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="nome">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Nome" {...register("nome", validadorepisodios.nome)}/>
                            {errors.nome && <span className="text-secondary">{errors.nome.message}</span>}
                        </Form.Group> 
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="lancamento">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Data do Lancamento" {...register("lancamento", validadorepisodios.lancamento)} mask='99/99/9999' onChange = {handleChange}/>
                        {errors.lancamento && <span className="text-secondary">{errors.lancamento.message}</span>}
                        </Form.Group>
                    </Row>

                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Temporada: 
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Check
                            type="radio"
                            label="1º"
                            value="1º"
                            id="temporada"
                            {...register("temporada")}
                            />
                            <Form.Check
                            type="radio"
                            label="2°"
                            value="2º"
                            id="temporada"
                            {...register("temporada")}
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>

                    <div className="text-center mt-2">
                        <Button variant="dark" onClick = {handleSubmit(enviarDados)}>Salvar</Button>
                        <Link to='/episodios' className='mx-2'>
                            <Button variant="dark" >Voltar</Button>
                        </Link>
                    </div>
                </Form>
            </Box>
            
        </>
    )
}

export default FormEpisodios

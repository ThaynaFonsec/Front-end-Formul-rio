import React, { useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import AnimaisService from '../../services/Backend/AnimaisService'
import validadoranimais from '../../validadores/validadoranimais'
import {mask, unMask} from 'remask'

const FormAnimais = (props) => {

    const {register, handleSubmit, setValue, formState: {errors} } = useForm([])

    useEffect(()=> {
        const id = props.match.params.id

        if(id) {
            
            const animal = AnimaisService.get(id)
    
            for(let campo in animal) {
                setValue(campo, animal[campo])
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

        id ? AnimaisService.update(dados, id) : AnimaisService.create(dados)
       
        props.history.push('/animais')
    }
    return (
        <>
            <Box title='Formulário dos Animais'>
            <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="nome">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Nome" {...register("nome", validadoranimais.nome)}/>
                            {errors.nome && <span className="text-secondary">{errors.nome.message}</span>}
                        </Form.Group>

                        <Form.Group as={Col} controlId="nascimento">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Data de Nascimento" {...register("nascimento", validadoranimais.nascimento)} mask='99/99/9999' onChange = {handleChange}/>
                            {errors.nascimento && <span className="text-secondary">{errors.nascimento.message}</span>}
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="cidade">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Cidade" {...register("cidade", validadoranimais.cidade)}/>
                        {errors.cidade && <span className="text-secondary">{errors.cidade.message}</span>}
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="status" >
                        <Form.Label></Form.Label>
                        <Form.Select {...register("status")} >
                            <option>Status</option>
                            <option>Vivo</option>
                            <option>Morto</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="planeta" >
                        <Form.Label></Form.Label>
                        <Form.Select {...register("planeta")} >
                            <option>Planeta</option>
                            <option>Terra</option>
                            <option>Aliens</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="sexo" >
                        <Form.Label></Form.Label>
                        <Form.Select {...register("sexo")} >
                            <option>Sexo</option>
                            <option>Feminimo</option>
                            <option>Masculino</option>
                        </Form.Select>
                        </Form.Group>

                    </Row>
                    <div className="text-center mt-2">
                        <Button variant="dark" onClick = {handleSubmit(enviarDados)}>Salvar</Button>
                        <Link to='/animais' className='mx-2'>
                            <Button variant="dark" >Voltar</Button>
                        </Link>
                    </div> 
                </Form>
            </Box>

        </>
    )
}

export default FormAnimais

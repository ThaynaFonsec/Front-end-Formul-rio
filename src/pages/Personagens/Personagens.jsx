import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import PersonagensService from '../../services/Backend/PersonagensService'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import "../../Style/img.css"

const Personagens = () => {

    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        const personagens = PersonagensService.getAll()
        setPersonagens(personagens)
    }, [])

    function excluir(i) {

        if(window.confirm('Deseja realmente excluir o registro?')){
            PersonagensService.delete(i)
            setPersonagens(PersonagensService.getAll())
        }
    }

    return (
        <>
                <Box title="Personagens">
                <Link to='/formpersonagens' className='btn btn-secondary mb-3'>Adicionar</Link>
                <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th className='text-center'>Editar</th>
                            <th className='text-center'>Nome</th>
                            <th className='text-center'>Especie</th>
                            <th className='text-center'>Data de Nascimento</th>
                            <th className='text-center'>Cidade</th>
                            <th className='text-center'>Status</th>
                            <th className='text-center'>Sexo</th>
                            <th className='text-center'>Planeta</th>
                            <th className='text-center'>Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personagens.map((personagem, i )=> (

                                <tr key={i}>
                                    <td className='text-center'>
                                        <Link to={'/formpersonagens/' + i }>
                                            <AiFillEdit className='text-dark' title='editar'/>
                                        </Link>
                                    </td>
                                    <td className='text-center'>{personagem.nome}</td>
                                    <td className='text-center'>{personagem.especie}</td>
                                    <td className='text-center'>{personagem.nascimento}</td>
                                    <td className='text-center'>{personagem.cidade}</td>
                                    <td className='text-center'>{personagem.status}</td>
                                    <td className='text-center'>{personagem.sexo}</td>
                                    <td className='text-center'>{personagem.planeta}</td>
                                    <td className='text-center'><AiFillDelete title='excluir' onClick={() => excluir(i)}/></td>
                                </tr>

                            ))}
                            
                        </tbody>
                    </Table>

                </Box>
        </>
    )
}

export default Personagens

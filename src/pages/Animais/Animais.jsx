import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import AnimaisService from '../../services/Backend/AnimaisService'

const Animais = () => {

    const [animais, setAnimais] = useState([]);

    useEffect(() => {
        const animais = AnimaisService.getAll()
        setAnimais(animais)
    }, [])

    function excluir(i) {

        if(window.confirm('Deseja realmente excluir o registro?')){
            AnimaisService.delete(i)
            setAnimais(AnimaisService.getAll())
        }
    }
    return (
        <>
            <Box title='Animais'>
            <Link to='/formanimais' className='btn btn-secondary mb-3'>Adicionar</Link>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th className='text-center'>Editar</th>
                        <th className='text-center'>Nome</th>
                        <th className='text-center'>Data de Nascimento</th>
                        <th className='text-center'>Cidade</th>
                        <th className='text-center'>Status</th>
                        <th className='text-center'>Planeta</th>
                        <th className='text-center'>Sexo</th>
                        <th className='text-center'>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animais.map((animal, i )=> (

                            <tr key={i}>
                                <td className='text-center'>
                                    <Link to={'/formanimais/' + i }>
                                        <AiFillEdit className='text-dark' title='editar'/>
                                    </Link>
                                </td>
                                <td className='text-center'>{animal.nome}</td>
                                <td className='text-center'>{animal.nascimento}</td>
                                <td className='text-center'>{animal.cidade}</td>
                                <td className='text-center'>{animal.status}</td>
                                <td className='text-center'>{animal.planeta}</td>
                                <td className='text-center'>{animal.sexo}</td>
                                <td className='text-center'><AiFillDelete title='excluir' onClick={() => excluir(i)}/></td>
                            </tr>

                        ))}
                        
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Animais

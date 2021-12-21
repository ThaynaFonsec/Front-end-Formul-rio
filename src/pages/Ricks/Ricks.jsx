import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';
import RicksService from '../../services/Backend/RicksService';

const Ricks = () => {

    const [ricks, setRicks] = useState([]);

    useEffect(() => {
        const ricks = RicksService.getAll()
        setRicks(ricks)
    }, [])

    function excluir(i) {

        if(window.confirm('Deseja realmente excluir o registro?')){
            RicksService.delete(i)
            setRicks(RicksService.getAll())
        }
    }
    return (
        <>
            <Box title='Comunidade dos Ricks'>
            <Link to='/formricks' className='btn btn-secondary mb-3'>Adicionar</Link>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th className='text-center'>Editar</th>
                        <th className='text-center'>Nome</th>
                        <th className='text-center'>Especie</th>
                        <th className='text-center'>CPF</th>
                        <th className='text-center'>Data de Nascimento</th>
                        <th className='text-center'>Cidade</th>
                        <th className='text-center'>Status</th>
                        <th className='text-center'>Sexo</th>
                        <th className='text-center'>Planeta</th>
                        <th className='text-center'>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ricks.map((rick, i )=> (

                            <tr key={i}>
                                <td className='text-center'>
                                    <Link to={'/formricks/' + i }>
                                        <AiFillEdit className='text-dark' title='editar'/>
                                    </Link>
                                </td>
                                <td className='text-center'>{rick.nome}</td>
                                <td className='text-center'>{rick.especie}</td>
                                <td className='text-center'>{rick.cpf}</td>
                                <td className='text-center'>{rick.nascimento}</td>
                                <td className='text-center'>{rick.cidade}</td>
                                <td className='text-center'>{rick.status}</td>
                                <td className='text-center'>{rick.sexo}</td>
                                <td className='text-center'>{rick.planeta}</td>
                                <td className='text-center'><AiFillDelete title='excluir' onClick={() => excluir(i)}/></td>
                            </tr>

                        ))}
                        
                    </tbody>
                </Table>
            </Box>                 
        </>
    )
}

export default Ricks

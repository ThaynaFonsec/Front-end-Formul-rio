import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import AliensService from '../../services/Backend/AliensService'

const Aliens = () => {

    const [aliens, setAliens] = useState([]);

    useEffect(() => {
        const aliens = AliensService.getAll()
        setAliens(aliens)
    }, [])

    function excluir(i) {

        if(window.confirm('Deseja realmente excluir o registro?')){
            AliensService.delete(i)
            setAliens(AliensService.getAll())
        }
    }

    return (
        <>
            <Box title='Aliens'>
            <Link to='/formaliens' className='btn btn-secondary mb-3'>Adicionar</Link>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th className='text-center'>Editar</th>
                        <th className='text-center'>Nome</th>
                        <th className='text-center'>CPF</th>
                        <th className='text-center'>Data de Nascimento</th>
                        <th className='text-center'>Cidade</th>
                        <th className='text-center'>Status</th>
                        <th className='text-center'>Planeta</th>
                        <th className='text-center'>Sexo</th>
                        <th className='text-center'>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aliens.map((alien, i )=> (

                            <tr key={i}>
                                <td className='text-center'>
                                    <Link to={'/formaliens/' + i }>
                                        <AiFillEdit className='text-dark' title='editar'/>
                                    </Link>
                                </td>
                                <td className='text-center'>{alien.nome}</td>
                                <td className='text-center'>{alien.cpf}</td>
                                <td className='text-center'>{alien.nascimento}</td>
                                <td className='text-center'>{alien.cidade}</td>
                                <td className='text-center'>{alien.status}</td>
                                <td className='text-center'>{alien.planeta}</td>
                                <td className='text-center'>{alien.sexo}</td>
                                <td className='text-center'><AiFillDelete title='excluir' onClick={() => excluir(i)}/></td>
                            </tr>

                        ))}
                        
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Aliens

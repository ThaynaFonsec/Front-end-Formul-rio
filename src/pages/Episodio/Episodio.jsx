import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';
import EpisodioService from '../../services/Backend/EpisodioService';

const Episodio = () => {

    const [episodios, setEpisodios] = useState([]);

    useEffect(() => {
        const episodios = EpisodioService.getAll()
        setEpisodios(episodios)
    }, [])

    function excluir(i) {

        if(window.confirm('Deseja realmente excluir o registro?')){
            EpisodioService.delete(i)
            setEpisodios(EpisodioService.getAll())
        }
    }
    return (
        <>

            <Box title='Episódios'>
                <Link to='/formepisodios' className='btn btn-secondary mb-3'>Adicionar</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th className='text-center'>Editar</th>
                        <th className='text-center'>Nome</th>
                        <th className='text-center'>Data do Lançamento</th>
                        <th className='text-center'>Temporada</th>
                        <th className='text-center'>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodios.map((episodio, i )=> (

                            <tr key={i}>
                                <td className='text-center'>
                                    <Link to={'/formepisodios/' + i }>
                                        <AiFillEdit className='text-dark' title='editar'/>
                                    </Link>
                                </td>
                                <td className='text-center'>{episodio.nome}</td>
                                <td className='text-center'>{episodio.lancamento}</td>
                                <td className='text-center'>{episodio.temporada}</td>
                                <td className='text-center'><AiFillDelete title='excluir' onClick={() => excluir(i)}/></td>
                            </tr>

                        ))}
                        
                    </tbody>
                </Table>
            </Box>
            
        </>
    )
}

export default Episodio

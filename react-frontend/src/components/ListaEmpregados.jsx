import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmpregadoService from './EmpregadoService';
import Empregado from './Empregado';

const ListaEmpregados = () => {
    const navigate = useNavigate();

    const [carregando, setCarregando] = useState(true);
    const [empregados, setEmpregados] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setCarregando(true);
            try {
                const response = await EmpregadoService.listar();
                setEmpregados(response.data);
            } catch (error) {
                console.log(error)
            }
            setCarregando(false);
        };
        fetchData();
    }, []);

    const deletarEmpregado = (id) => {
        console.log('init delet')
        EmpregadoService.deletarEmpregado(id).then((res) => {
            if (empregados) {
                setEmpregados((prevElement) => {
                    console.log('deletado');
                    return prevElement.filter((empregado) => empregado.id != id);
                });
            }
        })
    }


    return (
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button
                    onClick={() => navigate("/AdcEmpregado")}
                    className="rounded bg-green-400 hover:bg-green-500 text-white px-6 py-2 font-semibold">
                    Adicionar Empregado
                </button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Nome
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Sobrenome
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                CPF
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Email
                            </th>
                            <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    {!carregando && (
                        <tbody className="bg-white">
                            {empregados.map((empregadosmap) => (
                                <Empregado
                                    Empregadotag={empregadosmap}
                                    // onClick={deletarEmpregado(empregadosmap.id)}
                                    //deletarEmpregado={deletarEmpregado}
                                    key={empregadosmap.id}>
                                </Empregado>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default ListaEmpregados
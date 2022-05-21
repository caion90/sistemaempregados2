import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmpregadoService from './EmpregadoService';


const AtualizarEmpregado = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [empregado, setEmpregado] = useState({
        id: id,
        firstname: "",
        lastname: "",
        email: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmpregado({ ...empregado, [e.target.name]: value });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmpregadoService.getEmpregadobyID(empregado.id);
                setEmpregado(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const salvarEmpregado = (e) => {
        e.preventDefault();
        console.log(empregado);
        EmpregadoService.AtualizarEmpregado(id, empregado)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const reset = () => {
        navigate("/");
    }


    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Adicionar novo empregado</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Nome
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={empregado.name}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2  hover:bg-slate-50"></input>
                </div>
                <div>
                    <label className="block text-gray-600 text-sm font-normal">
                        Sobrenome
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        value={empregado.lastname}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2  hover:bg-slate-50"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        CPF
                    </label>
                    <input
                        type="text"
                        name="cpf"
                        value={empregado.cpf}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2 hover:bg-slate-50"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={empregado.email}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2 hover:bg-slate-50"></input>
                </div>

                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        onClick={reset}
                        className="rounded text-white font-semibold bg-slate-300 hover:bg-slate-400 py-2 px-6">
                        Cancelar
                    </button>
                    <button
                        onClick={salvarEmpregado}
                        className="rounded text-white font-semibold bg-green-400 hover:bg-green-500 py-2 px-6">
                        Salvar
                    </button>

                </div>
            </div>
        </div >
    );
}


export default AtualizarEmpregado;
import React from "react";
import { useNavigate } from "react-router-dom";
import EmpregadoService from "./EmpregadoService";

const Empregado = ({ Empregadotag }) => {

    const navigate = useNavigate();

    const editarEmpregado = (e, id) => {
        e.preventDefault();
        navigate(`/AtuEmpregado/${id}`);
    };

    const deletarEmpregado = (e, id) => {
        e.preventDefault();
        EmpregadoService.deletarEmpregado(id).then((response) => {
            console.log(response);
        });
    }

    return (
        <tr key={Empregadotag.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{Empregadotag.name}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{Empregadotag.lastname}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{Empregadotag.cpf}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{Empregadotag.email}</div>
            </td>

            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <button
                    onClick={(e, id) => editarEmpregado(e, Empregadotag.id)}
                    className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                    Editar
                </button>
                <button
                    onClick={(e, id) => deletarEmpregado(e, Empregadotag.id)}
                    className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
                    Deletar
                </button>
            </td>
        </tr>
    );
};

export default Empregado;

import axios from "axios";

const api_url = "http://168.227.56.72:8000/api/v1/empregados";


class EmpregadoService {

    salvar(empregados) {
        return axios.post(api_url, empregados);
    }

    listar(empregados) {
        return axios.get(api_url, empregados);
    }

    getEmpregadobyID(id, empregado) {
        return axios.get(api_url + '/' + id, empregado);
    }

    AtualizarEmpregado(id, empregado) {
        return axios.put(api_url + '/' + id, empregado);
    }

    deletarEmpregado(id) {
        return axios.delete(api_url + '/' + id);
    }

}

export default new EmpregadoService();

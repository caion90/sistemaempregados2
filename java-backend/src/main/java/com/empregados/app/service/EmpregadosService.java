package com.empregados.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.empregados.app.entity.EmpregadoEntity;
import com.empregados.app.repository.EmpregadosRepository;

@Service
public class EmpregadosService {

	@Autowired
	EmpregadosRepository empregadosRepository;

	
	public void salvar(EmpregadoEntity empregado) {
		empregadosRepository.save(empregado);
	}

	public List<EmpregadoEntity> listar() {
		return empregadosRepository.findAll();
	}

	public EmpregadoEntity GetEmployeeByID(long id) {
		return empregadosRepository.findById(id).get();
	}

	public EmpregadoEntity UpdateEmpregadoByID(Long id, EmpregadoEntity empregado) {
		return empregadosRepository.save(empregado);
	}

	public void DeleteEmpregadoByID(Long id) {
		empregadosRepository.deleteById(id);
	}
	
}

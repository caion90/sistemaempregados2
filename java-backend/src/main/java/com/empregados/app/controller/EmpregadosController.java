package com.empregados.app.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.empregados.app.entity.EmpregadoEntity;
import com.empregados.app.service.EmpregadosService;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmpregadosController {

	@Autowired
	EmpregadosService empregadosService;
	
	@PostMapping("/empregados")
	private EmpregadoEntity salvarEmpregado(@RequestBody EmpregadoEntity empregado) {
		empregadosService.salvar(empregado);
		return empregado;
	}
		
	@GetMapping("/empregados")
	private List<EmpregadoEntity> listarEmpregados() {
		return empregadosService.listar();
	}

	@GetMapping("/empregados/{id}")
	private EmpregadoEntity GetEmpregadoByID(@PathVariable("id") Long id) {
		return empregadosService.GetEmployeeByID(id);
	}
	
	@PutMapping("/empregados/{id}")
	private EmpregadoEntity UpdateEmpregadoByID(@PathVariable("id") Long id, @RequestBody EmpregadoEntity empregado) {
		return empregadosService.UpdateEmpregadoByID(id, empregado);
	}

	@DeleteMapping("/empregados/{id}")
	private void DeleteEmpregadoByID(@PathVariable("id") Long id) {
		empregadosService.DeleteEmpregadoByID(id);
		return ;
	}
}

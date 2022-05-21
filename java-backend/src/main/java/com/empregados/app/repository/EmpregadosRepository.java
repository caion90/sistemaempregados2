package com.empregados.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.empregados.app.entity.EmpregadoEntity;

public interface EmpregadosRepository extends JpaRepository<EmpregadoEntity, Long>{

}

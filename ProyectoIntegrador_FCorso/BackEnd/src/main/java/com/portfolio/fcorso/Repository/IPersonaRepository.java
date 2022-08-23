package com.portfolio.fcorso.Repository;

import com.portfolio.fcorso.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}

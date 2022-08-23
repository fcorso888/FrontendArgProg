package com.portfolio.fcorso.Interface;

import com.portfolio.fcorso.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Para traer una lista de personas uso
    public List<Persona> getPersona();
    
    //guardar objeto tipo persona
    public void savePersona(Persona persona);
    
    //eliminar un obj (usuario) busco por Id
    public void deletePersona(Long Id);
    
    //buscar obj (persona/usuario) por Id
    public Persona findPersona(Long id);
}

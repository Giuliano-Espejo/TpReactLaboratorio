package com.giulianoEspejo.instrumentos.Repository;

import com.giulianoEspejo.instrumentos.Entity.Instrumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface InstrumentoRepository extends JpaRepository<Instrumento, String> {

}

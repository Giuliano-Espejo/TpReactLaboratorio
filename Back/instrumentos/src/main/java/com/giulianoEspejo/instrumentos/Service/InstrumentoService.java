package com.giulianoEspejo.instrumentos.Service;


import com.giulianoEspejo.instrumentos.Entity.Instrumento;

import java.util.List;

public interface InstrumentoService {
    public List<Instrumento> saveAll(List<Instrumento> instrumentos);

    public Instrumento getById(String id);

    public List<Instrumento> getAll();
}

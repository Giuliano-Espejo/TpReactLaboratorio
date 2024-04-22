package com.giulianoEspejo.instrumentos.Service.Imp;

import com.giulianoEspejo.instrumentos.Entity.Instrumento;
import com.giulianoEspejo.instrumentos.Repository.InstrumentoRepository;
import com.giulianoEspejo.instrumentos.Service.InstrumentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstrumentoServiceImp implements InstrumentoService {

    @Autowired
    private InstrumentoRepository instrumentoRepository;

    @Override
    public List<Instrumento> saveAll(List<Instrumento> instrumentos) {
        return instrumentoRepository.saveAll(instrumentos);
    }

    @Override
    public Instrumento getById(String id) {
        return instrumentoRepository.getById(id);
         }

    @Override
    public List<Instrumento> getAll() {
        return instrumentoRepository.findAll();
    }
}

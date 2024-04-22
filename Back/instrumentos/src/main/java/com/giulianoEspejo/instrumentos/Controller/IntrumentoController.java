package com.giulianoEspejo.instrumentos.Controller;

import com.giulianoEspejo.instrumentos.Entity.Instrumento;
import com.giulianoEspejo.instrumentos.Service.InstrumentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin("*")
@RequestMapping("/instrumento")
public class IntrumentoController {

    @Autowired
    private InstrumentoService instrumentoService;

    @GetMapping()
    public ResponseEntity<?> getAll(){
        Map<String, Object> responce  = new HashMap<>();
        try{
            List<Instrumento> instrumentos = instrumentoService.getAll();
            responce.put("instrumentos", instrumentos);
            return ResponseEntity.ok(responce);
        }catch (Exception e){
            responce.put("Error ", e.getMessage());
            return ResponseEntity.badRequest().body(responce);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable String id){
        Map<String, Object> responce  = new HashMap<>();
        try{
            Instrumento instrumento = instrumentoService.getById(id);
            responce.put("instrumento", instrumento);
            return ResponseEntity.ok(responce);
        }catch (Exception e){
            responce.put("Error ", e.getMessage());
            return ResponseEntity.badRequest().body(responce);
        }
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody List<Instrumento> instrumentos){
        Map<String, Object> responce  = new HashMap<>();
        try{
            instrumentoService.saveAll(instrumentos);
            responce.put("instrumentos guardados", instrumentos);
            return ResponseEntity.ok(responce);
        }catch (Exception e){
            responce.put("Error ", e.getMessage());
            return ResponseEntity.badRequest().body(responce);
        }
    }
}

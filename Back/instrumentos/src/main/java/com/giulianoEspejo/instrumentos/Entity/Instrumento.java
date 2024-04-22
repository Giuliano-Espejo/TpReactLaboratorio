package com.giulianoEspejo.instrumentos.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "instrumento")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Instrumento {
    @Id
    private String id;

    private String instrumento;

    private String marca;

    private String modelo;

    private String imagen;

    private String precio;

    private String costoEnvio;

    private String cantidadVendida;

    private String descripcion;
}

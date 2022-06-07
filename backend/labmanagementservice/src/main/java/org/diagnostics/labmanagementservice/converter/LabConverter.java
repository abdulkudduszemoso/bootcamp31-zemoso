package org.diagnostics.labmanagementservice.converter;

import org.diagnostics.labmanagementservice.dto.LabDTO;
import org.diagnostics.labmanagementservice.entity.Lab;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class LabConverter {
    private final ModelMapper mapper = new ModelMapper();

    public Lab dtoToEntity(LabDTO labDTO) {
        return mapper.map(labDTO, Lab.class);
    }

    public LabDTO entityToDTO(Lab lab) {
        return mapper.map(lab, LabDTO.class);
    }

    public List<LabDTO> entityToDTO(List<Lab> labs) {
        return labs.stream().map(this::entityToDTO).collect(Collectors.toList());
    }
}

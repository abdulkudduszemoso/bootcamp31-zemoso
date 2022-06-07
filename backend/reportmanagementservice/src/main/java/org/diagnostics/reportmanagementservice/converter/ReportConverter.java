package org.diagnostics.reportmanagementservice.converter;


import org.diagnostics.reportmanagementservice.dto.ReportDto;
import org.diagnostics.reportmanagementservice.entity.Report;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ReportConverter {

    private final ModelMapper mapper = new ModelMapper();

    public Report dtoToEntity(ReportDto reportDto){
        return mapper.map(reportDto, Report.class);
    }

    public ReportDto entityToDto(Report report){
        return mapper.map(report, ReportDto.class);
    }

    public List<ReportDto> entityToDto(List<Report> reportList){
        return reportList.stream().map(this::entityToDto).collect(Collectors.toList());
    }

}

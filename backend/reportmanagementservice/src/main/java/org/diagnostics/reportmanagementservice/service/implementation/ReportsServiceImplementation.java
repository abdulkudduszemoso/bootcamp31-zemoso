package org.diagnostics.reportmanagementservice.service.implementation;

import org.diagnostics.reportmanagementservice.converter.ReportConverter;
import org.diagnostics.reportmanagementservice.dto.ReportDto;
import org.diagnostics.reportmanagementservice.entity.Report;
import org.diagnostics.reportmanagementservice.repository.ReportRepository;
import org.diagnostics.reportmanagementservice.service.ReportsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReportsServiceImplementation implements ReportsService {

    @Autowired
    private ReportRepository reportRepository;

    @Override
    public List<ReportDto> getAllReports() {
        List<Report> reportList = reportRepository.findAll();
        return new ReportConverter().entityToDto(reportList);
    }

    @Override
    public List<ReportDto> getReportsByStatus(String status) {
        List<Report> reports = reportRepository.findAll();
        List<Report> completedReports = new ArrayList<>();
        List<Report> pendingReports = new ArrayList<>();
        for(int i=0;i<reports.size();i++){
            if(reports.get(i).getReportStatus().equalsIgnoreCase("completed") )
                completedReports.add(reports.get(i));
            else
                pendingReports.add(reports.get(i));
        }
        if(status .equalsIgnoreCase("completed") ){
            return new ReportConverter().entityToDto(completedReports);
        }else{
            return new ReportConverter().entityToDto(pendingReports);

        }

    }

    @Override
    public Report save(ReportDto reportDto) {
        return reportRepository.save(new ReportConverter().dtoToEntity(reportDto));
    }
}

package org.diagnostics.reportmanagementservice.dto;


import lombok.*;



@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ReportDto {

    int reportId;
    String labName;
    String testName;
    String reportStatus;
    String reportDownload;
    String reportTime;
    String createdAt;
    int updatedBy;
}

package org.diagnostics.reportmanagementservice.entity;

import lombok.*;

import javax.persistence.*;



@Entity
@Table(name="report")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="report_id")
    int reportId;

    @Column(name = "lab_name")
    String labName;

    @Column(name = "test_name")
    String testName;

    @Column(name = "report_status")
    String reportStatus;

    @Column(name = "report_date")
    String reportDownload;

    @Column(name="report_generation_time")
    String reportTime;

    @Column(name="created_at")
    String createdAt;

    @Column(name="updated_by")
    int updatedBy;

}

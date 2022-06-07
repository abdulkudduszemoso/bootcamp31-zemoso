package org.diagnostics.ordermanagementservice.dto;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PatientDTO {

    private int patientId;
    private int userId;
    private String patientName;
    private String dob;
    private String gender;
    private String relation;
}

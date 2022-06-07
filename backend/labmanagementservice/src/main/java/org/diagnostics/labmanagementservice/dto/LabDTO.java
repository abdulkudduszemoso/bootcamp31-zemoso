package org.diagnostics.labmanagementservice.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class LabDTO {
    private int labId;
    private String labName;
    private String labLocation;
    private float labRating;
    private int slotsAvailable;
    private String createdAt;
    private int updatedBy;
}

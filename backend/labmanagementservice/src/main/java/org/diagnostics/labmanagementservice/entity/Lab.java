package org.diagnostics.labmanagementservice.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="lab")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Lab {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="lab_id")
    private int labId;

    @Column(name="lab_name")
    private String labName;

    @Column(name="lab_location")
    private String labLocation;

    @Column(name="lab_rating")
    private float labRating;

    @Column(name="slots_available")
    private int slotsAvailable;

    @Column(name="created_at")
    private String createdAt;

    @Column(name="updated_by")
    private int updatedBy;
}

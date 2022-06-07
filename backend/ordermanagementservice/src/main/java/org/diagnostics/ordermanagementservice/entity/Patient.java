package org.diagnostics.ordermanagementservice.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="patient")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="patient_id")
    private int patientId;

    @Column(name="user_id")
    private int userId;

    @Column(name="patient_name")
    private String patientName;

    @Column(name="dob")
    private String dob;

    @Column(name="gender")
    private String gender;

    @Column(name = "relation")
    private String relation;
}

package org.diagnostics.ordermanagementservice.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotNull;

import javax.persistence.*;

@Entity
@Table(name="address")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="address_id")
    private int addressId;

    @Column(name = "house_no")
    @NotNull
    private String houseNo;

    @Column(name = "area")
    @NotNull
    private String area;

    @Column(name = "city")
    @NotNull
    private String city;

    @Column(name = "state")
    @NotNull
    private String state;

    @Column(name = "zip")
    @NotNull
    private int zip;

    @Column(name = "user_id")
    @NotNull
    private int userId;
}

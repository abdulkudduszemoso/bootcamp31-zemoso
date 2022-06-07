package org.diagnostics.ordermanagementservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto {

    private int addressId;
    private String houseNo;
    private String area;
    private String city;
    private String state;
    private int zip;
    private int userId;

}

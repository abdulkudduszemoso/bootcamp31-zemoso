import React, { useState } from "react";
import { CardContent, Card, Typography, Box } from "@mui/material";
import TextField from "../../atoms/InputField";
import styled from "@emotion/styled";
const StyledCard = styled(Card)({
  width: "36.4375rem",
  height: "35rem",
  marginTop: '1.25rem'
});
const StyledCardContent = styled(CardContent)({
  padding: "1.5rem",
});

const AddAddress = () => {
  const [addressData, setAddressData] = useState({});
  const handleChange = (event: any) => {
    
    setAddressData({
      ...addressData,
      [event.target.name]: event.target.value,
    });
    localStorage.setItem(
      "addAddressFormData",
      JSON.stringify({
        ...addressData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const zipVal  = (event:any)=>{
    if(! (/\b\d{5}\b/.test(event.target.value))){
      alert("Enter the correct ZIP CODE!")
    }
  }

  return (
    <StyledCard>
      <StyledCardContent data-testid="add-address">
        <Typography variant="heading4" color="secondary.main">
          Add Address
        </Typography>
        <Box sx={{ paddingTop: "32px", display: "block" }}>
          <Typography variant="body6" color="secondary.light">
            House/ Flat/ Block No.
          </Typography>
          <TextField
            width="100%"
            name="house/flat/blockNumber"
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ paddingTop: "22px", display: "block" }}>
          <Typography variant="body6" color="secondary.light">
            Road / Area
          </Typography>
          <TextField width="100%" name="road/area" onChange={handleChange} />
        </Box>
        <Box sx={{ paddingTop: "22px", display: "block" }}>
          <Typography variant="body6" color="secondary.light">
            Zipcode
          </Typography>
          <TextField width="100%" name="zipcode" onChange={handleChange} onblur={zipVal}/>
        </Box>
        <Box sx={{ paddingTop: "22px", display: "block" }}>
          <Typography variant="body6" color="secondary.light">
            City, State
          </Typography>
          <TextField width="100%" name="city/state" onChange={handleChange} />
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
};
export default AddAddress;

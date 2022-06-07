import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Buttons from "../../atoms/Button/index";
import TypographyComponent from "../../atoms/Typography";
import Plus from "../../../../public/assets/images/plus.svg";
import Image from "../../atoms/Image";
import CardWithRadioButton from "../../molecules/CardWithRadioButton";

const useStyles = makeStyles({
  main: {
    position: "relative",
    width: 583,
    height: 560,
    borderRadius: 8,
  },
  topContainer: {
    width: 535,
    height: 42,
    position: "absolute",
    left: 24,
    top: 24,
  },
  textSelectAddress: {
    width: 146,
    height: 24,
    position: "absolute",
    top: 9,
  },
  textAddAddress: {
    position: "absolute",
    top: 13,
    right: 16,
    display: "flex",
    flexDirection: "row",
    gap: 12.5,
  },
  plusImg: {
    width: 12.5,
    height: 12.5,
  },
  selectAddressContainer: {
    position: "absolute",
    left: 24,
    top: 90,
  },
});

interface AddressCardDetails {
  id: number;
  addressNumber: string;
  addressType: string;
  houseNo: string,
  area: string,
  zip: string,
  city: string,
  state: string
}

interface SelectAddressProp {
  addresses: AddressCardDetails[];
  onClick?: any;
}

const SelectAddressList = ({ addresses }: SelectAddressProp) => {
  const styles = useStyles();
  const [value, setValue] = useState(-1);
  const pullData = (id: any) => {
    setValue(id);
  };

  return (
    <div className={styles.main}>
      <div className={styles.topContainer}>
        <div className={styles.textSelectAddress}>
          <TypographyComponent
            text="Select Address"
            variant="heading4"
            color="secondary.main"
          />
        </div>
        <div className={styles.textAddAddress}>
          <Buttons
            variant="text"
            name="Add Address"
            variantSize="text"
            startIcon={<Image src={Plus} alt="plus" />}
          />
        </div>
      </div>
      <div className={styles.selectAddressContainer}>
        {addresses.map((address: any) => (
          <CardWithRadioButton
            activeId={value}
            callback={pullData}
            cardData={{
              id: address.addressId,
              addressNumber: "Address",
              addressType: "HOME",
              houseNo: address.houseNo,
              area: address.area,
              zipCode: address.zip,
              city: address.city,
              state: address.state
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectAddressList;

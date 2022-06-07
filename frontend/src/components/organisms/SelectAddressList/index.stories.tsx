import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import React from "react";
import SelectAddressList from ".";

export default {
  title: "Organisms/Select Address List",
  component: SelectAddressList,
} as ComponentMeta<typeof SelectAddressList>;

const addressList = [
  {
    "id": 1,
    "addressNumber": "Default Address",
    "addressType": "Home",
    "houseNo": "2235 California Street APT#021",
    "area": "Mountain View California",
    "zip": "11023",
    "city": "Mountain View",
    "state": "California"
  },
  {
    "id": 2,
    "addressNumber": "Address 2",
    "addressType": "OFFICE",
    "houseNo": "2235 California Street APT#021",
    "area": "Mountain View California",
    "zip": "11023",
    "city": "Mountain View",
    "state": "California"
  }
];

let Template: ComponentStory<typeof SelectAddressList> = (args) => {
  return <SelectAddressList {...args} />;
};

export const SelectAddressListStory = Template.bind({});

SelectAddressListStory.args = {
  addresses: addressList,
};

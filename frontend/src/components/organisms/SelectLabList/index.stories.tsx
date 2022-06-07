import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import React from "react";
import SelectLabList from ".";
const Altos = require('../../../../public/assets/images/altos.svg');

export default {
    title: 'Organisms/Select Lab List',
    component: SelectLabList
} as ComponentMeta<typeof SelectLabList>;

const labList = [{
    id: 1,
    labLogo: Altos,
    labName: "Los Altos Center Lab",
    rating: 4.3,
    slots: 4,
    reportsTime: "Reports ready in 24 hrs",
    cost: "$1200 for 1 Test",
}]

let Template: ComponentStory<typeof SelectLabList> = (props) => <SelectLabList {...props}/>

export const TestComp = Template.bind({})
TestComp.args = {labList}

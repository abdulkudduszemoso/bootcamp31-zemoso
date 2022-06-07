import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import IconWithText from ".";
import Plus from '../../../../public/assets/images/plus.svg';

export default{
    title:'Molecules/Icon With Text',
    componenet: IconWithText
} as ComponentMeta<typeof IconWithText>

let Template: ComponentStory<typeof IconWithText> = (props) => <IconWithText {...props}/>

export const TestComp = Template.bind({})
TestComp.args = {
    buttonText: 'Add Item',
    startIcon: Plus
}

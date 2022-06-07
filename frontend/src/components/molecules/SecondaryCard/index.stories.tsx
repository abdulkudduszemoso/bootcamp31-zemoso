import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SecondaryCard from ".";
import BodyTest from '../../../../public/assets/images/bodytest.svg';
import CardiacTest from '../../../../public/assets/images/cardiac.svg'
import StressTest from '../../../../public/assets/images/stress.svg'

export default {
  title: "Molecules/SecondaryCard",
  component: SecondaryCard,
} as ComponentMeta<typeof SecondaryCard>;

const Template: ComponentStory<typeof SecondaryCard> = (props) => (
  <SecondaryCard {...props} />
);

export const FullBodyCheckUp = () => (
    <SecondaryCard variant="square" src={BodyTest} title='Full Body Checkup'/>
);


export const CardiacRiskAssessment = () => (
  <SecondaryCard variant="square" src={CardiacTest} title='Cardiac Risk Assessment'/>
);

export const StressAssessment = () => (
  <SecondaryCard variant="square" src={StressTest} title='Stress Assessment'/>
);
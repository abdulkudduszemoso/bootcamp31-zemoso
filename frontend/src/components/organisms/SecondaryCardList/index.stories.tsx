import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SecondaryCardList from ".";
import BodyTest from '../../../../public/assets/images/bodytest.svg';
import CardiacTest from '../../../../public/assets/images/cardiac.svg'
import StressTest from '../../../../public/assets/images/stress.svg'

export default {
  title: "Organisms/SecondaryCardList",
  component: SecondaryCardList,
} as ComponentMeta<typeof SecondaryCardList>;

const Template: ComponentStory<typeof SecondaryCardList> = (props) => (
  <SecondaryCardList {...props} />
);

export const SecondaryCard = () => (
    <SecondaryCardList variant="square" src={[BodyTest, CardiacTest, StressTest]} title={['Full Body Checkup', 'Cardiac Risk Assessment', 'Stress Assessment']}/>
);
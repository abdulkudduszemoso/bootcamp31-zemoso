import React from "react";
import { ComponentMeta } from "@storybook/react";
import Jumbotron from ".";

export default {
  title: "Molecules/Jumbotron",
  component: Jumbotron,
} as ComponentMeta<typeof Jumbotron>;

export const _Jumbotron = () => <Jumbotron />;

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OrderPlaced from "./index";

export default {
  title: "Pages/OrderPlaced",
  component: OrderPlaced,
} as ComponentMeta<typeof OrderPlaced>;

const Template: ComponentStory<typeof OrderPlaced> = () => (
  <OrderPlaced />
);

export const orderPlacedPage = () => <OrderPlaced />;
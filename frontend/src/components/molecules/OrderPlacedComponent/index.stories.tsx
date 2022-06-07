import React from "react";
import { ComponentMeta } from "@storybook/react";
import OrderPlaced from "./index";

export default {
  title: "Molecules/OrderPlaced",
  component: OrderPlaced,
} as ComponentMeta<typeof OrderPlaced>;

export const _OrderPlaced = () => <OrderPlaced />;
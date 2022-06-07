import React from "react";
import { ComponentMeta } from "@storybook/react";
import TestimonialCard from ".";

export default {
  title: "Molecules/TestimonialCard",
  component: TestimonialCard,
} as ComponentMeta<typeof TestimonialCard>;

export const Testimonial = () => <TestimonialCard />;

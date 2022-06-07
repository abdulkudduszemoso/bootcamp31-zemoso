import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchBar, { SearchBarProps } from ".";

export default {
  title: "Molecules/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = ({
  placeholder,
}: SearchBarProps) => <SearchBar placeholder="Search for lab test, packages" />;

export const InputSearchBar = Template.bind({});

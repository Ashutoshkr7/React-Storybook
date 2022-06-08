import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./index";

const HeaderComponent = {
  title: "organism/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args: any) => {
  return <Header {...args} />;
};
Template.args = {
  //   url: "../assets/Blinklist_Logo.png",
  url: "../../assets/Image/Logo/Blinklist_Logo.png",
  name: "Blinkist",
};

export default HeaderComponent;

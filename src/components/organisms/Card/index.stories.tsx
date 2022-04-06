import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from "./index";
import image from "../../../assets/Image/Book_Image/book.png"
// import { Card } from "@material-ui/core";

const CardComponent =  {
    title: "organisms/Card",
    component: Card,
} as ComponentMeta<typeof Card>;

export const Template: ComponentStory<typeof Card> = (args) => <Card{...args}/>;

Template.args = {
    imageURL: image,
    bookName: "Beyond Entrepreneurship 2.0",
    author: "Jim Collins & Bill Lazier"
}

export default CardComponent;
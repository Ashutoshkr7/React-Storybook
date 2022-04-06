import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookAuthor from './index';
const BookAuthorComponent = {
    title: "atoms/BookAuthor",
    component: BookAuthor,
} as ComponentMeta<typeof BookAuthor>;

export const Template: ComponentStory<typeof BookAuthor> = (args) => <BookAuthor{...args} />;
Template.args = {
    bookAuthor : "Jim Collins & Bill Lazier"
}

export default BookAuthorComponent;
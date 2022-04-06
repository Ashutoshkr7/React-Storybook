import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookName from './index';
const BookNameComponent = {
    title: "atoms/BookName",
    component: BookName,
} as ComponentMeta<typeof BookName>;

export const Template: ComponentStory<typeof BookName> = (args) => <BookName{...args} />;
Template.args = {
    bookName : "Beyond Entrepreneurship 2.0"
}
export default BookNameComponent;
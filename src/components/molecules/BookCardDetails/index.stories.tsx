import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookCardDetails from './index';
const DetailComponent = {
    title: "molecules/BookCardDetails",
    component: BookCardDetails,
} as ComponentMeta<typeof BookCardDetails>;

export const Template: ComponentStory<typeof BookCardDetails> = (args) => <BookCardDetails{...args} />;
Template.args = {
    author : "Jim Collins & Bill Lazier"
}
export default DetailComponent;
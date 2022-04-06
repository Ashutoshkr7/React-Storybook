import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from './index';
import image from '../../../../assets/Image/Book_Image/book.png';
const CardCoverComponent = {
    title: "atoms/Image/image-book-cover",
    component: Image,
} as ComponentMeta<typeof Image>;

export const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;
Template.args = {
    imageURL: image,
    height: 400,
    width: 400
}
export default CardCoverComponent;
import {ComponentStory,ComponentMeta} from '@storybook/react'

import TailwindButton from "../TailwindButton";

export default {
  title:'components/tailwind/button',
  component: TailwindButton,
  argTypes: {
    onClick: () => console.log('clicked')
  }
} as ComponentMeta<typeof TailwindButton>

const Template:ComponentStory<typeof TailwindButton> = (args) => <TailwindButton {...args}/>

export const BaseButton = Template.bind({})
BaseButton.args = {
  label:'Base',
}
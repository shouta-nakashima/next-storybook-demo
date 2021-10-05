import React from 'react'
import {ComponentStory,ComponentMeta} from '@storybook/react'

import SampleButton from "../SampleButton";

export default {
  title:'components/sample/button',
  component:SampleButton,
  argTypes: {
    bgc: { control: 'color' },
  }
} as ComponentMeta<typeof SampleButton>

const Template: ComponentStory<typeof SampleButton> = (args) => <SampleButton {...args}/>

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  label:'Sample'
}

export const HelloButton = Template.bind({})
HelloButton.args = {
  label : 'HELLO',
  bgc : 'red'
}
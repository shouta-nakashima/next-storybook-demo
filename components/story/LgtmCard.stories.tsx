import React from 'react'
import {ComponentStory,ComponentMeta} from '@storybook/react'

import LgtmCard from "../LgtmCard";

export default {
  title: 'components/sample/cards',
  component:LgtmCard,
} as ComponentMeta<typeof LgtmCard>

const Template:ComponentStory<typeof LgtmCard> = (args) => <LgtmCard {...args}/>

export const Base = Template.bind({})
Base.args = {}
import {withDesign} from 'storybook-addon-designs'
import { Button } from "../../stories/Button";
import {ComponentStory,ComponentMeta} from '@storybook/react'

export default {
  title:'sample/figma',
  component:Button,
  decorators:[withDesign()],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

const Template:ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({});

Primary.args = {
  label:'Hello'
}
Primary.parameters = {
  design: {
    type:'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
  }
}
import Modal from './component';

export default {
    title: 'Modal',
    component: Modal,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
};

const Button = ({onClick}) => <button style={{ cursor: "pointer",  }} onClick={ onClick }>Button</button>
const ExampleModal = () => <div>Modal</div>


const Template = (args) => <Modal 
    activator={({setShow}) => <Button onClick={ () => setShow(true)} />} 
    component={() => <ExampleModal /> } 
    {...args} 
/>;

export const ClosedModal = Template.bind({});
export const OpenModal =  Template.bind({});


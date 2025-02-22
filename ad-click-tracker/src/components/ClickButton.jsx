import { useClick } from '../context/ClickContext'

const ClickButton = () => {
    const { addClick } = useClick();
    return <button onClick={addClick}>Click Me!</button>;
};

export default ClickButton;
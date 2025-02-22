import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../features/clickSlice';

const ClickButton = () => {
  const dispatch = useDispatch();
  const clickCount = useSelector((state) => state.clicks.clicks);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Click Me!</button>
      <p>Total Clicks: {clickCount}</p>
    </div>
  );
};

export default ClickButton;
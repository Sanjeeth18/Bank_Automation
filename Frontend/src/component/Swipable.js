import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const SwipeableComponent = ({ children, targetPage, previousPage }) => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => previousPage && navigate(previousPage),
    onSwipedRight: () => targetPage && navigate(targetPage),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SwipeableComponent;

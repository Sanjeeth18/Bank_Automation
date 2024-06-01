import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const SwipeableComponent = ({ children, targetPage, previousPage }) => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate(previousPage),  
    onSwipedRight: () => navigate(targetPage),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...handlers}>
      {children}
    </div>
  );
};

export default SwipeableComponent;

import React from 'react';
import { Link, type LinkProps, useLocation, useNavigate } from 'react-router-dom';
import { runViewTransition } from '../utils/viewTransitions';

const TransitionLink: React.FC<LinkProps> = ({
  to,
  onClick,
  target,
  replace,
  state,
  ...rest
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      target === '_blank' ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    const targetPath = typeof to === 'string' ? to : to.pathname || '/';
    if (targetPath === location.pathname && typeof to === 'string' && !to.includes('#')) {
      return;
    }

    event.preventDefault();
    runViewTransition(() => {
      navigate(to, { replace, state });
    });
  };

  return <Link to={to} target={target} replace={replace} state={state} onClick={handleClick} {...rest} />;
};

export default TransitionLink;

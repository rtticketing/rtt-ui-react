import React, { useEffect, useRef } from 'react';

interface ThemeProps {
  vars: {
    [cssProperty: string]: string;
  };

  children: (props: ThemeProps) => JSX.Element;
}

const updateCSSVars = (target: HTMLDivElement, vars: { [key: string]: string }) => {
  Object.entries(vars).forEach(([prop, value]) => {
    target.style.setProperty(prop, value);
  });
};

export const Theme = (props: ThemeProps) => {
  const styleWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (styleWrapper && styleWrapper.current) {
      updateCSSVars(styleWrapper.current, props.vars);
    }
  }, [props.vars]);

  return <div ref={styleWrapper}>{props.children(props)}</div>;
};

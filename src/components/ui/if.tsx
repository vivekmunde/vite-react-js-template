import React, { useContext } from 'react';

const IfContext = React.createContext<boolean>(false);

const IfTrue: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = useContext(IfContext);

  return value ? <React.Fragment>{children}</React.Fragment> : null;
};
IfTrue.displayName = 'If.True';

const IfFalse: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = !useContext(IfContext);

  return value ? <React.Fragment>{children}</React.Fragment> : null;
};
IfFalse.displayName = 'If.False';

class If extends React.Component<{
  children: React.ReactNode;
  condition: boolean;
}> {
  static True: typeof IfTrue;
  static False: typeof IfFalse;

  render() {
    const { children, condition } = this.props;

    return (
      <IfContext.Provider value={condition}>{children}</IfContext.Provider>
    );
  }
}

If.True = IfTrue;

If.False = IfFalse;

export { If };

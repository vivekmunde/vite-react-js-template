import { createContext } from 'react';

type TContext = string | undefined;

const DataTestIdContext = createContext<TContext>(undefined);

export { DataTestIdContext };

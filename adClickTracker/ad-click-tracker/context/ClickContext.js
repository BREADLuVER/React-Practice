import {createContext, useContext, useState} from 'react';

const ClickContext = createContext(undefined);

export const ClickProvider = ({children}) => {
    const [clicks, setClicks] = useState(0);

    const addClick = () => setClicks((prev) => prev+1);

    return (
        <ClickContext.ClickProvider values={{clicks, addClick}}>
            {children}
        </ClickContext.ClickProvider>
    );
};

export const useClick = () => {
    const context = useContext(ClickContext);
    if (!context) {
        throw new Error('No context')
    }
    return context;
}
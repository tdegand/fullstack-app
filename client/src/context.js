import react from 'react';

const courseContext = react.createContext();

export const coursesProvider = courseContext.Provider;
export const coursesConsumer = courseContext.Consumer;
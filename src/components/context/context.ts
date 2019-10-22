import React from 'react';
import { ILayoutContext } from '../../types/layout';

export default React.createContext<ILayoutContext>({ isMenuVisible: false, breakpoint: "large", toggleMenu: () => ({}) });
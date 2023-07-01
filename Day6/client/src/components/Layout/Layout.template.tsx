import React, {PropsWithChildren} from 'react'

import { useTheme } from '../../context/ThemeProvider_new';

import './Layout.style.css';


export const Layout: React.FC<PropsWithChildren> = (props) => {
const {darkMode} = useTheme()
    return (
    <div className={`layout ${darkMode ? "layout-dark":"layout-light"}`}>{props.children}</div>
  )
}

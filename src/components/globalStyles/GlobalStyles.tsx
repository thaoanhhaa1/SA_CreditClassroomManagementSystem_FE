import { ReactNode } from 'react';
import './styles.scss';

const GlobalStyles = ({ children }: { children: ReactNode }) => {
    return children;
};

GlobalStyles.propTypes = {};

export default GlobalStyles;

import '@fontsource/inter';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store } from './app/store';
import GlobalStyles from './components/globalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <React.StrictMode>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </React.StrictMode>
    </Provider>,
);

import { ClickProvider } from "../context/ClickContext";
import '../src/app/globals.css';

function MyApp({Component, pageProps}) {
    return (
        <ClickProvider>
            <Component {...pageProps} />
        </ClickProvider>
    )
}

export default MyApp;
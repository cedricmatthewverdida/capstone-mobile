import { IonApp, setupIonicReact } from "@ionic/react";
import { MoralisProvider } from "react-moralis";
import Router from "./router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
setupIonicReact();
const App: React.FC = () => (
  <MoralisProvider
    serverUrl="https://7oebgpnp43rq.usemoralis.com:2053/server"
    appId="36YXbnPgUbRpv3AeiFOlMPVGum3bZQekBJbKLi6H"
  >
    <IonApp>
      <Router />
    </IonApp>
  </MoralisProvider>
);

export default App;

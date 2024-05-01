// we use the createContext function from React to create a new context. We then export this context so that we can use it in other components. We also define the default values for the context. These default values are used when a component uses the context but is not wrapped in a provider. In this case, the default values will be used. The default values are as follows:

import {createContext} from "react";

const audiobookContext = createContext({
    // when you visit page you dosen't listen any audiobook that why we set currentAudiobook to null
    currentAudiobook: null,
    setCurrentAudiobook: (currentAudiobook) => {},
    soundPlayed: null,
    setSoundPlayed: () => {},
    isPaused: null,
    setIsPaused: () => {},
});

export default audiobookContext;

import '../styles/global.css'
import {ChallengeContext, ChallengeProvider} from '../contexts/ChallengeContexts'
import { CountdownProvider } from '../contexts/CountdownContext'
function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
        <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp

// import Header from '../components/organisms/Header'
import HomePage from '../components/pages/Homepage'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />,
  // <Header/>,
  <HomePage/>
}
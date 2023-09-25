import { Component } from 'react';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import SecondPage from './components/second-page/second-page';
import Footer from './components/footer/footer';
import Quality from './components/quality-page/quality';
import Information from './components/information/information';
import Comand from './components/comand/comand';
import News from './pages/news/news';

class App extends Component {
  render() {
    return <>
      <Header />
      <Intro />
      <SecondPage />
      <Quality/>
      <Information/>
      <Comand/>
      <News/>
      <Footer />
    </>
  }
}

export default App;

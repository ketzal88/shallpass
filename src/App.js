import { Container } from 'react-bootstrap';
import './App.scss';
import { logoPassFullColor } from './assets';
import { Header } from './components/Header/Header';
import { HeroText } from './components/HeroText/HeroText';
import { Rubros } from './components/Rubros/Rubros';
import { Tips } from './components/Tips/Tips';
import { rubros, textHero, texts } from './data/data';

function App() {
  return (
    <Container  className="App">
      <Header logo={ logoPassFullColor } />
      <Rubros data={ rubros } />
      <HeroText data={ textHero }/>
      <Tips texts={texts}/>
    </Container>
  );
}

export default App;

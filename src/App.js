import { Container } from 'react-bootstrap';
import './App.scss';
import { logoPassFullColor } from './assets';
import { Footer } from './components/Footer/Footer';
import { LandingForm } from './components/Form/LandingForm';
import { Header } from './components/Header/Header';
import { HeroText } from './components/HeroText/HeroText';
import { PorqueElegirnos } from './components/PorqueElegirnos/PorqueElegirnos';
import { Quote } from './components/Quote/Quote';
import { Rubros } from './components/Rubros/Rubros';
import { Tips } from './components/Tips/Tips';
import { quote, rubros, textHero, texts } from './data/data';

function App() {
  return (
    <Container  className="App">
      <Header logo={ logoPassFullColor } />
      <Rubros data={ rubros } />
      <HeroText data={ textHero }/>
      <Tips texts={texts}/>
      <PorqueElegirnos />
      <Quote data={ quote }/>
      <LandingForm />
      <Footer />
    </Container>
  );
}

export default App;

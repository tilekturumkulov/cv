import './style/style.scss';
import $ from 'jquery';
import Header from './components/Header/Header'
import Greeting from './components/Greeting/Greeting'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Project from './components/Projects/Projects'

function App() {
  const scroll = () => {
    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    })
}
  return (
    <div className="App">
      <Header scroll={scroll}/>
      <div className="main">
        <Greeting />
        <About />
        <Skills />
        <Project/>
        <Form />
      </div>
      <Footer scroll={scroll}/>
    </div>
  );
}

export default App;

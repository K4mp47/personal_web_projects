import './App.css';
import * as Component from './Components/Components.js';
function App() {
  return (
    <div className="App">
      <Component.DivBar>

      </Component.DivBar>
      <Component.DivBackground>

      </Component.DivBackground>
      <Component.DivCentered>
        <Component.DivPresentation>
          <Component.DivFirstLook>
            <Component.MainTitle>
            WELCOME&nbsp;&nbsp;&nbsp;<br/>USER
            </Component.MainTitle>
            <Component.Quote>
            "Programs must be written for people to read, and only incidentally for machines to execute." 
            <br/>- Harold Abelson and Gerald Jay Sussman
            </Component.Quote>
            <Component.Quote>
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." 
            <br/>- Martin Fowler
            </Component.Quote>
          </Component.DivFirstLook>
          
        </Component.DivPresentation>
        <Component.DivMainContent>
          <Component.ImageContainer>
          <Component.ImageCreator>
            <Component.Filter>
              
            </Component.Filter>
          </Component.ImageCreator>
          </Component.ImageContainer>
          <Component.DivColumn>

          </Component.DivColumn>
          <Component.DivDescription>
            <Component.PersonalDescr>
            Hello, my name is Alberto, 
            and I am a beginner web developer
            with a passion for creating engaging 
            and dynamic websites. I am dedicated
            to staying up-to-date with the latest
            technologies and techniques to provide 
            the best possible user experience for my 
            clients. My skills include HTML, CSS, JavaScript,
            and React, and I am constantly expanding my knowledge 
            to provide the most comprehensive solutions for 
            any project.<br/>
            If you are looking for a skilled web developer who is eager to learn and grow, 
            I would love to work with you!
            </Component.PersonalDescr>
            <Component.DivAbilities>
              Html<br/>
              <Component.ContainerAbility>
                <Component.SpanN>
                  <Component.SpanY>
                  </Component.SpanY>
                </Component.SpanN>&nbsp;
              </Component.ContainerAbility>
              Css<br/>
              <Component.ContainerAbility>
                <Component.SpanN>
                  <Component.SpanY>
                  </Component.SpanY>
                </Component.SpanN>&nbsp;
              </Component.ContainerAbility>
              Javascript<br/>
              <Component.ContainerAbility>
                <Component.SpanN>
                  <Component.SpanY>
                  </Component.SpanY>
                </Component.SpanN>&nbsp;
              </Component.ContainerAbility>
              React<br/>
              <Component.ContainerAbility>
                <Component.SpanN>
                  <Component.SpanY>
                  </Component.SpanY>
                </Component.SpanN>&nbsp;
              </Component.ContainerAbility>
            </Component.DivAbilities>
          </Component.DivDescription>
        </Component.DivMainContent>
      </Component.DivCentered>
    </div>
  );
}

export default App;

import { useState } from 'react';
// import { useState, useEffect } from 'react';

const helloTextEn = 'Hello';
const helloTextDe = 'Hallo';
const helloTextEs = 'Hola';
const helloTextFr = 'Bonjour';

function Greetings(props) {
  const { lang } = props;
  // const [text, setText] = useState(helloTextEn);
  // useEffect(()=>{
  //   if (lang === 'fr') {
  //     setText(helloTextFr);
  //   } else if (lang === 'de') {
  //     setText(helloTextDe);
  //   } else if (lang === 'es') {
  //     setText(helloTextEs);
  //   } else {
  //     setText(helloTextEn);
  //   }
  // },[lang])

  const [text] = useState(()=>{
    if (lang === 'fr') {
         return helloTextFr;
        } else if (lang === 'de') {
          return helloTextDe;
        } else if (lang === 'es') {
          return helloTextEs;
        } else {
          return helloTextEn;
        }
  });

  return (
    <div>
      <div>
        {text}
        <span> {props.children}</span>
      </div>
    </div>
  );
}

export default Greetings;

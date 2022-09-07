
import { useState } from 'react';
import './App.css';

const DB = [
  {
    id: 1,
    content: "menu01",
    link: "/",
    submenu: [
      { content: "smenu011", link: "/" },
      { content: "smenu012", link: "/" },
      { content: "smenu013", link: "/" }
    ]
  },
  {
    id: 2,
    content: "menu02",
    link: "/",
    submenu: [
      { content: "smenu021", link: "/" },
      { content: "smenu022", link: "/" },
      { content: "smenu023", link: "/" }
    ]
  }, {
    id: 3,
    content: "menu03",
    link: "/",
    submenu: [
      { content: "smenu031", link: "/" },
      { content: "smenu032", link: "/" },
      { content: "smenu033", link: "/" }
    ]
  }

]
function App() {
  const [CB, setCB] = useState('');
  const [TG, setTG] = useState(false);

  return (
    <header>
      <h1 className={CB} onClick={() => setCB('on')}>BRAND</h1>
      <h2 className={`${TG ? 'on' : ''}`}  >Toggle Class</h2>
      <button onClick={() => setTG(!TG)}>class Toggle</button>

      <nav className='Gnb'>
        <ul>
          {
            DB.map((it, idx) => <li key={idx}>
              <a href="{it.link}">{it.content}</a>
              <ul className='smenu'>
                {
                  it.submenu.map((smenu, idx) =>
                    <li key={idx}>
                      <a href="{smenu.link}">{smenu.content}</a>
                    </li>)
                }

                {/* <li>
              <a href="">
                {it.submenu[0].content}
              </a>
            </li> */}
              </ul>
            </li>)
          }
        </ul>
      </nav>
    </header >
  );
}

export default App;

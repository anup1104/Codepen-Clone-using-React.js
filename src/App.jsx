import React, {useState, useEffect} from 'react'
import Editors from './components/Editors'
import useLocalStorage from './hooks/useLocalStorage';
function App() {



  const [html, setHtml] = useLocalStorage('html','');
  const [css, setcss] = useLocalStorage('css','');
  const [js, setjs] = useLocalStorage('js','');
  const [srcDoc, setsrcDoc] = useState('');
  const [themeSelected, setThemeSelected] = useState('') 
  useEffect(()=>{
   const timeout = setTimeout(()=>{
      setsrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `)
    },500)
    return ()=> clearTimeout(timeout)
  },[html,css,js])
  // const srcDoc = `
  // <html>
  // <body>${html}</body>
  // <style>${css}</style>
  // <script>${js}</script>
  // </html>
  // `
  // const themeSelected = 'material';
  return (
    <div>
      <nav className="bg-violet-500 p-4 shadow-md">
        <ul className="flex space-x-6 items-center">
          {/* Tabs */}
          <li>
            <a href="#home" className="text-white font-semibold hover:text-gray-200">Home</a>
          </li>
          <li>
            <a href="#about" className="text-white font-semibold hover:text-gray-200">About Us</a>
          </li>
          <li>
            <a href="#blogs" className="text-white font-semibold hover:text-gray-200">Blogs</a>
          </li>

          {/* Spacer for alignment */}
          <li className="ml-auto flex space-x-4">
            <button onClick={() => setThemeSelected('material')} className="text-white hover:text-gray-200">
              Material
            </button>
            <button onClick={() => setThemeSelected('twilight')} className="text-white hover:text-gray-200">
              Twilight
            </button>
            <button onClick={() => setThemeSelected('night')} className="text-white hover:text-gray-200">
              Night
            </button>
            <button onClick={() => setThemeSelected('ambiance')} className="text-white hover:text-gray-200">
              Ambiance
            </button>
            <button onClick={() => setThemeSelected('dracula')} className="text-white hover:text-gray-200">
              Dracula
            </button>
          </li>
        </ul>
      </nav>
      <div className='pane top-pane'>
          <Editors language="xml" displayName="HTML" value={html} onChange={setHtml} themeSelected={themeSelected} />
          <Editors language="css" displayName="CSS" value={css} onChange={setcss} themeSelected={themeSelected}/>
          <Editors language="javascript" displayName="JS" value={js} onChange={setjs} themeSelected={themeSelected}/>
      </div>

      <div className='pane bg-cyan-100 '>
        <iframe 
        src=""
        frameborder="0" 
        title='output' 
        sandbox='allow-scripts' 
        width='100%' 
        height='100%'
        srcDoc = {srcDoc}
        >

        </iframe>
      </div>

    </div>
  )
}

export default App
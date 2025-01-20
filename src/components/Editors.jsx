import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/twilight.css'
import 'codemirror/theme/night.css'
import 'codemirror/theme/ambiance.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2' 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCompressAlt, faExpandAlt} from '@fortawesome'
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

function Editors(props) {
    const { displayName, value, language, onChange, themeSelected } = props;
    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    const [open, setOpen] = useState(true);

  return (
    <div className={`editor-container ${open===true ? '' : 'collapsed'}`}>
        <div className='editor-title'>
            {displayName}
            <button className='btn' onClick={()=>setOpen((prev)=>!prev)}>
                {open===true? <FontAwesomeIcon icon={faCompressAlt}/> : <FontAwesomeIcon icon={faExpandAlt}/>}
            </button>
        </div>      
        <ControlledEditor
        onBeforeChange={handleChange}
            value={value}
            className='code-mirror-wrapper'
            options={{
                lineWrapping:true,
                line:true,
                mode:language,
                theme:themeSelected,
                lineNumbers:true
            }}
            />
    </div>
  )
}

export default Editors
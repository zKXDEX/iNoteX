import {useState} from 'react';
import settingsJson from '../../../../../resources/settings.json';
// WINDOWS STYLE
import { VscChromeMaximize } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";

// LINUX STYLE
import { IoMdCloseCircle } from "react-icons/io";
import { FiMaximize } from "react-icons/fi";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";

export const CustomizeTitleBar = () => {

  const [titlebarStyle, setTitlebarStyle] = useState(settingsJson.titlebar.style)

  const handleStyleChange = (style) => {
    setTitlebarStyle(style)
    settingsJson.titlebar.style = style
  }

  return (
    <div className="flex justify-start flex-wrap gap-3 mt-5 h-auto">
      <button className="customizeButton mac" onClick={() => handleStyleChange('mac')}>
        <h1>MacOS style</h1>
        <div className="sectionbuttons gap-2">
          <button className="w-5 h-5 rounded-full bg-red-500/100" datatype='close' id='closebtn' />
          <button className="btnMinimize w-5 h-5 rounded-full bg-yellow-500/100" datatype='minimize' id='minimizebtn' />
          <button className="btnMaximize w-5 h-5 rounded-full bg-green-500/100" datatype='maximize' id='maximizebtn' />
        </div>
      </button>
      <button className="customizeButton win" onClick={() => handleStyleChange('win')}>
        <h1>Windows style</h1>
        <div className="sectionbuttons gap-2">
          <button className="w-5 h-5" datatype='close' id='closebtn'>
            <IoCloseOutline className="w-5 h-5"/>
          </button>
          <button className="btnMaximize w-5 h-5 " datatype='maximize' id='maximizebtn'>
            <VscChromeMaximize className="w-5 h-5"/>
          </button>
          <button className="btnMinimize w-5 h-5" datatype='minimize' id='minimizebtn' >
            <VscChromeMinimize className="w-5 h-5"/>
          </button>

        </div>
      </button>
      <button className="customizeButton lin" onClick={() => handleStyleChange('lin')}>
        <h1>Linux Style</h1>
        <div className="sectionbuttons gap-2">
          <button className="w-5 h-5" datatype='close' id='closebtn'>
            <IoMdCloseCircle className="w-5 h-5"/>
          </button>
          <button className="btnMaximize w-5 h-5 " datatype='maximize' id='maximizebtn'>
            <FiMaximize className="w-5 h-5"/>
          </button>
          <button className="btnMinimize w-5 h-5" datatype='minimize' id='minimizebtn' >
            <VscChromeMinimize className="w-5 h-5"/>
          </button>

        </div>
      </button>
    </div>
  )

}
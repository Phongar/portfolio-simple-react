import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../Utils/useLocalStorage";


import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";


const BtnDakMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', 'Light');//-хук useLocalStorage

    const btnRef = useRef(null);

    useEffect(() => {


        if (darkMode === 'dark') {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active');
        } else {
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active');
        }


    },[darkMode]);


    const toggleDarkMode =() => {
        setDarkMode((currentValue) => {
            return currentValue === 'Light' ? 'dark' : 'Light';
        })  
    }


    return (  

    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>

        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />

    </button>

    );
}
 
export default BtnDakMode;



// https://webcademy.ru/blog/949/ - useLocalStorage
 // const [darkMode, setDarkMode] = useState('Light'); - это хук useState
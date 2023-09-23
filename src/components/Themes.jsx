import React, { useEffect, useState } from "react";
import { themes } from '../data'
import ThemesItem from "./ThemesItem";
import { FaCog } from "react-icons/fa"
import { BsSun, BsMoon } from "react-icons/bs"
import './themes.css'
const getStorageColor = localStorage.getItem('color')
const getStorageTheme = localStorage.getItem('theme')


const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor ? getStorageColor : '');
    const [theme, setTheme] = useState(getStorageTheme ? getStorageTheme : 'light-theme')

    const changeColor = (color) => {
        setColor(color)
    }

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme')
        }
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color)
        localStorage.setItem('color', color)
    }, [color])

    useEffect(() => {
        document.documentElement.className = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <>
            <div className={showSwitcher ? 'style__switcher show-switcher' : 'style__switcher'}>
                <div
                    className="style__switcher-toggler"
                    onClick={() => setShowSwitcher(!showSwitcher)}
                >
                    <FaCog />
                </div>

                <div className="theme__toggler" onClick={toggleTheme}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>

                <h3 className="style__switcher-title">Style Switcher</h3>
                <div className="style__switcher-items">
                    {themes.map((theme, index) => {
                        return (
                            <ThemesItem key={index} {...theme} changeColor={changeColor} />
                        )
                    })}
                </div>

                <div
                    className="style__switcher-close"
                    onClick={() => setShowSwitcher(!showSwitcher)}
                >
                    &times;
                </div>
            </div>
        </>
    )
}

export default Themes
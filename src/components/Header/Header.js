import React from 'react'
import { Link } from 'react-router-dom'
import menus from '../../config/routerConfig/menus'

const Header = () => {
    return (
        <div>
            {menus.map((item, i) => {
                return <Link key={i} to={item.key}>{item.title}</Link>
            })} 
        </div>
    )
}

export default Header
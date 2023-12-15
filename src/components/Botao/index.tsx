import React, {ReactNode} from 'react'
import style from './botao.module.scss'

interface BotaoProps{
    children?: ReactNode
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void
}

function Botao({onClick, type, children}:BotaoProps){
return(
    <button type = {type} onClick={onClick} className={style.botao}>
        {children}
    </button>
    )
}

export default Botao


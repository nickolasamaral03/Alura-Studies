import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundo } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props{
selecionado: Itarefa | undefined
finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props){
     const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundo(selecionado.tempo))
        }
    }, [selecionado])

    function Regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1)
                return Regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolhe um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
            <Relogio
            tempo={tempo}
            />
            </div>
            <Botao onClick={() => Regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}
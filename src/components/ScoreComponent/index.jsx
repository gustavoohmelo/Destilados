/* eslint-disable react/prop-types */
import styles from './ScoreComponent.module.css'

function ScoreComponent({ jogo }) {
    return (
        <h3 className={styles.placar}>
            <div className={styles.mandante_box}>
                
                <img src={`/bandeiras/${jogo.sigla_mandante.toLowerCase()}.png`}/>
            </div>
            <div className={styles.placar_box}>
                
                
                
            </div>
            <div className={styles.visitante_box}>
                <img src={`/bandeiras/${jogo.sigla_visitante.toLowerCase()}.png`}/>
            </div>

        </h3>
    )
}

export default ScoreComponent

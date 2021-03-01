import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gustavobenedito64a.png" alt="imagem de perfil github"/>  
            <div>
                <strong>Gustavo Benedito</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}
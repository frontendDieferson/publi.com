import { signIn, useSession } from 'next-auth/react'
import styles from './styles.module.scss'


interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId } : SubscribeButtonProps) {
    const { data: session } = useSession()

    function handlesubscribe() {
        if (!session) {
            signIn('google')
            return;
        }

        

    }

    return (
        <button
         type="button"
         className={styles.subscribebutton}
         onClick={handlesubscribe}
        >
         Inscreva-se agora
        </button>
    )
}
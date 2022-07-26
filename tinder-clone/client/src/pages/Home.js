import Nav from '../components/Nav'
import AuthModal from '../components/AuthModal'
import { useState} from 'react'
import {useCookies} from 'react-cookie'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const authToken = cookies.AuthToken

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="overay">
            <Nav 
                minimal={false} 
                authToken={authToken} 
                setShowModal={setShowModal} 
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
            <div className="home">
                <h1 className="primary-title">Swipe Right®</h1> 
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout': 'Create Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    )
}
export default Home
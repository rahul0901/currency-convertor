import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorNotFoundPage = () => {

    const [count, setCountdown] = useState(3);

    const route = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevVal) => prevVal - 1)
        }, 1000);

        setTimeout(() => {
            clearInterval(timer)
            route('/')
        }, 3000);

        return () => {
            clearInterval(timer);
        }

    }, [count])

    return (
        <>
            <div>ErrorNotFoundPage</div>
            <h1>Page not found redirecting you to homepage in {count} seconds..</h1>
        </>
    )
}

export default ErrorNotFoundPage;
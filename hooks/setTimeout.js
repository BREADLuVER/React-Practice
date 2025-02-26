import { useEffect, useRef } from "react";

function useTimeout(callback, delay) {
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current=callback
    }, [callback])

    useEffect(() => {
        if (delay === null || delay === undefined) return

        const handler = () => savedCallback.current()
        const id = setTimeout(handler, delay)

        return () => clearTimeout(id)
    }, [delay])
}
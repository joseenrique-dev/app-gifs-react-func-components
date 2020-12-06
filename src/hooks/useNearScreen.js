import { useState, useEffect, useRef } from 'react';
export default function useNearScreen({distance = '100px'}={}){
    const [ isNearScreen, setShow ] = useState(false);
    const fromRef = useRef();
    

    useEffect(() => {
        let observer

        const onChange = ( entries, observerParam ) =>{
            const el = entries[0];
            if( el.isIntersecting ){
                setShow(true);
                observerParam.disconnect();
            }
        }
        observer = new IntersectionObserver(onChange,{
            rootMargin: distance
        });   
        
        observer.observe(fromRef.current)

        return () =>observer.disconnect();
    },[])

    return {isNearScreen, fromRef};
}
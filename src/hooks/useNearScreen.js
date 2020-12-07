import { useState, useEffect, useRef } from 'react';
export default function useNearScreen({distance = '100px', externalRef, once= true }={}){
    const [ isNearScreen, setShow ] = useState(false);
    const fromRef = useRef();
    

    useEffect(() => {
        let observer
        const element = externalRef ? externalRef.current : fromRef.current
        if (!element) return

        const onChange = ( entries, observerParam ) =>{
            const el = entries[0];
            if( el.isIntersecting ){
                setShow(true);
                once && observerParam.disconnect();
            }else{
                !once && setShow(false);
            }
        }
        observer = new IntersectionObserver(onChange,{
            rootMargin: distance
        });   
        
        observer.observe(element)

        return () =>observer && observer.disconnect();
    },[distance, externalRef, once])

    return {isNearScreen, fromRef};
}
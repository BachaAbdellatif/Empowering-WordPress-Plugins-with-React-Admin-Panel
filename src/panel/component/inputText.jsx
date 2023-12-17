import { TextControl } from '@wordpress/components';
import { useContext } from 'react';
import { dataContext } from './datacontext';

const ArInputText = ( {name} ) => {
       
    const [dashOptions, setDashoptions] = useContext(dataContext)
        
    return <TextControl 
            value = {dashOptions[name]}
            onChange={ (value) =>  setDashoptions( {
                ...dashOptions,
                [name] : value
            })
                
            }  
    />
}
export default ArInputText
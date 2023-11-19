import { TextareaControl } from '@wordpress/components';
import { useContext } from 'react';
import { dataContext } from './datacontext';

const ArTextarea = ( {name} ) => {
       
    const [dashOptions, setDashoptions] = useContext(dataContext)
        
    return <TextareaControl
            rows={2}
            value={dashOptions[name]}
            onChange={ (value) => { setDashoptions( {
                ...dashOptions,
                [name] : value
                })
                }
            } 
        />
}
export default ArTextarea
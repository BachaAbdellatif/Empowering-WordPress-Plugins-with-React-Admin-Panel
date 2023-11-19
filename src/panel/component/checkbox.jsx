import { FormToggle } from '@wordpress/components';
import { useContext } from 'react';
import { dataContext } from './datacontext';

const ArCheckbox = ( {name} ) => {
       
    const [dashOptions, setDashoptions] = useContext(dataContext)
    
    return  <FormToggle
            checked={dashOptions[name]}
            onChange={ (value) => { setDashoptions( {
                ...dashOptions,
                [name] : value.target.checked
                })
                }
            }   
        />
}
export default ArCheckbox
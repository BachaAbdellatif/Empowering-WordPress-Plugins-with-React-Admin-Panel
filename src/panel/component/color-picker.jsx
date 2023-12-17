import { __ } from '@wordpress/i18n';
import { ColorPalette } from '@wordpress/components';
import { useContext } from 'react';
import { dataContext } from './datacontext';

const ArColorPicker = ( {name} ) => {
    const [dashOptions, setDashoptions] = useContext(dataContext)
    
    return <ColorPalette
                colors={ [
                    { name: 'red', color: '#f00' },
                    { name: 'white', color: '#fff' },
                    { name: 'blue', color: '#00f' },
                ] }
                value={dashOptions[name]}
                onChange={ (value) => { setDashoptions( {
                    ...dashOptions,
                    [name] : value
                    })
                    }}
                style={{width: "150px" }}
            />

}
export default ArColorPicker
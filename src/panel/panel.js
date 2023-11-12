import { useState } from "@wordpress/element"
import { PanelBody, PanelRow, Flex, FlexItem, FlexBlock, FormToggle } from '@wordpress/components';
import axios from "axios"

const ArPanel = () => {
    const restApiUrl = panelLocalizer.apiUrl + "/aroptions/v1/settings"
    const [saveOptions, setsaveoptions] = useState("Update Options")
    const [dashOptions, setDashoptions] = useState(panelLocalizer)
    console.log(dashOptions)
    const handelSubmit = (e) => {
        e.preventDefault()
        setsaveoptions("Updating...")
        axios.post(restApiUrl,
                dashOptions
            ).then((res) => {
                setsaveoptions("Update Options")
                console.log(res)
            }, {
                headers: {
                    'content-type': 'application/json',
                    'X-WP-NONCE': panelLocalizer.nonce
                }
            }).catch( (re) => {
                console.log(re)
            })
    }
    return <>

            <form id="panel-form" onSubmit={ e => handelSubmit(e)}>

            <PanelBody title="Ex Input" initialOpen={true}>
                <PanelRow>
                    <Flex
                        gap={2}
                        align="center"
                        justify="space-between"
                    >
                        <FlexItem >
                            <label>Name</label>
                        </FlexItem>
                        <FlexBlock >
                            <input 
                                type="text" 
                                name="name"
                                value={dashOptions.name}
                                onChange={ (e) => { setDashoptions( {
                                    ...dashOptions,
                                    name : e.target.value
                                }
                                )
                                    
                                }}  
                                />
                        </FlexBlock>
                    </Flex>
                </PanelRow>
                <PanelRow>
                    <Flex
                        gap={2}
                        align="center"
                        justify="space-between"
                    >
                        <FlexItem >
                            <label>Phone</label>
                        </FlexItem>
                        <FlexBlock >
                            <input 
                                type="text" 
                                name="phone" 
                                value={dashOptions.phone}
                                onChange={ (e) => { setDashoptions( {
                                            ...dashOptions,
                                            phone : e.target.value
                                        })
                                    }
                                }         
                            />
                        </FlexBlock>
                    </Flex>
                </PanelRow>
                <PanelRow>
                    <Flex
                    gap={2}
                    align="center"
                    justify="space-between"
                    >
                        <FlexItem >
                            <label>Email</label>
                        </FlexItem>
                        <FlexBlock >
                            <input 
                                type="text" 
                                name="email" 
                                value={dashOptions.email}
                                onChange={ (e) => { setDashoptions( {
                                    ...dashOptions,
                                    email : e.target.value
                                }
                                )
                                    
                                }} 
                                />
                        </FlexBlock>
                    </Flex>
                </PanelRow>
            </PanelBody>   

            <PanelBody title="Ex Checkbox" initialOpen={false}>
                <PanelRow>
                    <Flex
                        gap={2}
                        align="center"
                        justify="space-between"
                    >
                        <FlexItem >
                            <label>Eneable / Disable Option</label>
                        </FlexItem>
                        <FlexBlock >
                            <input 
                                    type="checkbox" 
                                    name="subscribe" 
                                    checked={dashOptions.subscribe}
                                    onChange={ (e) => { setDashoptions( {
                                                ...dashOptions,
                                                subscribe : e.target.checked
                                            })
                                        }
                                    }    
                                    
                                    /> 
                                    { dashOptions.subscribe ? "Enable " : "Disable" }
                        </FlexBlock>
                    </Flex>
                </PanelRow>
                <PanelRow>
                    <Flex
                        gap={2}
                        align="center"
                        justify="space-between"
                    >
                        <FlexItem >
                            <label>Eneable / Disable Option II</label>
                        </FlexItem>
                        <FlexBlock >
                                <FormToggle
                                    checked={dashOptions.updates}
                                    onChange={ (e) => { setDashoptions( {
                                        ...dashOptions,
                                        updates : e.target.checked
                                        })
                                        }
                                    }   
                                />
                        </FlexBlock>
                    </Flex>
                </PanelRow>
            </PanelBody>

            <PanelBody title="Ex Textarea" initialOpen={false}>
                <PanelRow>
                    <Flex
                        gap={2}
                        align="center"
                        justify="space-between"
                        >
                        <FlexItem >
                            <label>TextArea Option</label>
                        </FlexItem>
                        <FlexBlock >
                        <textarea 
                                    name="comments" 
                                    rows="4" 
                                    cols="50"
                                    value={dashOptions.comments}
                                    onChange={ (e) => { setDashoptions( {
                                                ...dashOptions,
                                                comments : e.target.value
                                            })
                                        }
                                    }  
                                    />
                        </FlexBlock>
                    </Flex>
                </PanelRow>
            </PanelBody>

            <PanelBody title="Ex Dropdown" initialOpen={false}>
                <PanelRow>
                    <Flex
                        gap={2}
                        align="center"
                        justify="space-between"
                        >
                        <FlexItem >
                            <label>Select Option</label>
                        </FlexItem>
                        <FlexBlock >
                                    <select >
                                        <option>option 1</option>
                                        <option>option 2</option>
                                        <option>option 3</option>
                                    </select>
                        </FlexBlock>
                    </Flex>
                </PanelRow>
            </PanelBody>

                <button type="submit" className="button primary">
                    {saveOptions}
                </button>
            </form> 
        </>
}
export default ArPanel
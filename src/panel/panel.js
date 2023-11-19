import { useState } from "@wordpress/element"
import { PanelBody, PanelRow, Flex, FlexItem, FlexBlock, FormToggle } from '@wordpress/components';
import axios from "axios"
import ArInputText from "./component/inputText";
import Archeckbox from "./component/checkbox";
import ArDropdown from "./component/dropdown";
import ArTextarea from "./component/textareaText";
import ArMediaUploader from "./component/media-upload";
import { dataContext } from './component/datacontext';

const ArPanel = () => {

    //---  Rout WP API Link
    const restApiUrl = panelLocalizer.apiUrl + "/aroptions/v1/settings"

    //---- state save Button
    const [saveOptions, setsaveoptions] = useState("Update Options")

    //----- state Panel options
    const [dashOptions, setDashoptions] = useState(panelLocalizer)

    //--------- Function handel save option
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
   
                <dataContext.Provider value={[dashOptions, setDashoptions]} >
                    <form id="panel-form" onSubmit={ e => handelSubmit(e)}>

                        <PanelBody title="Input" initialOpen={true}>
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
                                        <ArInputText name="name" />
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
                                        <ArInputText name="phone" />
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

                        <PanelBody title="Checkbox" initialOpen={false}>
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
                                        <Archeckbox name="subscribe" />
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
                                        <Archeckbox name="updates" />
                                    </FlexBlock>
                                </Flex>
                            </PanelRow>
                        </PanelBody>

                        <PanelBody title="Textarea" initialOpen={false}>
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
                                        <ArTextarea name="comments" />
                                    </FlexBlock>
                                </Flex>
                            </PanelRow>
                        </PanelBody>

                        <PanelBody title="Dropdown" initialOpen={false}>
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
                                        <ArDropdown 
                                            name="test_drop" 
                                            options={ 
                                                {
                                                    "option":"option I",
                                                    "option2":"option II",
                                                    "option3":"option III"
                                                }   
                                            }
                                        />
                                    </FlexBlock>
                                </Flex>
                            </PanelRow>
                        </PanelBody>
                        
                        <PanelBody title="Media Uploader" initialOpen={false}>
                            <PanelRow>
                                <Flex
                                    gap={2}
                                    align="center"
                                    justify="space-between"
                                    >
                                    <FlexItem >
                                        <label>Upload Image</label>
                                    </FlexItem>
                                    <FlexBlock >
                                        <ArMediaUploader name="test_media" />
                                    </FlexBlock>
                                </Flex>
                            </PanelRow>
                        </PanelBody>
                    
                        <button type="submit" className="button primary">
                            {saveOptions}
                        </button>

                    </form> 
                </dataContext.Provider>

            </>
}

export default ArPanel
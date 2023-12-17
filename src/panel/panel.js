import { useState } from "@wordpress/element"
import { PanelBody, PanelRow, Flex, FlexItem, FlexBlock, FormToggle } from '@wordpress/components';
import axios from "axios"
import ArInputText from "./component/inputText";
import Archeckbox from "./component/checkbox";
import ArDropdown from "./component/dropdown";
import ArTextarea from "./component/textareaText";
import ArMediaUploader from "./component/media-upload";
import { dataContext } from './component/datacontext';
import { __ , _x, _n } from '@wordpress/i18n'
import ArColorPicker from "./component/color-picker";

const ArPanel = () => {

    //---  Rout WP API Link
    const restApiUrl = panelLocalizer.apiUrl + "/aroptions/v1/settings"

    //---- state save Button
    const [saveOptions, setsaveoptions] = useState(__("Update Options","translate-name"))

    //----- state Panel options
    const [dashOptions, setDashoptions] = useState(panelLocalizer)

    //--------- Function handel save option
    const handelSubmit = (e) => {
        e.preventDefault()
        setsaveoptions( __("Updating...","translate-name"))
        axios.post(restApiUrl,
                dashOptions,
                {
                    headers: {
                        'content-type': 'application/json',
                        'X-WP-NONCE': panelLocalizer.nonce
                    }
                }
            ).then((res) => {
                setsaveoptions(__("Update Options","translate-name"))
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
                                        <label>{__('Name',"translate-name")}</label>
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
                                        <label>{__('Phone',"translate-name")}</label>
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
                                        <label>{__('Email',"translate-name")}</label>
                                    </FlexItem>
                                    <FlexBlock >
                                        <ArInputText name="email" />
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
                                        <label>{__('Eneable / Disable Option',"translate-name")}</label>
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
                                        <label>{__('Eneable / Disable Option II',"translate-name")}</label>
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
                                        <label>{__('TextArea Option',"translate-name")}</label>
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
                                        <label>{__('Select Option',"translate-name")}</label>
                                    </FlexItem>
                                    <FlexBlock >
                                        <ArDropdown 
                                            name="test_drop" 
                                            options={ 
                                                {
                                                    "option":__('Option I',"translate-name"),
                                                    "option2":__('Option II',"translate-name"),
                                                    "option3":__('Option III',"translate-name")
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
                                        <label>{__('Upload Image',"translate-name")}</label>
                                    </FlexItem>
                                    <FlexBlock >
                                        <ArMediaUploader name="test_media" />
                                    </FlexBlock>

                                </Flex>
                            </PanelRow>
                        </PanelBody>

                        <PanelBody title="Color Palette" initialOpen={false}>
                            <PanelRow>
                                <Flex
                                    gap={2}
                                    align="center"
                                    justify="space-between"
                                    >
                                    <FlexItem >
                                        <label>{__('ColorPicker',"translate-name")}</label>
                                    </FlexItem>
                                    <FlexBlock >
                                        <ArColorPicker name="picker" />
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
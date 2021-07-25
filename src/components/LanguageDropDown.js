import React from 'react';
import {UncontrolledDropdown, DropdownToggle} from 'reactstrap';
import {useTranslation} from 'react-i18next';

const LanguageDropDown = ({  }) => {
    const {i18n} = useTranslation('common');
    const language = i18n.language === 'en' ? 'fr' : 'en';
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav className="text-capitalize" onClick={() => {
                i18n.changeLanguage(language)

            }}>
                <i className="fa fa-language"></i> {language}
            </DropdownToggle>

        </UncontrolledDropdown>
    );
}

export default LanguageDropDown;
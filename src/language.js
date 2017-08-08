// language.js (Language Module, ES6 Version)
// VER 0.2
// Conceived 25 Apr., 2017
'use strict';
/*  LIBRARIES SECTION:
 *  All required libraries will be imported for use here.
 *  Whether the libraries are external, included by tag, or compiled
 *  with the package, they should be at least exposed here.
 */
import en_US from './data/language/en_US';
import zh_TW from './data/language/zh_TW';

import LanguageCodes from './data/language/list';


/**
 * Defined Language Logics
 * @class
 */



class LangLogic {
    
    /**
     * Represents one language code that was defined in a .ts library
     * @prop  {string}
     */
    defined = '';

    /**
     * Represents few language codes that would use this definition
     * NOTE: If this array is empty, it would fit ALL of the undefined languages
     * @prop  {Array<string>}
     */
    fits = [];

    /**
     * The actual language resource
     * @prop  {Object}
     */
    resource = {};

    /**
     * Flag: default language definition
     * @prop  {boolean}
     */
    default = false;


    constructor(defined, fits, resource, def) {
        
        this.defined = defined;

        this.fits = fits;

        this.resource = resource;

        this.default = def;

    };

};

/**
 * Language Manager
 * @class
 */
export class Lang {

    userLang = '';

    selectedLang = '';

    definedLanguages = [];

    /**
     * Reference: To the selected definition
     * @prop  {Object}
     */
    resource = false;

    /**
     * Selects language manually
     * @argument {String} lang
     */
    selectLang (lang) {
        if (lang === 'EN') {
            this.userLang = 'en-US';
        } else if (lang === 'ZH') {
            this.userLang = 'zh-TW';
        } else {
            throw new Error('[LANG] Desired language not supported: ' + lang);
        }
        this.loadDef();
        // DON'T FORGET TO MANUALLY REFRESH VUE.JS COMPONENT
    };

    /**
     * Private: Load language definitions
     */
    // Loads the required language definition by browser language code
    loadDef () {

        // Create reference
        var def;

        for (let i = 0; i < this.definedLanguages.length; i ++) {

            if (this.definedLanguages[i].default) def = this.definedLanguages[i];

            for (let j = 0; j < this.definedLanguages[i].fits.length; j ++) {

                console.log('matching language: ' + this.userLang + ' v.s. ' + this.definedLanguages[i].fits[j]);

                if (this.userLang === this.definedLanguages[i].fits[j]) {

                    // Matched

                    this.resource = this.definedLanguages[i].resource;

                    // Register
                    this.selectedLang = this.definedLanguages[i].defined;

                    console.log('[LANG] Using language: ' + this.selectedLang);

                    // Expose the variable to the global namespace
                    window['LANG'] = this.resource;
                    window['LANG'].CURRENT_LANG = this.selectedLang;
                    
                    return;

                }   

            }

        }

        // Not matched, using default
        this.resource = def.resource;
        console.log('[LANG] Using default language');
        this.selectedLang = def.defined;

        // Expose the variable to the global namespace
        window['LANG'] = this.resource;
        window['LANG'].CURRENT_LANG = this.selectedLang;

    };

    /**
     *  1. Construction of this class
     *  2. Detects browser/system language
     *  3. Loads the corresponding language definition
     */
    constructor() {
        
        this.userLang = navigator.language;

        // List defined languages here
        // NOTE: Remember to add new language definitions here
        this.definedLanguages.push(new LangLogic('zh-TW', ["zh-TW", "zh-CN", "zh-HK", "zh-SG"], zh_TW, false));
        this.definedLanguages.push(new LangLogic('en-US', [], en_US, true));

        console.log(this.definedLanguages);

        
        // Invocation
        this.loadDef();
        
        
        window['LANGDEF'] = this;
    };

};

export default Lang;
import globalize from 'scripts/globalize';

const LANGUAGE_OPTIONS = [
    { value: 'auto', label: globalize.translate('Auto') },
    { value: 'af', label: 'Afrikaans' },
    { value: 'ar', label: 'العربية' },
    { value: 'be-BY', label: 'Беларуская' },
    { value: 'bg-BG', label: 'Български' },
    { value: 'bn_BD', label: 'বাংলা (বাংলাদেশ)' },
    { value: 'ca', label: 'Català' },
    { value: 'cs', label: 'Čeština' },
    { value: 'cy', label: 'Cymraeg' },
    { value: 'da', label: 'Dansk' },
    { value: 'de', label: 'Deutsch' },
    { value: 'el', label: 'Ελληνικά' },
    { value: 'en-GB', label: 'English (United Kingdom)' },
    { value: 'en-US', label: 'English' },
    { value: 'eo', label: 'Esperanto' },
    { value: 'es', label: 'Español' },
    { value: 'es_419', label: 'Español americano' },
    { value: 'es-AR', label: 'Español (Argentina)' },
    { value: 'es_DO', label: 'Español (Dominicana)' },
    { value: 'es-MX', label: 'Español (México)' },
    { value: 'et', label: 'Eesti' },
    { value: 'eu', label: 'Euskara' },
    { value: 'fa', label: 'فارسی' },
    { value: 'fi', label: 'Suomi' },
    { value: 'fil', label: 'Filipino' },
    { value: 'fr', label: 'Français' },
    { value: 'fr-CA', label: 'Français (Canada)' },
    { value: 'gl', label: 'Galego' },
    { value: 'gsw', label: 'Schwiizerdütsch' },
    { value: 'he', label: 'עִבְרִית' },
    { value: 'hi-IN', label: 'हिन्दी' },
    { value: 'hr', label: 'Hrvatski' },
    { value: 'hu', label: 'Magyar' },
    { value: 'id', label: 'Bahasa Indonesia' },
    { value: 'is-IS', label: 'Íslenska' },
    { value: 'it', label: 'Italiano' },
    { value: 'ja', label: '日本語' },
    { value: 'kk', label: 'Qazaqşa' },
    { value: 'ko', label: '한국어' },
    { value: 'lt-LT', label: 'Lietuvių' },
    { value: 'lv', label: 'Latviešu' },
    { value: 'mk', label: 'Македонски' },
    { value: 'ml', label: 'മലയാളം' },
    { value: 'mr', label: 'मराठी' },
    { value: 'ms', label: 'Bahasa Melayu' },
    { value: 'nb', label: 'Norsk bokmål' },
    { value: 'ne', label: 'नेपाली' },
    { value: 'nl', label: 'Nederlands' },
    { value: 'nn', label: 'Norsk nynorsk' },
    { value: 'pa', label: 'ਪੰਜਾਬੀ' },
    { value: 'pl', label: 'Polski' },
    { value: 'pr', label: 'Pirate' },
    { value: 'pt', label: 'Português' },
    { value: 'pt-BR', label: 'Português (Brasil)' },
    { value: 'pt-PT', label: 'Português (Portugal)' },
    { value: 'ro', label: 'Românește' },
    { value: 'ru', label: 'Русский' },
    { value: 'sk', label: 'Slovenčina' },
    { value: 'sl-SI', label: 'Slovenščina' },
    { value: 'sq', label: 'Shqip' },
    { value: 'sr', label: 'Српски' },
    { value: 'sv', label: 'Svenska' },
    { value: 'ta', label: 'தமிழ்' },
    { value: 'te', label: 'తెలుగు' },
    { value: 'th', label: 'ภาษาไทย' },
    { value: 'tr', label: 'Türkçe' },
    { value: 'uk', label: 'Українська' },
    { value: 'ur_PK', label: ' اُردُو' },
    { value: 'vi', label: 'Tiếng Việt' },
    { value: 'zh-CN', label: '汉语 (简化字)' },
    { value: 'zh-TW', label: '漢語 (繁体字)' },
    { value: 'zh-HK', label: '廣東話 (香港)' }
];

const updatedLanguageOptions = LANGUAGE_OPTIONS.map(option => {
    if (option.value === 'pt' || option.value === 'pt-PT') {
        return { ...option, value: 'pt-BR' };
    }
    return option;
});

// NOTE: Option `Euskara` (eu) does not exist in legacy date locale options.
export const DATE_LOCALE_OPTIONS = updatedLanguageOptions.filter(({ value }) => value !== 'eu');

export { updatedLanguageOptions as LANGUAGE_OPTIONS };

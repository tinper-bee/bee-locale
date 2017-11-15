import warning from 'warning';

export function getLocale (context, componentName, field) {
    let locale = '';
    if(context && context.beeLocale && context.beeLocale[componentName]){
        let componentLocale = context.beeLocale[componentName];
        if(componentLocale.hasOwnProperty(field)){
            locale = componentLocale[field]
        }else{
            warning(`Locale file Component ${componentName} do not has ${field}`);
        }
    }else{
        warning('Maybe not use Locale Component or componentName do not exist');
    }
    return locale;
}
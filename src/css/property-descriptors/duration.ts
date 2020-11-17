import {IPropertyListDescriptor, PropertyDescriptorParsingType} from '../IPropertyDescriptor';
import {CSSValue, isDimensionToken} from '../syntax/parser';

export const duration: IPropertyListDescriptor<number[]> = {
    name: 'duration',
    initialValue: '0s',
    prefix: false,
    type: PropertyDescriptorParsingType.LIST,
    parse: (tokens: CSSValue[]): number[] => {
        return tokens.filter(isDimensionToken).map(duration => {
            switch (duration.unit.toLowerCase()) {
                case 's':
                    return 1000 * duration.number;
                case 'ms':
                    return duration.number;
                default:
                    return 0;
            }
        });
    }
};

import React from 'react';
import styled from 'styled-components';

import * as theme from 'lib/theme';

import { Base, BaseProps } from './atoms';

export type StyledInputProps = {
    size?: string;
    weight?: string;
    color?: string;
    background?: string;
    border?: string;
    outline?: string;
    radius?: string;
    p?: string;
};

const StyledInput = styled.input<StyledInputProps>`
    font-family: "Google Sans";
    font-size: ${props => props.size || '16px'};
    font-weight: ${props => props.weight || 400};
    color: ${props => props.color || theme.colors.text};
    box-sizing: border-box;
    width: 100%;
    display: block;
    border-radius: ${props => props.radius || '4px'};
    border: ${props => props.border || 'none'};
    padding: ${props => props.p ?? '8px 12px'};
    background: ${props => props.background || 'transparent'};
    // &:focus {
    //     outline: ${props => props.outline || 'none'};;
    // }
    outline: ${props => props.outline || 'none'};;
`;

export type Input<T> = { value: T, onChange: ($: T) => void };

export type TextInputProps = {
    type?: string;
    placeholder?: string;
};

export const LineInput = ({ type, p, placeholder, radius, value, onChange,  size, weight, color, background, border, outline,  ...props }: TextInputProps & StyledInputProps & Input<string> & BaseProps) => {
    return (
        <Base w="100%" {...props}>
            <StyledInput placeholder={placeholder} type={type} value={value || ''} onChange={(e) => onChange(e.target.value || '')} {...{ p, size, weight, color, background, border, outline, radius }} />
        </Base>
    );
};

const StyledTextArea = styled.textarea<any>`
    font-family: "Google Sans";
    font-size: ${props => props.size || '16px'};
    font-weight: ${props => props.weight || 400};
    color: ${props => props.color || theme.colors.text};
    box-sizing: border-box;
    width: 100%;
    display: block;
    border-radius: 4px;
    border: ${props => props.border || 'none'};
    padding: 8px 12px;
    background: ${props => props.background || 'transparent'};
    outline: ${props => props.outline || 'none'};
    max-width: 100%;
    min-height: 80px;
`;

export const TextInput = ({ placeholder, value, onChange, size, weight, color, background, border, outline, type, ...props }: any) => {
    return (
        <Base w="100%" {...props}>
            <StyledTextArea value={value || ''} placeholder={placeholder} onInput={(e: any) => onChange(e.target.value || '')} {...{ size, weight, color, background, border, outline, type }}/>
        </Base>
    );
};

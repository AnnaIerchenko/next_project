'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="0d80840dee70b03c3579b48f7be0c98627fe40fa"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};

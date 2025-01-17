import React from 'react';

import { Formiz } from '@formiz/core';

import { FieldBooleanCheckbox } from './index';

export default {
  title: 'components/FieldBooleanCheckbox',
};
export const Default = () => {
  return (
    <Formiz>
      <FieldBooleanCheckbox
        name="FieldBooleanCheckbox"
        label="Label"
        helper="Helper"
        description="Description"
      />
    </Formiz>
  );
};

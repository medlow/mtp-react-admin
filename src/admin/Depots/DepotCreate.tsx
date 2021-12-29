import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  BooleanInput,
  ReferenceInput,
  SelectInput, SelectField,
  O
} from 'react-admin';
import { JsonField, JsonInput } from "react-admin-json-view";

// import { CT_SELECT_I18N } from './UserEdit';


export const DepotCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
     

      {/* <SelectInput
        source="role"
        choices={CT_SELECT_I18N}
        translateChoice={false}
        optionValue="id"
        optionText="text"
    /> */}

      {/* <BooleanInput source="is_active" /> */}


    </SimpleForm>
  </Create>
);

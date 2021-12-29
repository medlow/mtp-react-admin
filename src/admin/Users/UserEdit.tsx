import React, { FC } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  BooleanInput,
  SelectInput
} from 'react-admin';
import { JsonField, JsonInput } from "react-admin-json-view";

export const CT_SELECT_I18N = [
  {id: 'admin', text: 'Admin'},
  { id: 'normal', text: 'Normal' },
  {id: 'restricted', text: 'Restricted'},

];
export const UserEdit: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="username" />
      <TextInput source="email" />
      <PasswordInput source="password" />

   
      {/* <SelectInput
        source="role"
        choices={CT_SELECT_I18N}
        translateChoice={false}
        optionValue="id"
        optionText="text"
      /> */}
      {/* <BooleanInput source="is_active" /> */}
    </SimpleForm>
  </Edit>
);

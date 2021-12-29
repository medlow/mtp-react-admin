import React, { FC } from 'react';
import { NumberInput } from 'react-admin';
import {
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  BooleanInput,
  SelectInput
} from 'react-admin';
// import { JsonField, JsonInput } from "react-admin-json-view";

export const CT_SELECT_I18N = [
  {id: 'admin', text: 'Admin'},
  { id: 'normal', text: 'Normal' },
  {id: 'restricted', text: 'Restricted'},

];
export const ContainerEdit: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="reference" />
            <NumberInput source="prix-achat" label="prix achat"/>
            <NumberInput source="prix_transport" label="prix transport"/>
            <NumberInput source="charge_local" label="charge local"/>
            <NumberInput source="dechargement" label="dechargement" />
            <NumberInput source="frais_voyage" label="frais de voyage"/> 
   
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

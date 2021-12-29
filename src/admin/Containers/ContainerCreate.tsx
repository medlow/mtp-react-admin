import React, { FC } from 'react';
import { NumberInput } from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput, 
} from 'react-admin';

// import { CT_SELECT_I18N } from './UserEdit';

export const ContainerCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
            <TextInput source="reference" />
            <TextInput source="prix-achat" label="prix achat"/>
            <NumberInput source="prix_transport" />
            <NumberInput source="charge_local"  />
            <NumberInput source="dechargement" />
            <NumberInput source="frais_voyage"  /> 
      {/* <PasswordInput source="password" /> */}
     

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

import React, { FC } from 'react';
import { TextField } from 'react-admin';
import { SelectInput } from 'react-admin';
import { ReferenceInput } from 'react-admin';
import { ReferenceField } from 'react-admin';
import { NumberInput } from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput, 
} from 'react-admin';

// import { CT_SELECT_I18N } from './UserEdit';

export const ProductCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
            <TextInput source="reference" />
            <TextInput source="designation" />
            <NumberInput source="prix_achat" label="prix achat" />
            <NumberInput source="frais" label="frais" />
            <NumberInput source="prix_en_gros" label="prix en gros" />
            <NumberInput source="prix_magasin" label="prix magasin" />
            <NumberInput source="quantity_per_carton" label="quantité par carton" />
            <NumberInput source="quantity_init" label="quantité initiale" />
            <ReferenceInput source="category_id" reference="categories">
               <SelectInput optionText="name" optionValue="id" />
           </ReferenceInput>
           <ReferenceInput source="container_id" reference="containers">
               <SelectInput optionText="reference"optionValue="id" />
           </ReferenceInput>

           <ReferenceInput source="depot_id" reference="depots">
               <SelectInput optionText="name" optionValue="id" />
           </ReferenceInput>
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

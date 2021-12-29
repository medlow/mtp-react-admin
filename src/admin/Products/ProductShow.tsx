import React, { FC } from 'react';
import { usePermissions } from 'react-admin';
import { DateField } from 'react-admin';


import { Show, TextField ,NumberField, ChipField} from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const ProductShow: FC = (props) => {
  const { permissions } = usePermissions();
  console.log(props);

  return (
    <>
<Show {...props}>

        <TabbedShowLayout>
            <Tab label="summary">
            <ChipField label="Id" source="id" />
            <TextField source="reference" label="Reference" />
            <TextField source="designation" label="designatio"/>
            <NumberField source="prix_achat" label="prix achat" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/>
            <NumberField source="frais" label="frais" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }} />
            <NumberField source="prix_revient" label="Prix revient" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }} /> 
            <NumberField source="prix_en_gros" label="Prix en gros" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }} /> 
            <NumberField source="prix_magasin" label="Prix magasin" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/> 
            <NumberField source="quantity_per_carton" label="quantité par carton" className="red" /> 
            <NumberField source="quantity_init" label="quantité initiale" className="red" /> 
            <NumberField source="quantity_left" label="quantité restante" className="red" /> 
            <ChipField className="green" source="category.name" /> 
            <DateField source="created_at" label="Date" className="red" /> 
            </Tab>
            <Tab label="Products" >
            </Tab>
            <Tab label="permissions" >
            {/* <TextField source="permitted.sources" label="sources" />
            <TextField source="permitted.areas" label="areas" />
            <TextField source="permitted.tags" label="tags"/> */}
            </Tab>
        </TabbedShowLayout>

    </Show>

    </>
  )
};
import React, { FC } from 'react';
import { usePermissions } from 'react-admin';
import { DateField } from 'react-admin';


import { Show, TextField ,NumberField, ChipField} from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const ContainerShow: FC = (props) => {
  const { permissions } = usePermissions();
  console.log(props);

  return (
    <>
<Show {...props}>

        <TabbedShowLayout>
            <Tab label="summary">
            <ChipField label="Id" source="id" />
            <TextField source="reference" label="Reference"/>
            <NumberField source="prix_achat" label="prix achat" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/>
            <NumberField source="prix_transport" label="prix transport" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/>
            <NumberField source="charge_local" label="charge local" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/>
            <NumberField source="dechargement" label="dechargement" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }} />
            <NumberField source="frais_voyage" label="frais de voyage" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/> 
                      <NumberField source="total" label="Total" /> 
                      <DateField source="created_at" />
                      

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
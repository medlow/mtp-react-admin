import React, { FC } from 'react';
import { usePermissions } from 'react-admin';
import { DateField } from 'react-admin';


import { Show, TextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const UserShow: FC = (props) => {
  const { permissions } = usePermissions();
  console.log(props);

  return (
    <>
<Show {...props}>

        <TabbedShowLayout>
            <Tab label="summary">
            <TextField label="Id" source="id" />
            <TextField source="username" />
            <TextField source="email" />
            <DateField source="create_at" />

            </Tab>
            <Tab label="invoices" >
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
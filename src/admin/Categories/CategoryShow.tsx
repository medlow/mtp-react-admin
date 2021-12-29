import React, { FC } from 'react';
import { usePermissions } from 'react-admin';
import { ReferenceManyField } from 'react-admin';
import { EditButton } from 'react-admin';
import { Datagrid } from 'react-admin';
import { DateField } from 'react-admin';


import { Show, TextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const CategoryShow: FC = (props) => {
  const { permissions } = usePermissions();
  console.log(props);

  return (
    <>
<Show {...props}>

        <TabbedShowLayout>
            <Tab label="summary">
            <TextField label="Id" source="id" />
                      <TextField source="name" />
                      <DateField source="created_at" />
            </Tab>
                  <Tab label="Products" >

            </Tab>
            
            <Tab label="Othter ..." >
            
            </Tab>
        </TabbedShowLayout>

    </Show>

    </>
  )
};
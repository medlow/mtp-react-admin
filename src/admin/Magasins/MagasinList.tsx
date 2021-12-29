// in src/users.js
import React, { FC } from 'react';
// import { usePermissions } from 'react-admin';
import { usePermissions } from 'react-admin';

import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EmailField,
  EditButton,
  DeleteButton,
  ShowButton,
} from 'react-admin';
import { JsonField, JsonInput } from "react-admin-json-view";

// const { loading, permissions } = usePermissions();

export const MagasinList: FC = (props) => {
  const { permissions } = usePermissions();

  return (
    <>
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="montant" />
        
          {/* <TextField source="role" /> */}
      
  
           <ShowButton/>
          {permissions==='admin'&& <EditButton />}
          {permissions === 'admin' && <DeleteButton basePath="/users" /> }
        </Datagrid>
      </List>
    </>
  )
};

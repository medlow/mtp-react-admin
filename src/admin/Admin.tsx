import React, { FC } from 'react';
import { fetchUtils, Admin as ReactAdmin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from './authProvider';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import { UserList, UserEdit, UserCreate, UserShow} from './Users';
import { CategoryList, CategoryEdit, CategoryCreate, CategoryShow } from './Categories';
import {DepotList,DepotEdit,DepotCreate,DepotShow} from './Depots'
import {MagasinList,MagasinEdit,MagasinCreate,MagasinShow} from './Magasins'
import { ContainerCreate, ContainerEdit, ContainerShow, ContainerList } from './Containers';
import { ProductCreate,ProductEdit,ProductShow,ProductList}  from './Products';
const myTheme = ({
  palette: {
      primary: indigo,
      secondary: pink,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
  },

  typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Arial',
          'sans-serif',
    ].join(','),
    fontSize: 14,
  },
  overrides: {
      MuiButton: { // override the styles of all instances of this component
          root: { // Name of the rule
              color: 'white', // Some CSS
          },
      },
  },
  
});


const httpClient = (url: any, options: any) => {
  if (!options) {
    options = {};
  }
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};



const dataProvider = simpleRestProvider('/api/v1', httpClient);
console.log(dataProvider)

export const Admin: FC = () => {
  
  return (
    <ReactAdmin theme={myTheme}  dataProvider={dataProvider} authProvider={authProvider}>
      {(permissions: 'admin' | 'normal'| 'restricted') => [
        permissions === 'admin' ? (
          <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}show={UserShow}/>
        ) : (<Resource name="users" list={UserList} />),
        
        <Resource name="depots" list={DepotList} edit={DepotEdit} create={DepotCreate} show={DepotShow} />,
        
        <Resource name="magasins" list={MagasinList} edit={MagasinEdit} create={MagasinCreate} show={MagasinShow} />,

        <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} show={CategoryShow} />,

        <Resource name="containers" list={ContainerList} edit={ContainerEdit} create={ContainerCreate} show={ContainerShow} />,
        
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} show={ProductShow} />,

      ]}
      
    </ReactAdmin>
    
  );
};

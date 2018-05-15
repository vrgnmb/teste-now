import React from 'react';
import Page  from './Page';
import api   from './Api';


export default class App extends React.Component {
  constructor( props ) {
      super( props );
      this.state = {
        objList: []
      }
  }

  componentDidMount(){
    api( 'http://localhost:8000', ( row ) => {
      const objList = row.map( col => ({
        id:         col[0],
        nome:       col[1],
        preco:      col[2],
        tipo:       col[3],
        quantidade: col[4]
      })).filter( col => col.tipo );
      this.setState( {objList:objList} );
    })
  }

  render( props ){
    const { objList } = this.state;

    const getByTipo = ( type, objList ) => 
      objList.filter( obj => obj.tipo == type )


    const categorias = {
      hortifruti: getByTipo('hortifruti', objList),
      organicos: getByTipo('organicos', objList),
      quitanda: getByTipo('quitanda', objList),
      carnes: getByTipo('carnes', objList),
      adega: getByTipo('adega', objList),
      emporio: getByTipo('emporio', objList),
      muffin: getByTipo('muffin', objList),
    }

    return objList.length ? Page( categorias ) : [];
  }
}

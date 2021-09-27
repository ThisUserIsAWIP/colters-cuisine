import * as React from 'react';
import * as style from 'react-bootstrap';

const Menu = () => {
  const projects = [
    {

    },

  ]
  return (
    <>
      <div className='row d-flex inline-block mt-md-1 justify-content-center'>
        <div className='col-10 pt-3 mb-3 pb-4 pr-4 pl-4' style={{

          borderRadius: '1%'

        }}>

          <style.Tabs
            defaultActiveKey="appetizers"
            transition={false}
            id="noanim-style.Tab-example"
            className="mb-3 justify-content-center"
            style={{
              backgroundColor: '#C4D7F2'}}>
            <style.Tab eventKey="appetizers" title="Appetizers" >
            <img src="https://i.imgur.com/l1XGP9N.png" className="d-block w-100" alt="..."></img>
            </style.Tab>
            <style.Tab eventKey="entrees" title="Entrees">
            <img src="https://i.imgur.com/96kuwWG.png" className="d-block w-100" alt="..."></img>
            </style.Tab>
            <style.Tab eventKey="dessert" title="Dessert">
            <img src="https://i.imgur.com/dCtrJwk.png" className="d-block w-100" alt="..."></img>
            </style.Tab>
          </style.Tabs>
        </div>
      </div>
    </>
  );
};

export default Menu;
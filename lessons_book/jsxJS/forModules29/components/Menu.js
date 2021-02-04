import React  from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  render() {
    return (
      <div style={{border:"1px solid black",backgroundColor:"green"}}>
          <h3>Menu:</h3>
          <aside className="primary-aside">
              <ul>
                <Link to="/29">Index</Link><br/>
                <Link to="/29/home/888">Home :testId</Link><br/>
                <Link to="/29/about">About</Link><br/>
                <Link to="/29/users">Users</Link><br/>
                <Link to="/29/users/7">User :userId</Link><br/>
                <Link to="/29/webpage">WebPage</Link>
              </ul>
          </aside>
      </div>
    );
  }
}

export default Menu;

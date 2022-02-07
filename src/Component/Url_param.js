import React from 'react';
import { Link,Routes, Route, Router } from 'react-router-dom';
import Param_child from './Param_child';

function Url_param() {
  return <div>
      Adding Url Parameters
      <Router>
        <ul>
            <li>
                <Link to="/netflix">Netflix</Link>
            </li>
            <li>
                <Link to="/zillow-group">Zillow Group</Link>
            </li>
            <li>
                <Link to="/yahoo">Yahoo</Link>
            </li>
            <li>
                <Link to="/modus-create">Modus Create</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/:id" element={<Param_child />} />
        </Routes>
      </Router>
  </div>;
}

export default Url_param;

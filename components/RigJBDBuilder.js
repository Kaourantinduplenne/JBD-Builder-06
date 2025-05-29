
import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const Zone = ({ color }) => (
  <Rnd
    default={{ x: 100, y: 100, width: 150, height: 150 }}
    bounds="parent"
    style={{
      border: `2px dashed ${color}`,
      backgroundColor: color === 'green' ? 'rgba(0,255,0,0.2)'
        : color === 'red' ? 'rgba(255,0,0,0.2)'
        : 'rgba(0,0,0,0.2)',
      position: 'absolute'
    }}
  />
);

const Arrow = () => (
  <Rnd
    default={{ x: 150, y: 150, width: 60, height: 10 }}
    bounds="parent"
    style={{
      backgroundColor: 'blue',
      cursor: 'pointer',
      position: 'absolute'
    }}
  />
);

const RigJBDBuilder = () => {
  const [zones, setZones] = useState([]);
  const [arrows, setArrows] = useState([]);

  const addZone = (color) => {
    setZones([...zones, { id: Date.now(), color }]);
  };

  const addArrow = () => {
    setArrows([...arrows, { id: Date.now() }]);
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => addZone('green')}>Add Green Zone</button>
        <button onClick={() => addZone('red')}>Add Red Zone</button>
        <button onClick={() => addZone('black')}>Add Black Zone</button>
        <button onClick={addArrow}>Add Blue Arrow</button>
      </div>
      <div id="diagram-container" style={{ position: 'relative', width: '100%', height: '600px', border: '1px solid #ccc' }}>
        {zones.map((zone) => (
          <Zone key={zone.id} color={zone.color} />
        ))}
        {arrows.map((arrow) => (
          <Arrow key={arrow.id} />
        ))}
        {/* Existing diagram + personnel components should remain here */}
      </div>
    </div>
  );
};

export default RigJBDBuilder;

import React from 'react';
import logo1 from '../img/logo1.jpg';
import steak from '../img/steak.jpg';
import burger from '../img/burger.jpg';
import burger2 from '../img/burger2.jpg';
import salad from '../img/salad.jpg';
import salad2 from '../img/salad2.jpg';

function Card() {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="flex items-center px-6 py-4 bg-white">
        <img className="w-12 h-12 rounded-full mr-4" src={logo1} alt="Profile" />
        <div className="text-xl font-bold">
          <h3 className="text-lg font-bold">Steak</h3>
        </div>
      </div>
      <div className="flex items-center px-6 py-4 bg-white">
        <h2 className="text-xl font-bold">Detox Cabbage Soup</h2>
      </div>
      <img className="w-full h-64 object-cover" src={steak} alt=" " />
    </div>
  );
}

function Card2() {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="flex items-center px-6 py-4 bg-white">
        <img className="w-12 h-12 rounded-full mr-4" src={salad} alt="Profile" />
        <div className="text-xl font-bold">
          <h3 className="text-lg font-bold">Salad</h3>
        </div>
      </div>
      <div className="flex items-center px-6 py-4 bg-white">
        <h2 className="text-xl font-bold">Detox Cabbage Soup</h2>
      </div>
      <img className="w-full h-64 object-cover" src={salad2} alt=" " />
    </div>
  );
}
function Card3() {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="flex items-center px-6 py-4 bg-white">
        <img className="w-12 h-12 rounded-full mr-4" src={burger} alt="Profile" />
        <div className="text-xl font-bold">
          <h3 className="text-lg font-bold">Burger</h3>
        </div>
      </div>
      <div className="flex items-center px-6 py-4 bg-white">
        <h2 className="text-xl font-bold">Detox Cabbage Soup</h2>
      </div>
      <img className="w-full h-64 object-cover" src={burger2} alt=" " />
    </div>
  );
}

export {Card, Card2, Card3};


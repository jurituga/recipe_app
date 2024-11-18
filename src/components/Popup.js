import React from 'react';
import cooking from '../img/cooking.png';
import clock from '../img/clock.jpg';
import ingred from '../img/ingred.jpg';
import calorie from '../img/calorie.png';
import { Link } from "react-router-dom";

function Popup({ onClose }) {
  return (
    <div className="popup-container bg-gray-900 flex justify-center items-center">
      <div className="popup rounded-lg shadow-lg bg-white w-3/4 md:w-2/4 lg:w-1/3 h-250"> 
        <button className="popup-close-button absolute right-4 top-4 text-2xl text-gray-500" onClick={onClose}>&times;</button>
        <div className="popup-content px-6 py-8">
          <img src={cooking} alt='cooking' className="popup-image w-full h-30 mx-auto" />
          <h3 className="text-lg font-bold mt-4 mb-2 text-left">Description</h3>
          <p className="text-sm mb-4 text-left">This easy and quick detox cabbage soup is vegetarian, healthy and perfec if you want to reset your system after the holidays. </p>
          <div className="little-box bg-green-500 rounded-lg py-4 px-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img src={clock} alt='' className="w-8 h-8 rounded-full mr-2" />
                </div>
                <div>
                  <h5 className="text-lg font-medium">Time</h5>
                  <p className="text-sm text-gray-500">60 Min</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img src={ingred} alt='' className="w-8 h-8 rounded-full mr-2" />
                </div>
                <div>
                  <h5 className="text-lg font-medium">Ingredients</h5>
                  <p className="text-sm text-gray-500">19</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img src={calorie} alt='' className="w-8 h-8 rounded-full mr-2" />
                </div>
                <div>
                  <h5 className="text-lg font-medium">Calories</h5>
                  <p className="text-sm text-gray-500">120</p>
                </div>
              </div>
            </div>
          </div>
          <button className="popup-button bg-orange-500 text-white w-full px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition duration-300"><Link to="/recipe">Get Started</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Popup;

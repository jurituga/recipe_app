import React from 'react';
import Navbar from './Navbar';
import cooking from '../img/cooking.png';
import boxline from '../img/boxline.jpeg';
import smallphoto from '../img/smallphoto.jpg'

const Recepie = () => {
  const handleClick = (e) => {
    e.target.classList.toggle("clicked");
  };

  return (
    <div className="container-fluid p-0">
      <Navbar/>
      <div sclassName="flex w-full">
      <img src={cooking} alt='' className="w-full h-full object-cover" />
      <div class="flex justify-between">
        <div class="description-box w-full md:w-2/3 lg:w-1/3 ml-8"> 
          <p>This spaghetti squash casserole is good, but I took it up a notch the second time I made it by using mild Italian sausage instead of grounded beef.</p>
          <div class="small-photo">
            <img src={smallphoto} alt='' />
            <p>Supratoh</p>
          </div>
        </div>
        <div class="description-box1 w-full md:w-2/3 lg:w-1/3 mr-20 mt-4"> 
        <img src={boxline} alt='' className="w-100 h-100" style={{ objectFit: "cover" }} />
          <div class="text-container">
            <div>
              <div className="dot"></div>
              <div>Prep: 20 mins</div>
            </div>
            <div>
              <div className="dot"></div>
              <div>Cook: 1hr 31 mins</div>
            </div>
            <div>
              <div className="dot"></div>
              <div>Additional: 15 mins</div>
            </div>
            <div>
              <div className="dot"></div>
              <div>Total: 1hr 66 mins</div>
            </div>
            <div>
              <div className="dot"></div>
              <div>Servings: 8</div>
            </div>
            <div>
              <div className="dot"></div>
              <div>Yield: 8 serving</div>
            </div>
          </div>
          <button className='nutrion'>Nutrion Info</button>
        </div>
       </div>
      </div>
      <div class="flex items-start">
        <h3 className="text-xl font-bold mr-4 ml-10">Ingredients:</h3>
        <ul className="ingredients-list text-xs">
        <li>
          <div className="circle" onClick={handleClick}>1</div>
          <span>2 tablespoons extra virgin olive oil</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>2</div>
          <span>3 carrots(chopped)</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>3</div>
          <span>4 celery(ribs, chopped)</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>4</div>
          <span>1 yellow onion</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>5</div>
          <span>1 green bell pepper(seeds removed,chopped)</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>6</div>
          <span>4 gloves garlic(minced)</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>7</div>
          <span>2 tablespoons tomato paste</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>8</div>
          <span>1/2 green cabbage(finely chopped)</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>9</div>
          <span>28 ounces diced tomatoes</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>10</div>
          <span>48 ounces low sodium vegetable broth</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>11</div>
          <span>2 lay leaves</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>12</div>
          <span>2 springs rosemary</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>13</div>
          <span>1/3 cup fresh parsley</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>14</div>
          <span>2 teaspoons paprika</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>15</div>
          <span>1 teaspoon dried oregano</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>16</div>
          <span>1/2 teaspoon dried thyme</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>17</div>
          <span>2 tablespoons lemon juice</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>18</div>
          <span>Kasher salt</span>
        </li>
        <li>
          <div className="circle" onClick={handleClick}>19</div>
          <span>Freshly grounded peper</span>
        </li>
      </ul>
      </div>
      <div className="flex items-start">
        <h3 className="text-xl font-bold mr-4 ml-8">Directions:</h3>
        <div className="border-l-2 border-gray-600 pl-4">
          <ul className="ingredients-list text-xs">
            <li>
              <div className="circle" onClick={handleClick}>1</div>
              <span className="ml-2">Preheat oven to 190 degrees C.</span>
            </li>
            <li>
              <div className="circle" onClick={handleClick}>2</div>
              <span className="ml-2">Brush butter lightly over shquash halves. Cover with aluminum foil.</span>
            </li>
            <li>
              <div className="circle" onClick={handleClick}>3</div>
              <span className="ml-2 text-center lg:text-left">Bake in the preheated oven until easily pierced with fork, about 40 mins. Cool until easily handled, about 15 mins.</span>
            </li>
            <li>
              <div className="circle" onClick={handleClick}>4</div>
              <span className="ml-2 text-center lg:text-left">Preheat a large skillet over medium heat. Add ground beef; cook and stir until browned, about 5 mins. Stir in tomatoes, myshroo, red onion, green  bell pepper, garlic, oregano, basil, salt, until flavors combine, 6 to 8 mins.</span>
            </li>
            <li>
              <div className="circle" onClick={handleClick}>5</div>
              <span className="ml-2 text-center lg:text-left">Scrape squash flesh into the skillet; mix ìnto the beef mixture. Spoon into a large casserole dish. Fold in mozzarella cheese;top with crushed crackers.</span>
            </li>
            <li>
              <div className="circle" onClick={handleClick}>6</div>
              <span className="ml-2 text-center lg:text-left">Bake in the preheated oven until golden brown, about 40 mins.</span>
            </li>
          </ul>
        </div>
      </div>
      <button class="py-2 px-4 bg-orange-500 text-white rounded-lg ml-40">I Made It</button>
    </div>
  )
}

export default Recepie;

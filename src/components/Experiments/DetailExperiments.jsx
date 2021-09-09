import React from 'react';
import { useParams } from 'react-router-dom';
// db
import db from '../../db.json';
import Contact from '../Contact';
import MenuWork from '../Menu/MenuWork';
import Illustration from '../Works/icons/DailyUI';
import Branding from '../Works/icons/Pika';
import Windsurf from '../Works/icons/RocketFroz';
import BrandingPage from './BrandingPage';
import Sketching from './icons/Sketching';
import IllustrationPage from './IllustrationPage';
import SketchingPage from './SketchingPage';
import WindsurfPage from './WindsurfPage';

const pageComponent = {
  illustration: IllustrationPage,
  branding: BrandingPage,
  windsurf: WindsurfPage,
  sketching: SketchingPage,
};

const icons = {
  illustration: Illustration,
  branding: Branding,
  windsurf: Windsurf,
  sketching: Sketching,
};

const DetailExperiments = () => {
  const { id } = useParams();

  const { experiments } = db;
  const path = 'experiments';

  const { Children } = experiments.find((item) => item.id === Number(id));

  return (
    <>
      <div className='base-container'>
        <Contact />
        <MenuWork items={experiments} icons={icons} path={path} />
      </div>
      <section>{React.createElement(pageComponent[Children])}</section>
    </>
  );
};

export default DetailExperiments;

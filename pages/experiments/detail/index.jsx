import { useRouter } from 'next/router';
import React from 'react';
import Contact from '../../../src/components/Contact';
import BrandingPage from '../../../src/components/Experiments/BrandingPage';
import Branding from '../../../src/components/Experiments/icons/Branding';
import Illustration from '../../../src/components/Experiments/icons/Illustration';
import Sketching from '../../../src/components/Experiments/icons/Sketching';
import IllustrationPage from '../../../src/components/Experiments/IllustrationPage';
import SketchingPage from '../../../src/components/Experiments/SketchingPage';
import WindsurfPage from '../../../src/components/Experiments/WindsurfPage';
import Windsurf from '../../../src/components/icons/Windsurf';
import Loader from '../../../src/components/Loader/Loader';
import MenuWork from '../../../src/components/Menu/MenuWork';
import CustomHead from '../../../src/components/Utils/CustomHead';
// db
import db from '../../../src/db.json';
import { titleCase } from '../../../src/helpers/titlecase';

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
  const router = useRouter();
  const id = router.query['id'];
  const project = router.query['path'];
  const path = 'experiments';

  const { experiments } = db;

  if (!id) {
    return <Loader />;
  }

  const { Children } = experiments.find((item) => item.id === Number(id));

  return (
    <>
      <CustomHead title={titleCase(project)} />
      <div className='base-container'>
        <Contact />
        <MenuWork items={experiments} icons={icons} path={path} />
      </div>
      <section>{React.createElement(pageComponent[Children])}</section>
    </>
  );
};

export default DetailExperiments;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// styles
import 'swiper/swiper.scss';
import '../../node_modules/animate.css/animate.css';
import DetailWork from '../components/Detail/DetailWork';
import DetailExperiments from '../components/Experiments/DetailExperiments';
import Layout from '../components/Layout';
// containers
import { About, Experiments, Home, NotFound, Works } from '../containers/index';
import AppProvider from '../context/AppContext';
import '../styles/app.scss';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/works' component={Works} />
            <Route exact path='/works/:route/:id' component={DetailWork} />
            <Route exact path='/experiments' component={Experiments} />
            <Route
              exact
              path='/experiments/:route/:id'
              component={DetailExperiments}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

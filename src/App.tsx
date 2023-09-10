import HeaderMobile from '@components/header/headerMobile/headerMobile.component';
import PopularProducts from '@components/popularProducts/popularProducts.component';
import SectionContainer from '@components/sectionContainer/sectionContainer.component';
import LocationProvider from '@providers/LocationProvider';
import RootShowProvider from '@providers/showProviders/unitProviders/RootShowProvider';
import { FC } from 'react';
import { Element } from 'react-scroll';
import './App.css';

const App: FC = () => {
  return (
    <RootShowProvider>
      <LocationProvider>
        <HeaderMobile />
        <div id="bodyContainer">
          <Element name="top">
            <SectionContainer />
          </Element>
          <PopularProducts />
          {/* <Element name="delivery">
            <DeliverySection />
          </Element>
          <Element name="advantage">
            <AdvantageSection />
          </Element>
          <Element name="about">
            <AboutSection />
          </Element>
          <Footer />  */}
        </div>
      </LocationProvider>
    </RootShowProvider>
  );
};

export default App;

import React from 'react';

import fetchMock from 'fetch-mock';

import App from '../../src/components/App';
import Header from '../../src/components/Header';
import Spotlight from '../../src/components/Spotlight';
import Navigation from '../../src/components/Navigation';
import Search from '../../src/components/Search';

// updateStateWithQuery: PropTypes.func.isRequired,
// getPhotosFromFlickrWithQuery: PropTypes.func.isRequired

describe('App', () => {

    let state;
    let mountedApp;
    const app = () => {
      if (!mountedApp) {
        mountedApp = shallow(
          <App />
        );
      }
      return mountedApp;
    }

    beforeEach(() => {
      state = {
        activePhotoIndex: undefined,
        photos: undefined,
        query: undefined
      };
      mountedApp = undefined;
    });

    /* ### */
    it('renders the app without crashing', () => {
        const appContainer = app().find('#App');
        expect(appContainer.length).to.eql(1);
    });
    /* ### */

    /* ### */
    it('always renders the `Header` component', () => {
        const headerComponent = app().find(Header);
        expect(headerComponent.length).to.equal(1);
    });
    /* ### */

    /* ### */
    it('always renders the `Spotlight` component', () => {
        const spotlightComponent = app().find(Spotlight);
        expect(spotlightComponent.length).to.equal(1);
    });
    /* ### */

    /* ### */
    it('always renders the `Navigation` component', () => {
        const navigationComponent = app().find(Navigation);
        expect(navigationComponent.length).to.equal(1);
    });
    /* ### */

        /* #################### */
        /* #################### */
        describe('updateStateWithQuery()', () => {
          /* ## */
          it('updates `query` state with the search query', () => {
              const query = 'query';
              app().instance().updateStateWithQuery(query);

              expect(app().state().query).to.equal(query);
          });
          /* ## */
        });
        /* #################### */
        /* #################### */

        /* #################### */
        /* #################### */
        describe('updateStateWithPhotos()', () => {

          const photos = [ { name: 'name', url: 'url' } ];

          beforeEach(() => {
            app().instance().updateStateWithPhotos(photos);
          });

          /* ## */
          it('resets `activePhotoIndex` state back to 0', () => {
              expect(app().state().activePhotoIndex).to.equal(0);
          });
          /* ## */

          /* ## */
          it('updates `photos` state with photos array', () => {
              expect(app().state().photos).to.equal(photos);
          });
          /* ## */

        });
        /* #################### */
        /* #################### */

        /* #################### */
        /* #################### */
        describe('navigatePhotos()', () => {

          /* ## */
          it('decrements 1 to `state.activePhotoIndex` when `prev` is clicked', () => {
            app().setState({
              activePhotoIndex: 1
            });

            app().instance().navigatePhotos('prev');
            expect(app().state().activePhotoIndex).to.equal(0);
          });
          /* ## */

          /* ## */
          it('does nothing when `prev` is clicked and `state.activePhotoIndex` is already at 0', () => {
            app().setState({
              activePhotoIndex: 0
            });

            app().instance().navigatePhotos('prev');
            expect(app().state().activePhotoIndex).to.equal(0);
          });
          /* ## */

          /* ## */
          it('increments 1 to `state.activePhotoIndex` when `next` is clicked', () => {
            app().setState({
              activePhotoIndex: 1
            });

            app().instance().navigatePhotos();
            expect(app().state().activePhotoIndex).to.equal(2);
          });
          /* ## */

          /* ## */
          it('does nothing when `next` is clicked and `state.activePhotoIndex` is already at `state.photos` index limit', () => {

            const photos = [1];

            app().setState({
              photos
            });

            app().instance().navigatePhotos();
            expect(app().state().activePhotoIndex).to.equal(photos.length - 1);
          });
          /* ## */

        });
        /* #################### */
        /* #################### */

        /* #################### */
        /* #################### */
        describe('updateSpotlightPhoto()', () => {

          /* ## */
          it('updates `activePhotoIndex` with selected photo index', () => {

            const selectedPhotoIndex = 1;
            app().instance().updateSpotlightPhoto(selectedPhotoIndex);

            expect(app().state().activePhotoIndex).to.equal(selectedPhotoIndex);
          });
          /* ## */

        });
        /* #################### */
        /* #################### */
});

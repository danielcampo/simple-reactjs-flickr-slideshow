import React from 'react';

import Spotlight from '../../src/components/Spotlight';

describe('Spotlight', () => {

    let props;
    let mountedSpotlight;
    const spotlight = () => {
      if (!mountedSpotlight) {
        mountedSpotlight = shallow(
          <Spotlight {...props} />
        );
      }
      return mountedSpotlight;
    }

    beforeEach(() => {
      props = {
        activePhotoIndex: undefined,
        photos: []
      };
      mountedSpotlight = undefined;
    });

    /* ### */
    it('always renders #Spotlight container without crashing', () => {
        const container = spotlight().find('#Spotlight');
        expect(container.length).to.eql(1);
    });
    /* ### */

    
    describe('when `props.photos` is undefined', () => {
        /* ### */
        it('renders <p>', () => {
            const container = spotlight().find('#Spotlight');
            const p = container.find('p');
            expect(p.length).to.eql(1);
        });
        /* ### */
        
        /* ### */
        it('<p> renders with correct message', () => {
            const message = 'Please enter a query using the search box above.';

            const container = spotlight().find('#Spotlight');
            const p = container.find('p');
            expect(p.text()).to.equal(message);
        });
        /* ### */
    });

    describe('when `props.photos` is defined', () => {
        // mock single photo object from Flickr API
        const exampleResponsePhoto = { "id":"24509896268","owner":"155518377@N06","secret":"afce805591","server":"4565","farm":5,"title":"Untold Stories Of Election Day 2016" };

        beforeEach(() => {
            props.activePhotoIndex = 0;
            props.photos = [exampleResponsePhoto];
        });

        it('always renders navigation arrows', () => {
            const container = spotlight().find('#Spotlight');
            const navArrows = container.find('a');
            expect(navArrows.length).to.equal(2);
        });
    });

});

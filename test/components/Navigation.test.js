import React from 'react';

import Navigation from '../../src/components/Navigation';

describe('Navigation', () => {

    let props;
    let mountedNavigation;
    const navigation = () => {
      if (!mountedNavigation) {
        mountedNavigation = mount(
          <Navigation {...props} />
        );
      }
      return mountedNavigation;
    }

    beforeEach(() => {
      props = {
        updateSpotlightPhoto: spy(),
        photos: []
      };
      mountedNavigation = undefined;
    });

    /* ### */
    it('always renders container without crashing', () => {
        const container = navigation().find('#Navigation');
        expect(container.length).to.equal(1);
    });
    /* ### */

    /* ### */
    it('renders nothing inside container if state.photos is empty', () => {
        const divs = navigation().find('div');
        const wrappingDiv = divs.first(); // container

        expect(wrappingDiv.children().length).to.equal(0);
    });
    /* ### */

        /* #################### */
        /* #################### */
        describe('photos state is not undefined', () => {

            beforeEach(() => {
                props.photos = ['photo'];
            });

            /* ### */
            it('renders .navigation__container', () => {
                const divs = navigation().find('div');
                const wrappingDiv = divs.first(); // container
                expect(wrappingDiv.children().length).to.equal(1);
            });
            /* ### */

            /* ### */
            it('renders <a> tags equal to the number of photos in state.photos', () => {
                const navigationContainer = navigation().find('.navigation__container');
                const aTags = navigationContainer.find('a');
                const photosProp = navigation().props().photos;
                expect(aTags.length).to.equal(photosProp.length);
            });
            /* ### */
        });
        /* #################### */
        /* #################### */

            /* #################### */
            /* #################### */
            describe('<a> tags within navigation container', () => {

                beforeEach(() => {
                    props.updateSpotlightPhoto = spy();
                    props.photos = ['photo'];
                });

                it('renders an <img> tag', () => {
                    const navigationContainer = navigation().find('.navigation__container');
                    const aTags = navigationContainer.find('a');

                    aTags.map(tag => {
                        expect(tag.children().find('img').length).to.equal(1);
                    });
                });

                it('invokes `props.updateSpotlightPhoto()` on click', () => {
                    const navigationContainer = navigation().find('.navigation__container');
                    const aTags = navigationContainer.find('a');
                    const callback = navigation().props().updateSpotlightPhoto;

                    aTags.map(tag => {
                        tag.simulate('click');
                        expect(callback.called).to.equal(true);
                    });
                });
            });
            /* #################### */
            /* #################### */

                /* #################### */
                /* #################### */
                describe('<img> tags', () => {

                    beforeEach(() => {
                        props.photos = ['photo'];
                    });

                    it('contain correct `src`', () => {
                        const navigationContainer = navigation().find('.navigation__container');
                        const aTags = navigationContainer.find('a');
                        const images = aTags.children().find('img');

                        /* Since we're not passing all of the properties in the photos array, the img src will generate the following: */
                        const correctImgSrc = 'https://farmundefined.staticflickr.com/undefined/undefined_undefined_q.jpg';

                        /* Iterate over all of the images and check their src property */
                        images.map(img => {
                            expect(img.props().src).to.equal(correctImgSrc);
                        });
                    });
                });
                /* #################### */
                /* #################### */
                
                /* #################### */
                /* #################### */
                describe('props.updateSpotlightPhoto()', () => {

                    beforeEach(() => {
                        props.updateSpotlightPhoto = spy();
                        props.photos = ['photo'];
                    });

                    it('passes target.dataset.photo on click', () => {

                        // Should return '0' since there is only one photo in our fake photos array
                        const navigationContainer = navigation().find('.navigation__container');
                        const aTags = navigationContainer.find('a');
                        const callback = navigation().props().updateSpotlightPhoto;

                        aTags.map(tag => {
                            tag.simulate('click');
                            expect(callback.calledWith('0')).to.equal(true);
                        });
                    });

                });
});
import React from 'react';

import App from '../../src/components/App';
import Header from '../../src/components/Header';
import Search from '../../src/components/Search';

describe('Header', () => {

    let props;
    let mountedHeader;
    const header = () => {
      if (!mountedHeader) {
        mountedHeader = mount(
          <Header {...props} />
        );
      }
      return mountedHeader;
    }

    beforeEach(() => {
      props = {
        updateStateWithQuery: undefined,
        getPhotosFromFlickrWithQuery: undefined
      };
      mountedHeader = undefined;
    });

    /* ### */
    it('always renders a header element', () => {
        const headers = header().find('header');
        expect(headers.length).to.eql(1);
    });
    /* ### */

        /* ### */
        describe('the rendered header element', () => {
            /* ## */
            it('contains everything else that should be rendered', () => {
                const divs = header().find('div');
                // grab outermost div
                const wrappingDiv = divs.first();

                expect(wrappingDiv.children()).to.eql(header().children());
            });
            /* ## */

            it('always renders the `Search` component', () => {
                expect(header().find(Search).length).to.eql(1);
            });
        });
        /* ### */


});

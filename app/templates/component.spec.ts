import {<%= className %>} from './<%= selector %>.component';

describe('<%= className %>', () => {
    let componentTest: <%= className %>;
    const createComponentTest = () => {
      return new <%= className %>();
    };

    beforeEach(() => {
        componentTest = createComponentTest();
    });

    describe('constructor', () => {
        it('should exist', () => {
            expect(componentTest).exist;
        });
      });

  });

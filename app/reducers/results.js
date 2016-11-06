import _ from 'npm:lodash';

const initialState = {
  all: undefined,
  selectedId: undefined
};

export default ((state, action) => {
  switch(action.type) {
    case 'TRANSFORM_LIST':
      const results = _.keyBy(action.response, (result) => result.id);
      const merged = _.extend({}, state.all, results);
      return Object.assign({}, state, {all: merged});
    case 'TRANSFORM_DETAIL':
      const result = {[action.response.id]: action.response};
      const merge = _.extend({}, state.all, result);
      return Object.assign({}, state, {
        all: merge,
        selectedId: action.response.id
      });
    default:
      return state || initialState;
  }
});
import {defaultStyles, defaultTitle} from '@/constants';
import {clone} from '@/core/utils';

export const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyle: defaultStyles,
  openedDate: new Date().toJSON()
};

const normalize = state => ({
  ...state,
  currentStyle: defaultStyles,
  currentText: ''
});

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState);
}

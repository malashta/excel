import {storage} from '@/core/utils';
import {defaultStyles} from '@/constants';

export const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyle: defaultStyles
};

const normalize = state => ({
  ...state,
  currentStyle: defaultStyles,
  currentText: ''
});

export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState;

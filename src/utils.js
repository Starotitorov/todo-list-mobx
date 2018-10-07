import { reaction } from 'mobx';

export const persistStore = onChange => store => {
  reaction(
    () => store.toJS(),
    onChange,
    { fireImmediately: true }
  );

  return store;
};

export const createPersistedStore = (Store, { defaultValue, storageKey }) => {
  const initialValue  = JSON.parse(localStorage.getItem(storageKey)) || defaultValue;

  return compose(
    persistStore(value => localStorage.setItem(storageKey, JSON.stringify(value))),
    Store.fromJS
  )(initialValue);
};

export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

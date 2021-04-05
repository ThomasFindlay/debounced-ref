import { ref, customRef } from 'vue';

const debounce = (fn, delay = 0) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const useDebouncedRef = (initialValue, delay) => {
  const state = ref(initialValue);
  const debouncedRef = customRef((track, trigger) => ({
    get() {
      track();
      return state.value;
    },
    set: debounce(value => {
      state.value = value;
      trigger();
    }, delay),
  }));
  return debouncedRef;
};

export default useDebouncedRef;

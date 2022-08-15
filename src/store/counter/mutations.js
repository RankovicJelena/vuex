export default {
  increment(state) {
    setTimeout(function () {
      state.counter = state.counter + 2;
    }, 2000);
  },
  increase(state, payload) {
    console.log(state);
    state.counter = state.counter + payload.value;
  },
};

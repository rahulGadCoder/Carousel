import pollReducer, { nextStep, prevStep, setResponse, resetPoll } from '../../redux/pollSlice';

describe('pollSlice Reducer', () => {
  const initialState = {
    activeStep: 0,
    steps: [
      { title: 'Step 1', options: [{ icon: '👍', label: 'Good' }] },
      { title: 'Step 2', options: [{ icon: '👎', label: 'Bad' }] },
    ],
    responses: {},
  };

  test('increments activeStep on nextStep', () => {
    const state = pollReducer(initialState, nextStep());
    expect(state.activeStep).toBe(1);
  });

  test('decrements activeStep on prevStep', () => {
    const state = pollReducer({ ...initialState, activeStep: 1 }, prevStep());
    expect(state.activeStep).toBe(0);
  });

  test('updates responses on setResponse', () => {
    const state = pollReducer(initialState, setResponse({ stepIndex: 0, response: 'Good' }));
    expect(state.responses[0]).toBe('Good');
  });

  test('resets poll on resetPoll', () => {
    const state = pollReducer(
      { ...initialState, activeStep: 1, responses: { 0: 'Good' } },
      resetPoll()
    );
    expect(state.activeStep).toBe(0);
    expect(state.responses).toEqual({});
  });
});

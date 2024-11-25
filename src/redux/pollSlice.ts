import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Option {
  icon: string;
  label: string;
}

interface Step {
  title: string;
  options: Option[];
}

interface PollState {
  activeStep: number;
  responses: Record<number, string>;
  steps: Step[];
}

const initialState: PollState = {
  activeStep: 0,
  responses: {},
  steps: [
    {
      title: 'How was your week overall?',
      options: [
        { icon: '👍', label: 'Good' },
        { icon: '🤔', label: 'Neutral' },
        { icon: '👎', label: 'Bad' },
      ],
    },
    {
      title: 'How productive were you?',
      options: [
        { icon: '✅', label: 'Very productive' },
        { icon: '⏳', label: 'Somewhat productive' },
        { icon: '❌', label: 'Not productive' },
      ],
    },
  ],
};

const pollSlice = createSlice({
  name: 'poll',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.activeStep < state.steps.length) state.activeStep += 1;
    },
    prevStep: (state) => {
      if (state.activeStep > 0) state.activeStep -= 1;
    },
    setResponse: (
      state,
      action: PayloadAction<{ stepIndex: number; response: string }>
    ) => {
      const { stepIndex, response } = action.payload;
      state.responses[stepIndex] = response;
    },
    resetPoll: (state) => {
      state.activeStep = 0;
      state.responses = {};
    },
  },
});

export const { nextStep, prevStep, setResponse, resetPoll } = pollSlice.actions;
export default pollSlice.reducer;

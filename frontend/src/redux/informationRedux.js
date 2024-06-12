import initialState from "./initialState";

export const getFirstSetion = (state) => state.information.firstSection;
export const getAbout = (state) => state.information.about;
export const getContact = (state) => state.information.contact;

export default function reducer(state = [initialState], action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

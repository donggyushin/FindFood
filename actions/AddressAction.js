export const SET_ADDRESS = 'SET_ADDRESS';

export const setAdressAction = (area1Name, area2Name, area3Name) => (
  dispatch,
) => {
  return dispatch({
    type: SET_ADDRESS,
    area1Name,
    area2Name,
    area3Name,
  });
};

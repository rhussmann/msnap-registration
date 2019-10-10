import React, { createContext, useContext, useReducer, Reducer, Dispatch } from "react";

// Based on https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

export interface AppState {
  bus: BusInfo;
  initialized: boolean;
}

export interface BusInfo {
  capacity: number;
  seatsTaken: number;
}

const defaultState: AppState = {
  bus: {
    capacity: 40,
    seatsTaken: 0,
  },
  initialized: false,
};

export type AppReducer = Reducer<AppState, Actions>;
export const StateContext = createContext<[AppState, Dispatch<Actions>]>([defaultState, () => void 0]);

export enum ActionType {
  SET_BUS_INFO,
  SET_APP_INITIALIZED,
}
interface Action<T extends ActionType> {
  type: T;
}

interface SetBusInfoAction extends Action<ActionType.SET_BUS_INFO> {
  info: BusInfo;
}

interface SetAppInitializedAction extends Action<ActionType.SET_APP_INITIALIZED> {}

export type Actions = SetBusInfoAction | SetAppInitializedAction;

export const reducer: AppReducer = (state, action) => {
  console.log("Dispatching action", { currentState: state, action });
  switch (action.type) {
    case ActionType.SET_BUS_INFO:
      return {
        ...state,
        bus: action.info,
      };
    case ActionType.SET_APP_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
  }
  return state;
};

interface StateProviderProps {
  injectedReducer?: AppReducer;
  injectedDefaultState?: AppState;
}
export const StateProvider: React.FC<StateProviderProps> = props => {
  const { children, injectedReducer = reducer, injectedDefaultState = defaultState } = props;
  return (
    <StateContext.Provider value={useReducer<AppReducer>(injectedReducer, injectedDefaultState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);

export type Dispatch = React.Dispatch<Actions>;

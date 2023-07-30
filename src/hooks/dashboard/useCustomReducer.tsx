import React, { useState, useEffect } from "react";

export const useCustomReducer: any = (reducer: any, defaultState: any) => {
  const [dispatch, setDispatch] = useState<any>({ type: "" });
  const [state, setState] = useState<any>(defaultState);
  useEffect(() => {
    const st = reducer(state, dispatch);

    setState((state: any) => {
      return { ...state, ...st };
    });
  }, [dispatch]);

  return [state, setDispatch];
};

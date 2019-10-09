import { ActionType, Dispatch } from "./state";
import Tabletop from "tabletop";

export async function initializeAppEffect(dispatch: Dispatch) {
  try {
    const data = await Tabletop.init({
      key: "1lA4AENS26r3A8SkYU07d_Jc_Q1p6-7qgWLIk1qixpsE",
      simpleSheet: true,
      parseNumbers: true,
    });

    console.log("Fetched app data", { data });

    dispatch({
      type: ActionType.SET_APP_INITIALIZED,
    });

    dispatch({
      type: ActionType.SET_BUS_INFO,
      info: {
        capacity: data[0].seats_available,
        seatsTaken: data[0].seats_taken,
      },
    });
  } catch (e) {
    console.error("Unable to load google sheet", e);
  }
}

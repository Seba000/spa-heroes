import { authReducer } from "../../../auth/context/authReducer";
import { types } from "../../../auth";

describe("Pruebas en auth reducer", () => {
  //
  test("Debe retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Debe llamar el login y authenticas y establecer el user", () => {
    const action = {
      type: types.login,
      payload: { name: "Juan", id: 123 },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("Debe borrar el name de usuario y logged en false(logout)", () => {
    const state = {
      logged: true,
      user: { id: "123" },
    };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });
});

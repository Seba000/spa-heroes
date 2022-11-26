import { types } from "../../../auth/types/types";

describe('Pruebas en "Types"', () => {
  test("Debe regresar estos types", () => {
    expect(types).toEqual({ login: "[Auth Login]", logout: "[Auth] Logout" });
  });
});

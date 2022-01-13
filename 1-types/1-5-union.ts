namespace Union {
  // Union Types: OR
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //   function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FaileState = {
    reason: string;
  };
  type LoginState = SuccessState | FaileState;
  function login(): SuccessState | FaileState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  //   printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(` 😭${state.reason}`);
    }
  }
}

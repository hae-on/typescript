namespace Discriminated {
  //   function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FaileState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FaileState;

  function login(): SuccessState | FaileState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  //   printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(` 😭${state.reason}`);
    }
  }
}

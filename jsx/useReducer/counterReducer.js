export const inisialState = { count: 0 }

export const counterReducer = (state, action) => {
	switch (action.type) {
		case "increament":

			return { count: state.count + 1 };
		case "decreament":

			return { count: state.count - 1 };
		case "bulk increament":

			return { count: state.count + action.bulk };
		case "bulk decreament":

			return { count: state.count - action.bulk };
		case "reset":

			return { count: 0 };

		default:
			return { count: state.count };
	}
}

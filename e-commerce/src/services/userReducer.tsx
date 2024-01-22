


export const reducer = (state, action) => {
    switch (action.type) {
        case "post": {
            return {value: action.value}
        }
        case "get": {

            return {value:"hehe"}
        }
        default:
            return state;
    }
};

export default function MyComponent() {

    console.log(name)
    return (<>
        yes</>)
}
import CSS from "./List.module.css"
import ITodoItem from "../../../interfaces/List.interface.tsx";

const List = ({items}:{items:Array<ITodoItem>}) => {
    console.log(items)
    return (
        <div className={CSS.container}>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Tasks</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>

                {items.map((m) => (
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>{m.Item}</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                ))}


                </tbody>
            </table>
        </div>
    );
};

export default List;

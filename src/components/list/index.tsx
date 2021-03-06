import Item from "./item";
import style from './List.module.scss'
import { iTarefa } from "../../types/tarefa";

function List({ tarefas }: { tarefas: iTarefa[] }) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List
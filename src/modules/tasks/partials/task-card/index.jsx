import Tag from "../../../../components/tag"

export default function TaskCard(props){
    const {name, tag, code, status} = props
    return (
        <div className="bg-white rounded-md border border-gray-400 p-5">
            <h4>{name}</h4>
            <Tag tag={tag}/>
        </div>
    )
}
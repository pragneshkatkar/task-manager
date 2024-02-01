import Tag from "../../../../components/tag"

export default function TaskCard(props){
    const {name, tag, code, status} = props
    return (
        <div className="bg-white rounded-md border border-gray-100 p-3">
            <h4 className="text-xl text-gray-800">{name}</h4>
            <div className="flex items-center mt-2">
                <Tag tag={tag}/>
            </div>
            <div className="flex items-center justify-end">
                <div className="w-10 h-10 border border-gray-200 rounded-full bg-gray-200">

                </div>
            </div>
        </div>
    )
}
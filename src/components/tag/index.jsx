export default function Tag(props){
    const {tag} = props
    return (
        <div className="h-4 px-1 rounded-full bg-white flex items-center justify-center">
            <p className="text-xs">{tag}</p>
        </div>
    )
}
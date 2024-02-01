export default function Tag(props){
    const {tag} = props
    return (
        <div className="h-6 px-2 rounded-md bg-green-300 flex items-center justify-center">
            <p className="text-xs tracking-wider leading-4 uppercase font-semibold">{tag}</p>
        </div>
    )
}
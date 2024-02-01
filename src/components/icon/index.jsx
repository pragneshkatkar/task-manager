export default function Icon(props){
    const {icon, additionalClasses, xl} = props

    let width = xl ? 40 : 24
    let height = xl ? 40 : 24
    return (
        <div className={`${additionalClasses} flex-shrink-0`}>
            <img src={`/images/icons/${icon}.svg`} width={width} height={height} alt={icon}/>
        </div>
    )
}
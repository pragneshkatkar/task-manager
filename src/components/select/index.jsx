export default function Select(props){
    const { label, attrs, additionalClasses, err, position, suffix, options } = props;
    return (
        <div className={`${additionalClasses}`}>
            <select className={`flex items-center bg-white relative h-11 px-5 ${
                    suffix ? "pr-[10px]" : ""
                } rounded-full gap-2.5 border border-gray-300 font-bold`} {...attrs}>
                <option value="">-- {label} --</option>
                {
                    options.map((item, key) => {
                        return <option key={key} value={item.value}>{item.text}</option>
                    })
                }
            </select>
        </div>
    )
}
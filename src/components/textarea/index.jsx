export default function Textarea(props) {
    const { label, attrs, additionalClasses, err, position, suffix } = props;

    return (
        <div className={`${additionalClasses}`}>
            {label && (
                <label className="block text-xs text-gray1 font-cabin mb-[5px] pl-5">
                    {label}
                </label>
            )}
            <label
                className={`flex items-center bg-white relative p-5 ${
                    suffix ? "pr-[10px]" : ""
                } rounded-xl gap-2.5 border border-gray-300`}
            >
                <textarea
                    className={`w-full font-cabin font-semibold text-black1 text-base bg-white hover:border-verylightgray transition-all`}
                    {...attrs}
                ></textarea>
                {suffix}
            </label>
            {err && <p className="err">{err}</p>}
        </div>
    );
}

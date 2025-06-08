
type Props = React.ComponentProps<"input"> & {
    legend?: string
    error?: string
}

export function Input({legend, error, ...rest}:Props){
    return(
        <fieldset>
            <legend className="p-2">
                {legend}
            </legend>
            <input type="text" {...rest} className="w-2/3 h-12 rounded-3xl border border-gray-300 p-5 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus:border-purple-700 placeholder-gray-300"  />{error && (
                <span className="text-red-500 text-sm mt-1 block">
                    {error}
                </span>
            )}
        </fieldset>
    )
}
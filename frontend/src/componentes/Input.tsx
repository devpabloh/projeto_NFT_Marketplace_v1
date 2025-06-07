
type Props = React.ComponentProps<"input"> & {
    legend?: string
    error?: string
}

export function Input({legend, error, ...rest}:Props){
    return(
        <fieldset>
            <legend>
                {legend}
            </legend>
            <input type="text" {...rest} className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus:border-purple-700 placeholder-gray-300"  />{error && (
                <span className="text-red-500 text-sm mt-1 block">
                    {error}
                </span>
            )}
        </fieldset>
    )
}
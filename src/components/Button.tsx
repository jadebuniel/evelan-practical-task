type ButtonPropTypes = {
    isLoading: boolean;
    canLoadMore: boolean;
    handleClick: () => {};
}

export default function Button ({ isLoading, handleClick, canLoadMore }: ButtonPropTypes) {
    return (
        <div className="mt-6 flex justify-center">
            {isLoading ? (
                <div className="loader bg-white p-3 rounded-full flex space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                </div>
            ): (
                <button onClick={handleClick} className="bg-black text-white px-8 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed" disabled={!canLoadMore}>Load more</button>
            )}
        </div>
    )
}
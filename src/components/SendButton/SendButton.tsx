import React from 'react'

interface SendButtonProps {
    isLoading: boolean;
    isSuccess: boolean;
}

const SendButton: React.FC<SendButtonProps> = ({ isLoading, isSuccess }) => {
    return (
        <button className={`${isLoading && "bg-blue-800 pointer-events-none"}
        ${isSuccess && "bg-blue-500"}
        ${!isLoading && !isSuccess && "bg-accent hover:bg-accent/90 active:bg-blue-800"}
        text-white w-40 rounded-md shadow-md text-lg font-medium mt-3 flex items-center justify-center gap-2 active:translate-y-[2px]`}>
            {
                isLoading &&
                <>
                    Sending
                    <div className="loader border-t-teal-500 animate-spin ease-in-out rounded-full border-2 border-t-2 border-gray-200 h-4 w-4" />
                </>
            }
            {
                isSuccess && "Success!"
            }
            {!isLoading && !isSuccess && "Send"}
        </button>
    )
}

export default SendButton
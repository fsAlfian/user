export default function Layout({ children }) {

    return (
        <>
        <div className="flex justify-center">
            <div className="w-64">
                {children}
            </div>
        </div>
        </>
    )
}
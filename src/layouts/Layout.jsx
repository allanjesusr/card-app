


export const Layout = ({ title, children }) => {
    return (
        <>
            <div className="layout__header">
                <h2> {title} </h2>
            </div>
            <div className="layout__container">
                {children}
            </div>


        </>
    )
}

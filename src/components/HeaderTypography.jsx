import '../App.css'

function HeaderTypography({ children, headerClass, pl=0, mb=0}) {
    return (
        <div className={headerClass}  style={{ display: "flex", justifyContent: "start", paddingLeft: `${pl}px`, marginBottom: `${mb}px` }}><h2>{children}</h2></div>
    )
}

export default HeaderTypography;
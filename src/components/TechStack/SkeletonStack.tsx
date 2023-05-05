import ContentLoader from "react-content-loader"

const SkeletonStack = () => (
    <ContentLoader
        className='mx-auto'
        speed={2}
        width={146}
        height={146}
        viewBox="0 0 146 146"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="0" ry="0" width="73" height="0"/>
        <circle cx="73" cy="73" r="73"/>
    </ContentLoader>
)

export default SkeletonStack
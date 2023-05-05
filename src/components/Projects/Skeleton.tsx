import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className='mb-8'
        speed={2}
        width={375}
        height={575}
        viewBox="0 0 375 575"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="20" ry="20" width="375" height="575"/>
    </ContentLoader>
)

export default Skeleton
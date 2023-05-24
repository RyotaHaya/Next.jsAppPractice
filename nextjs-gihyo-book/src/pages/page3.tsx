import HomeIcon from '@mui/icons-material/Home'
import ContentLoader, { Facebook } from 'react-content-loader'
import userSWR from 'swr'
import fetch from 'unfetch'

type HomeIconProps = { fontSize?: string; color?: string }
const HomeIconComponent = ({ fontSize, color }: HomeIconProps) => {
  return (
    <span style={{ fontSize, color }}>
      <HomeIcon fontSize="inherit" color="inherit" />
    </span>
  )
}

type User = {
  name: string
}
const fetcher = (url: string) => fetch(url).then((r) => r.json())

const MyLoader = () => (
  <ContentLoader viewBox="0 0 380 70">
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
const Profile = () => {
  const { data, error } = userSWR<User>('/api/hello', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div data-testid="custom-element">
      Helllo{data.name}dddddddddddd
      <HomeIconComponent />
      <button
        type="button"
        onClick={() => {
          // `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
          const textChar = 'api/g$gg/ddd/auth/signin/'
          alert(textChar.replace(/\/$/g, ''))
        }}
      >
        button
      </button>
    </div>
  )
}
export default Profile

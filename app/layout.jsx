import '../styles/globals.css'
import Nav from '@/components/Nav'
export const metadata = {
    title: 'White House Villa',
    description: 'Your home away from home',
    keywords: 'villa, white house, home away from home',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Nav />
        
                {children}
          
        </body>
    </html>
  )
}

export default RootLayout
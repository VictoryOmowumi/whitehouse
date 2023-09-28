import Newsletter from '@/components/Newsletter'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export const metadata = {
    title: 'White House Villa',
    description: 'Your home away from home',
    keywords: 'villa, white house, home away from home',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Add more meta tags if needed */}
      </head>

        <body>
            <Nav />       
                {children}
            <Newsletter />
            <Footer />
        </body>
    </html>
  )
}

export default RootLayout
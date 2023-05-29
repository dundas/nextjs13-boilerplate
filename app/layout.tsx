import '@/styles/globals.css'
const metadata = {
    title: 'Layout',
    description: 'Layout description',
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="description" content={metadata.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{metadata.title}</title>
            </head>
            <body>
                <div className='main'></div>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>

    )
}
export default RootLayout
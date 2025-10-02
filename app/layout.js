import '../styles/globals.css'

export const metadata = {
  title: 'MLOps Course - Dr. Lee | Florida Atlantic University',
  description: 'Machine Learning Operations (MLOps) course taught by Dr. Lee at Florida Atlantic University College of Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

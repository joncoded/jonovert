export const MainDiv = ({children}: any) => {
  return (
    <main className="p-5">
      <div className="w-screen-lg max-w-screen-lg mx-auto">
        {children}
      </div>
    </main>
  )
}
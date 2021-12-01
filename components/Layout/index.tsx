import React from 'react'

export const Layout: React.VFC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <main>
    <div className="mx-4 min-h-screen">
      <div className="container mx-auto flex flex-col mt-8 font-gc mb-16">
        {children}
      </div>
    </div>
  </main>
)

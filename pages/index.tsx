import { Breadcrumbs } from '../components/Breadcrumbs'

export default function Home() {
  return (
    <main>
      <Breadcrumbs
        items={['Service Canada', 'OAS/GIS Account', 'Personal Information']}
      />
      <div className="container mx-auto flex flex-col mt-8 font-gc space-y-4 mb-16">
        <h1 className="h1 mb-10 border-b border-b-[#892f35]">Welcome, Sidra</h1>
      </div>
    </main>
  )
}

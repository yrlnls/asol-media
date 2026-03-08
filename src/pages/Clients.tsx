import ClientLogoGrid from '../components/clients/ClientLogoGrid'

export default function Clients() {
  return (
    <>
    
      <section id="clients" className="section clients">
        <div className="container">
          <div className="section-header center">
            <h2>Trusted across public and private institutions</h2>
          </div>

          <ClientLogoGrid />
        </div>
      </section>
    </>
  )
}

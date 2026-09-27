import FounderMessage from '../components/FounderMessage'
import FounderProfile from '../components/FounderProfile'
import PageBanner from '../components/PageBanner'
import TrackRecord from '../components/TrackRecord'

function About() {
  return (
    <>
      <PageBanner
        eyebrow="About the Founder"
        title="Rafath Alam"
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Advisor reviewing strategy documents"
      />
      <FounderProfile />
      <TrackRecord />
      <FounderMessage />
    </>
  )
}

export default About

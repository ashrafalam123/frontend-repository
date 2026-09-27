import PageBanner from '../components/PageBanner'
import ServiceCategory from '../components/ServiceCategory'

function Services() {
  return (
    <>
      <PageBanner
        eyebrow="Capabilities"
        title="Our Services"
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Industrial engineering and infrastructure operations"
      />
      <ServiceCategory
        number="01"
        title="Industrial Engineering & Infrastructure Advisory"
        intro="We provide high-level technical advisory and project execution frameworks to help large-scale industrial enterprises eliminate operational friction and deliver infrastructure on time."
        imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Industrial plant and infrastructure execution"
        items={[
          {
            title: 'Power Distribution & Busduct Systems',
            description:
              'Strategic planning and technical integration for compact Sandwich Busbar Trunking Systems. We guide developers and contractors through upgrading from conventional cabling to space-saving, highly efficient power architecture.',
          },
          {
            title: 'Greenfield & Expansion Projects',
            description:
              'End-to-end execution advisory for textile industries, complex manufacturing plant expansions, and high-stakes infrastructure layouts.',
          },
          {
            title: 'Turnkey Project Management',
            description:
              'Deploying analytical engineering precision to streamline vendor coordination, audit timelines, and enforce rigorous compliance standards.',
          },
        ]}
      />
      <div className="border-y border-white/5 bg-navy-900">
        <ServiceCategory
          number="02"
          title="Specialized Technology & White-Label Architecture"
          intro="We enable engineering and manufacturing companies to rapidly scale their market footprints and enter high-barrier technical sectors through structured commercial frameworks."
          imageSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80"
          imageAlt="Advanced manufacturing and industrial technology"
          reverse
          items={[
            {
              title: 'White-Label & Trading Frameworks',
              description:
                'Designing robust, compliant white-labeling architectures for advanced industrial components, ensuring seamless brand transitions and nationwide supply chain efficiency.',
            },
            {
              title: 'High-Barrier Industrial Automation',
              description:
                'Project strategy and operational alignment for specialized equipment, including high-integrity radiation-resistant camera systems tailored for specialized industrial sectors.',
            },
            {
              title: 'OEM & Strategic Vendor Tie-Ups',
              description:
                'Structuring joint ventures, deeds of joint undertaking (DJU), and technical partnerships with premier global component manufacturers.',
            },
          ]}
        />
      </div>
      <ServiceCategory
        number="03"
        title="Corporate Strategy & Transaction Advisory"
        intro="We partner directly with enterprise promoters, boards, and institutional stakeholders to navigate complex business life cycles and unlock hidden enterprise value."
        imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Leadership team in a corporate strategy session"
        items={[
          {
            title: 'Management Consulting & Optimization',
            description:
              'Auditing existing workflows, restructuring corporate design, and building scalable business models to drive long-term profitability.',
          },
          {
            title: 'Mergers & Acquisitions (M&A)',
            description:
              'Guiding organizations through corporate transitions, including strategic fit analysis, due diligence frameworks, and post-merger operational synergy.',
          },
          {
            title: 'Institutional Asset & Client Liaison',
            description:
              'Driving business development frameworks and heavy-industrial relationship building targeting top-tier Asset Management Companies and Project Management Consultants (PMCs).',
          },
        ]}
      />
    </>
  )
}

export default Services

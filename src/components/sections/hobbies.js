import React from 'react';
import styled from 'styled-components';

const StyledHobbiesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .hobbies-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    width: 100%;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .hobby-card {
    ${({ theme }) => theme.mixins.boxShadow};
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
  }

  .hobby-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
  }

  .hobby-description {
    margin: 0;
    color: var(--light-slate);
    font-size: 17px;
  }

  .hobby-section + .hobby-section {
    margin-top: 24px;
  }

  .car-section + .car-section {
    margin-top: 10px;
  }

  .hobby-subtitle {
    margin: 0 0 8px;
    color: var(--green);
    font-size: var(--fz-lg);
  }

  .hobby-subsection-title {
    margin: 12px 0 6px;
    color: var(--lightest-slate);
    font-size: var(--fz-sm);
  }

  .hobby-list {
    padding-left: 20px;
    margin: 0;
    color: var(--light-slate);
    font-size: var(--fz-sm);

    li + li {
      margin-top: 6px;
    }
  }
`;

const hobbies = [
  {
    title: 'Music',
    sections: [
      {
        title: 'Genres I enjoy',
        items: ['Progressive House, Deep House, Pop, Hip Hop'],
      },
      {
        title: 'Favorite albums',
        items: [
          'Drake - ICEMAN',
          'Drake - $ome $exy $ongs 4 U',
          'Drake - Her Loss',
          'Drake - Certified Lover Boy',
          'Kanye West - The College Dropout',
          'Kanye West - Late Registration',
          'Kanye West - Graduation',
        ],
      },
      {
        title: 'Current song on repeat',
        items: ['ILLENIUM, Krewella, SLANDER - Lay It Down'],
      },
    ],
  },
  {
    title: 'Autos',
    sections: [
      {
        title: 'Toyota 86',
        subsections: [
          {
            title: 'Modifications',
            items: [
              'Sprintex Supercharger',
              'Tomei UEL Catless Headers',
              'Stage 2 Ecutek tuned by Zach Tucker over at Counter Space Garage',
              'Whiteline Bumpsteer Correction Kit',
              'Bilstein B8 shocks with RCE Tarmac Springs',
              'DW 700cc Injectors',
              'HKS Dual Resonated Front Pipe',
              'Invidia R400 Catback Exhaust',
              'Flex Fuel Kit',
              'MotoEast Air Intake',
            ],
          },
        ],
      },
      {
        title: 'Audi 8V S3',
        subsections: [
          {
            title: 'Modifications',
            items: ['Bilstein B16 Coilover Kit', 'Do88 Intercooler', 'Maxton Design Aero parts'],
          },
        ],
      },
    ],
  },
  {
    title: 'Gaming',
    sections: [
      {
        title: 'All time favorite titles',
        items: [
          'Counter Strike 2',
          'Life is Strange',
          'Resident Evil Series',
          'Old School Runescape',
        ],
      },
      {
        title: 'Currently Playing',
        items: ['Silent Hill: Townfall'],
      },
    ],
  },
];

const Hobbies = () => (
  <StyledHobbiesSection id="hobbies">
    <h2>Hobbies</h2>

    <ul className="hobbies-grid">
      {hobbies.map(({ title, sections }) => (
        <li key={title}>
          <article className="hobby-card">
            <h3 className="hobby-title">{title}</h3>
            {sections.map(({ title: sectionTitle, items, subsections }) => (
              <section
                className={`hobby-section${title === 'Autos' ? ' car-section' : ''}`}
                key={sectionTitle}>
                <h4 className="hobby-subtitle">{sectionTitle}</h4>
                {subsections ? (
                  subsections.map(({ title: subsectionTitle, items: subsectionItems }) => (
                    <div key={subsectionTitle}>
                      <h5 className="hobby-subsection-title">{subsectionTitle}</h5>
                      <ul className="hobby-list">
                        {subsectionItems.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul className="hobby-list">
                    {items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </li>
      ))}
    </ul>
  </StyledHobbiesSection>
);

export default Hobbies;

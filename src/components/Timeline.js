import React, { useState } from 'react';
import './Timeline.css';
import drakeWell from '../assets/images/Drake_Well,_June_2012.jpg';
import spindletop from '../assets/images/The_Spindletop-Gladys_City_Boomtown_Museum.jpg';
import opecFormation from '../assets/images/OPEC_Board_of_Governors_Geneva_September_3_1962_rdax_250x173s.jpg';
import oilEmbargo from '../assets/images/West_Texas_Intermediate_oil_prices_1950–2000_(with_1973_highlight).svg.png';

const timelineEvents = [
  {
    id: 1,
    year: 1859,
    title: "Pennsylvania Oil Boom",
    description: "The birth of the modern oil industry began when Edwin Drake successfully drilled the first commercial oil well in Titusville, Pennsylvania. This breakthrough marked the genesis of the modern petroleum industry and symbolized the transformative power of technological innovation (Yergin, 1991).",
    details: [
      "Drake's well initially produced 25 barrels of oil per day, revolutionizing energy production",
      "The success led to rapid industrialization and urban development across America",
      "Titusville's population exploded from 250 to over 10,000 in just a few years",
      "This innovation provided a more efficient energy source, powering industrial development and urbanization",
      "The boom represented a key moment in the Industrial Revolution, reshaping society through technological advancement"
    ],
    impact: "The Pennsylvania oil boom fundamentally transformed America's industrial landscape. It provided the energy foundation for rapid urbanization and industrial growth, marking a pivotal moment in technological innovation that would reshape society.",
    imageUrl: drakeWell,
    imageCaption: "Edwin Drake and Uncle Billy Smith at Drake's Well (1860s)",
    citation: "Yergin, Daniel. 'The Prize: The Epic Quest for Oil, Money, and Power' (1991)"
  },
  {
    id: 2,
    year: 1901,
    title: "Spindletop Oil Discovery",
    description: "The Lucas Gusher at Spindletop Hill in Beaumont, Texas marked the beginning of the modern petroleum age. The well produced more oil in one day than all other wells combined, marking Texas' transformation into a major oil producer.",
    details: [
      "Produced around 100,000 barrels of oil per day at its peak",
      "Led to the formation of several major oil companies",
      "Transformed Texas into a major industrial state",
      "Demonstrated the potential of rotary drilling technology",
      "Attracted thousands of workers and investors to Texas"
    ],
    impact: "Spindletop revolutionized the oil industry and American energy consumption. It established Texas as a major oil producer and led to numerous technological advancements in drilling techniques.",
    imageUrl: spindletop,
    imageCaption: "The Lucas Gusher at Spindletop (1901)",
    citation: "Olien, Diana Davids. 'Oil in Texas: The Gusher Age, 1895-1945' (2002)"
  },
  {
    id: 3,
    year: 1960,
    title: "OPEC Formation",
    description: "The Organization of Petroleum Exporting Countries (OPEC) was founded in Baghdad, marking a pivotal shift in global oil politics and economics. Five founding members - Iran, Iraq, Kuwait, Saudi Arabia, and Venezuela - sought to coordinate oil policies.",
    details: [
      "Created to counter the dominance of major international oil companies",
      "Established oil-producing countries' control over their resources",
      "Developed mechanisms for managing global oil supply",
      "United developing nations in resource sovereignty",
      "Fundamentally altered global oil market dynamics"
    ],
    impact: "OPEC's formation shifted power in global oil markets from international oil companies to producing nations, fundamentally changing the geopolitics of oil and global economic relations.",
    imageUrl: opecFormation,
    imageCaption: "First OPEC Conference Souvenir (1960)",
    citation: "Yergin, Daniel. 'The Prize: The Epic Quest for Oil, Money, and Power' (1991)"
  },
  {
    id: 4,
    year: 1973,
    title: "OPEC Oil Embargo",
    description: "OPEC imposed an oil embargo against nations supporting Israel during the Yom Kippur War, leading to the first 'oil shock'. This action quadrupled oil prices and exposed the vulnerability of oil-dependent economies.",
    details: [
      "Oil prices rose from $3 to $12 per barrel",
      "Created severe fuel shortages and long gas lines",
      "Triggered global economic recession",
      "Led to creation of Strategic Petroleum Reserve",
      "Sparked interest in energy conservation and alternatives"
    ],
    impact: "The embargo demonstrated oil's crucial role in global politics and economics, leading to major policy changes in energy security and conservation across developed nations.",
    imageUrl: oilEmbargo,
    imageCaption: "Long lines at a gas station during the oil crisis (1973)",
    citation: "Painter, David S. 'Oil and the American Century' (1986)"
  }
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[0]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="timeline-container">
      <div className="timeline">
        <h2 className="timeline-title">Oil Industry Evolution</h2>
        {timelineEvents.map((event) => (
          <div
            key={event.id}
            className={`timeline-event ${selectedEvent?.id === event.id ? 'active' : ''}`}
            onClick={() => handleEventClick(event)}
          >
            <div className="timeline-date">{event.year}</div>
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="event-details">
        <h2>{selectedEvent.title}</h2>
        <div className="event-year">{selectedEvent.year}</div>
        
        <div className="multimedia-section">
          <figure className="image-container">
            <img 
              src={selectedEvent.imageUrl} 
              alt={selectedEvent.imageCaption}
            />
            <figcaption>{selectedEvent.imageCaption}</figcaption>
          </figure>
        </div>

        <div className="details-list">
          <div className="description-section">
            <p className="main-description">{selectedEvent.description}</p>
          </div>
          
          <h3>Key Developments</h3>
          <div className="key-points">
            {selectedEvent.details.map((detail, index) => (
              <p key={index} className="detail-point">
                <span className="detail-bullet">•</span>
                {detail}
              </p>
            ))}
          </div>

          <div className="impact-section">
            <h3>Historical Impact</h3>
            <p>{selectedEvent.impact}</p>
          </div>

          <p className="citation">
            <strong>Citation:</strong> {selectedEvent.citation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
